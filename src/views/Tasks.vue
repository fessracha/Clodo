<template>
    <div>
      main-content
    </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import '@/plugins/directives/click-outside.js';

@Component ({
  components: {
    Header,
  },
})
export default class App extends Vue {
}
</script>
