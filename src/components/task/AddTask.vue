<template>
  <div>
    <i class="ms-Icon ms-Icon--Add iconSize-24" />
    <BaseInput class="py-4 px-3 font-semibold"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BaseInput from '@/components/ui/BaseInput.vue';

@Component({
  components: {
    BaseInput,
  },
})

export default class AddTask extends Vue {
}
</script>
