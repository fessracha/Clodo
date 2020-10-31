<template>
  <div
    class="search-select bg-clodo-blue-2 hover:bg-white cursor-pointer">
    <div
      class="search-select__icon">
    </div>
    <div
      class="h-full"
      @click="isShowInput = !isShowInput">
      <div
        v-if="isShowInput">
        <input
          class="search-select__input cursor-text"
          type="text">
        <div
          class="search-select__close"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class SearchSelect extends Vue {
  isShowInput: boolean = false;
}
</script>
<style scoped>
.search-select {
  border-radius: 2px;
  height: 32px;
  transition: all 0.3s ease;
}
.search-select__input {
  background: transparent;
}
</style>
