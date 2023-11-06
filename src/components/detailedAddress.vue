<!--<template>-->
<!--  <div>-->
<!--    <el-form :model="form">-->
<!--      <el-form-item label="公墓地址" prop="address">-->
<!--        <el-cascader-->
<!--            v-model="form.address"-->
<!--            :options="areaOptions"-->
<!--             placeholder="行政区划"-->
<!--            :props="{ value: 'name', label: 'name', children: 'city' }"-->
<!--            @change="handleAddressChange"-->
<!--        >-->
<!--          <template #default="{ data }">-->
<!--            <span>{{ data.name }}</span>-->
<!--          </template>-->
<!--        </el-cascader>-->
<!--      </el-form-item>-->
<!--      <el-form-item prop="detailedAddress" label-width="0">-->
<!--        <el-input v-model="form.detailedAddress" placeholder="请输入详细地址" style="width: 100%"/>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import areaData from "@/assets/data/shengShiQuData.json";-->

<!--const areaOptions = areaData.map((province) => ({-->
<!--  label: province.name,-->
<!--  value: province.name,-->
<!--  children: province.city.map((city) => ({-->
<!--    label: city.name,-->
<!--    value: city.name,-->
<!--    children: city.area.map((area) => ({-->
<!--      label: area,-->
<!--      value: area,-->
<!--    })),-->
<!--  })),-->
<!--}));-->
<!--console.log(areaOptions)-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      form: {-->
<!--        address: [],-->
<!--        detailedAddress: "",-->
<!--      },-->
<!--      areaOptions,-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    handleAddressChange(value) {-->
<!--      console.log("value",value);-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->
