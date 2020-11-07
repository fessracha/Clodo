<template>
    <li class="menu-item">
      <!--TODO Возможно следует вынести icon в отдельный компонент-->
      <div class="icon ms-Icon ms-Icon--Home"></div>
      <div class="menu-item-title">Задачи</div>
      <div class="menu-item-count">5</div>
    </li>
</template>
<style>
.menu-item {
  @apply flex items-center px-3 cursor-pointer;
  height: 36px;
  transition: 0.1s background-color ease;
}
.menu-item:hover {
  @apply bg-white;
}
.menu-item-title {
  @apply mx-2 text-sm overflow-hidden;
}
.menu-item-count {
  @apply text-sm ml-auto;
}
.icon {
  min-width: 24px;
  text-align: center;
}
</style>
