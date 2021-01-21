<template>
  <div class="task-list">
    <TaskLine>
      <AddTask/>
    </TaskLine>
    <TaskItem/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AddTask from '@/components/task/AddTask.vue';
import TaskLine from '@/components/task/TaskLine.vue';
import TaskItem from '@/components/task/TaskItem.vue';

@Component({
  components: {
    AddTask,
    TaskLine,
    TaskItem,
  },
})

export default class TaskList extends Vue {}
</script>
