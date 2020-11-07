<template>
  <button class="hover:bg-white hover:shadow-md" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
