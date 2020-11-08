<template>
    <li class="menu-item"
      :class="{'menu-item--active': isActive}"
      @click="$emit('click')">
      <a class="menu-item-link"
         :href="href"
         @click="navigate">
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <div class="menu-item-title">{{ title }}</div>
        <div class="menu-item-count">{{ count }}</div>
      </a>
    </li>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class MenuItem extends Vue {
  @Prop({default: ''}) title?: string;
  @Prop({default: ''}) count?: number;
  @Prop({default: false}) isActive?: boolean;
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
.menu-item-link {
  @apply flex items-center h-full;
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
