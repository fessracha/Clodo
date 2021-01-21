<template>
  <ul>
    <!--TODO move menu in array -->
    <router-link
      v-slot="{isActive, href, navigate}"
      to="/tasks"
    >
      <MenuItem
        :title="'Задачи'"
        :count="12"
        :is-active="isActive"
        :href="href"
        :navigate="navigate"
      >
        <template #icon>
          <i class="ms-Icon ms-Icon--Home"/>
        </template>
      </MenuItem>
    </router-link>
    <router-link
      v-slot="{isActive, href, navigate}"
      to="/tasks/important"
    >
      <MenuItem
        :title="'Важно'"
        :count="3"
        :is-active="isActive"
        :href="href"
        :navigate="navigate"
      >
        <template #icon>
          <i class="ms-Icon ms-Icon--FavoriteStar"/>
        </template>
      </MenuItem>
    </router-link>
  </ul>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MenuItem from '@/components/menu/MenuItem.vue';

@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
}
</script>
