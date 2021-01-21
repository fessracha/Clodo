<template>
  <div class="task-item">
    <CheckMark/>
    <div class="task-item__label">
      <span>test</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CheckMark from '@/components/ui/CheckMark.vue';

@Component({
  components: {
    TaskItem,
    CheckMark,
  },
})

export default class TaskItem extends Vue {}
</script>
<style>
.task-item {
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #c5c5c542;
  padding: 0 10px;
}

.task-item:hover {
  background-color: #f5f5f5;
}

.task-item__label {
  padding: 16px 12px;
  font-size: 14px;
  color: #222222;
}
</style>
