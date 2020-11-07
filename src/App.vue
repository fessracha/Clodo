<template>
  <div id="app">
    <Header/>
    <div>
      <RouterView/>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import '@/plugins/directives/click-outside.js';

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
