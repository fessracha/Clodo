<template>
  <input
    type="text"
    placeholder="Добавить задачу"
    class="base-input"
  >
</template>
<style scoped>
.base-input {
  @apply text-clodo-gray-3;
  font-size: 14px;
  line-height: normal;
}
.base-input::placeholder {
  @apply text-clodo-blue-6;
  transition: 0.3s ease all;
}
.base-input:focus::placeholder {
  @apply text-clodo-gray-2;
}
</style>
