<template>
  <li
    class="menu-item"
    :class="{'menu-item--active': isActive}"
    @click="$emit('click')"
  >
    <a
      class="menu-item__link"
      :href="href"
      @click="navigate"
    >
      <div class="menu-item__icon">
        <slot name="icon"/>
      </div>
      <div class="menu-item__title">{{ title }}</div>
      <div class="menu-item__count">{{ count }}</div>
    </a>
  </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop({ default: '' }) title?: string;
  @Prop({ default: '' }) count?: number;
  @Prop({ default: false }) isActive?: boolean;
  @Prop() href?: string;
  @Prop() navigate?: any;
}
</script>
<style>
.menu-item {
  @apply px-3 cursor-pointer;
  height: 36px;
  transition: 0.1s background-color ease;
}
.menu-item:hover {
  @apply bg-white;
}
.menu-item--active {
  @apply text-clodo-blue-4 font-semibold;
}
.menu-item__link {
  @apply flex items-center h-full;
}
.menu-item__title {
  @apply mx-2 text-sm overflow-hidden;
}
.menu-item__count {
  @apply text-sm ml-auto;
}
.menu-item__icon {
  min-width: 24px;
  text-align: center;
}
</style>
