<template>
  <ul>
    <MenuItem/>
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
