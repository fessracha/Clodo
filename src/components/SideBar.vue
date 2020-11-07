<template>
  <div class="sidebar"
    :class="{'sidebar--opened': isOpened}">
    <div class="sidebar-header">
      <BaseButton class="text-xl leading-none p-1"
                  @click="isOpened = !isOpened">
        <i class="ms-Icon ms-Icon--GlobalNavButton"></i>
      </BaseButton>
    </div>
    <div class="sidebar-body">
      <Menu/>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Menu from '@/components/menu/Menu.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

@Component({
  components: {
    Menu,
    BaseButton,
  },
})

export default class SideBar extends Vue {
  isOpened: boolean = true;
}
</script>
<style scoped>
.sidebar {
  @apply bg-clodo-gray-1;
  min-height: 100vh;
  width: 50px;
  overflow: hidden;
  transition: 0.2s width ease;
}
.sidebar--opened {
  width: 290px;
}
.sidebar-header {
  @apply px-2 mt-3;
}
</style>
