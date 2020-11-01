<template>
  <div
    class="search-select bg-clodo-blue-2 hover:bg-white cursor-pointer"
    @click.stop="toggleInputActive"
  >
    <div
      class="search-select__icon"
      @click="isInputActive = true"
    >
      <i
        class="ms-Icon ms-Icon--Search"
        title="Search"
        aria-hidden="true"
      ></i>
    </div>
    <input
      ref="input"
      class="search-select__input cursor-text"
      type="text"
      v-click-outside="() => isInputActive = false"
    >
    <div
      class="search-select__close"
      v-if="isInputActive"
    >
      <i
        class="ms-Icon ms-Icon--ChromeClose"
        title="ChromeClose"
        aria-hidden="true">
      </i>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';

@Component({})
export default class SearchSelect extends Vue {
  isInputActive: boolean = false;

  toggleInputActive() {
    this.isInputActive = !this.isInputActive;
  }

  @Watch('isInputActive')
  onChildChanged(val: boolean) {
    if (val) {
      // @ts-ignore
      this.$refs.input.focus();
    }
  }
}
</script>
<style scoped>
.search-select {
  display: flex;
  align-items: center;
  border-radius: 2px;
  height: 32px;
  transition: all 0.2s ease;
  padding: 8px 30px 8px 8px;
  position: relative;
}
.search-select__input {
  background: transparent;
  font-size: 13px;
  outline: none;
  line-height: 1;
  width: 100%;
}
.search-select__icon {
  @apply text-clodo-blue-3;
  font-size: 15px;
  line-height: 1;
  margin-right: 15px;
}
.search-select__close {
  @apply text-clodo-blue-3;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  line-height: 1;
  transition: all 0.2s ease;
  border-radius: 2px;
}
.search-select__close:hover {
  @apply bg-gray-200;
}
</style>
