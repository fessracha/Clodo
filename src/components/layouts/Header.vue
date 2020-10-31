<template>
  <div class="header">
    <div class="header__logo">Clodo</div>
    <div class="header__search">
      <SearchSelect/>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import SearchSelect from '@/components/ui/SearchSelect.vue';

@Component({
  components: {
    SearchSelect,
  },
})

export default class Header extends Vue {
}
</script>
<style scoped>
  .header {
    @apply bg-clodo-blue-1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
  }
  .header__logo {
    @apply text-white;
    position: absolute;
    top: auto;
    left: 15px;
  }
  .header__search {
    width: 400px;
  }
</style>
