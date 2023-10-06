<script>
import { useCounterStore } from '@/stores/counter';
export default {
  setup(){
    const mainStore = useCounterStore ();
    const count1=useCounterStore().count;
    console.log(mainStore.count++); // 获取到Store中的count
    return{
      mainStore,
      count1
    }
  }
}
</script>
<template>
  <div>初始次数为：{{count1}}</div>
  <el-button @click="mainStore.increment">次数添加</el-button>
  <div>添加后的次数为：{{ mainStore.count }}</div>

</template>