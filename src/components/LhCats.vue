<template>
    <div class="cjb-cat-list" @click="$emit('curCat',curCat)"> 
        <LhCat v-for="(item) in catList" :title="item.catName" :id="item.id" :showInNav="LhCat === item.id" @changeCat="changeCat"></LhCat>
    </div>
</template>

<script>
import LhCat from "@/components/LhCat.vue";

export default {
  computed: {
    LhCat() {
      return LhCat
    }
  },
  components: {LhCat},
    data() {
        return {
            curCat: 1,
        }
    },
    props: {
        catList: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
    },
    methods: {
        changeCat(id) {
            this.curCat = id;
        }
    }
}
</script>

<style>
    .cjb-cat-list{
        display: flex;
        flex-direction: column;
    }
</style>