<template>
  <div>
    <BaseInput class="py-4 px-3"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import BaseInput from '@/components/ui/BaseInput.vue';

@Component({
  components: {
    BaseInput,
  },
})

export default class AddTask extends Vue {
}
</script>
