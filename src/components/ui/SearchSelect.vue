<template>
  <div
    class="search-select bg-clodo-blue-2 hover:bg-white cursor-pointer"
    @click.stop="toggleVisibleInput"
  >
    <div
      class="search-select__icon"
    >
      <i
        class="ms-Icon ms-Icon--Search"
        title="Search"
        aria-hidden="true"
      ></i>
    </div>
    <div
      class="h-full">
      <div>
        <input
          ref="input"
          class="search-select__input cursor-text"
          type="text"
          v-click-outside="() => isShowInput = false"
        >
        <div
          class="search-select__close"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class SearchSelect extends Vue {
  isShowInput: boolean = false;

  toggleVisibleInput() {
    this.isShowInput = !this.isShowInput;
    if (this.isShowInput) {
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
  transition: all 0.3s ease;
  padding: 8px;
}
.search-select__input {
  position: absolute;
  top: auto;
  background: transparent;
  font-size: 13px;
  outline: none;
  line-height: 1;
}
.search-select__icon {
  @apply text-clodo-blue-3;
  font-size: 15px;
  line-height: 1;
  margin-right: 15px;
}
</style>
