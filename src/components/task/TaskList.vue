<template>
  <div class="task-list">
    <div class="mx-2">
      <AddTask class="task-list__item"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import AddTask from '@/components/task/AddTask.vue';

@Component({
  components: {
    AddTask,
  },
})

export default class TaskList extends Vue {
}
</script>
<style scoped>
.task-list__item {
  padding: 0 12px;
}
</style>
