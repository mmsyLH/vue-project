<script>
import { useCounterStore } from '@/stores/counter';
import {login} from "@/http";
export default {
  setup(){
    const mainStore = useCounterStore ();
    const count1=useCounterStore().count;
    return{
      mainStore,
      count1
    }

  },
  methods: {
    testAxios() {
      let data = {
        "email": "414090297@qq.com",
        "password": "12345678"
      }

      login(data).then(function(res){

        console.log(res);
      }).catch(function(err){

        console.log(err);
      })
    }
  },

}

</script>
<template>
  <div>初始次数为：{{count1}}</div>
  <el-button @click="cheng2">次数添加</el-button>
  <el-button @click="mainStore.increment">次数添加</el-button>
  <div>添加后的次数为：{{ mainStore.count }}</div>
  <el-button @click="testAxios">测试axios</el-button>
</template>