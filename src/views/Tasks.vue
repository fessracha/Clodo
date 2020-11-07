<template>
  <div>
    <Sidebar/>
    <div>
      main-content
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/SideBar.vue';
import '@/plugins/directives/click-outside.js';

@Component ({
  components: {
    Header,
    Sidebar,
  },
})
export default class App extends Vue {
}
</script>
