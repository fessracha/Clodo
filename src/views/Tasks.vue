<template>
    <div>
        <TaskToolbar/>
        <TaskList/>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import TaskToolbar from '@/components/task/TaskToolbar.vue';
import TaskList from '@/components/task/TaskList.vue';

@Component ({
  components: {
    Header,
    TaskToolbar,
    TaskList,
  },
})
export default class App extends Vue {
}
</script>
