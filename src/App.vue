<template>
  <div id="app">
    <div class="h-screen">
      <Header/>
      <div class="page-wrapper">
        <SideBar/>
        <div class="center-content">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';

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
.page-wrapper {
  display: flex;
  height: calc(100vh - 48px);
}
.center-content {
  flex: 1 1 auto;
}
</style>
