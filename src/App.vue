<template>
  <div
    id="app"
  >
    <Header />
    <div>
      <SideBar />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/layouts/Header.vue';
import SideBar from '@/components/layouts/SideBar.vue';

@Component ({
  components: {
    Header,
    SideBar,
  },
})
export default class App extends Vue {
}
</script>
<style>
@import "./assets/tailwind.css";
</style>
