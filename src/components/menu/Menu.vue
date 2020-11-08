<template>
  <ul>
    <!--TODO move menu in array -->
    <router-link
      to="/tasks/inbox"
      v-slot="{isActive, href, navigate}"
    >
      <MenuItem :title="'Задачи'"
                :count="12"
                :isActive="isActive"
                :href="href"
                :navigate="navigate"
      >
        <template v-slot:icon>
          <i class="ms-Icon ms-Icon--Home"></i>
        </template>
      </MenuItem>
    </router-link>
    <router-link
      to="/tasks/important"
      v-slot="{isActive, href, navigate}"
    >
      <MenuItem :title="'Важно'"
                :count="3"
                :isActive="isActive"
                :href="href"
                :navigate="navigate">
        <template v-slot:icon>
          <i class="ms-Icon ms-Icon--FavoriteStar"></i>
        </template>
      </MenuItem>
    </router-link>
  </ul>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import MenuItem from '@/components/menu/MenuItem.vue';

@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
}
</script>
