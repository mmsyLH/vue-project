<template>
  <div class="users">
    <el-card>
      <div slot="header">
        <el-row>
          <el-col :span="12">
            <h3>用户列表</h3>
          </el-col>
          <el-col :span="12" class="text-right">
            <el-button type="primary" @click="addUser">添加用户</el-button>
          </el-col>
        </el-row>
      </div>
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button type="text" @click="editUser(row)">编辑</el-button>
            <el-button type="text" @click="deleteUser(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="prev, pager, next"
          @current-change="handlePageChange"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
import { ElButton, ElCard, ElCol, ElPagination, ElRow, ElTable, ElTableColumn } from 'element-plus';

export default {
  name: 'Users',
  components: { ElButton, ElCard, ElCol, ElPagination, ElRow, ElTable, ElTableColumn },
  data() {
    return {
      users: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get('/users', { params: { page: this.currentPage, size: this.pageSize } })
          .then(response => {
            this.users = response.data.list;
            this.total = response.data.total;
          })
          .catch(error => {
            console.error(error);
          });
    },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
      this.getUsers();
    },
    addUser() {
      // TODO: 实现添加用户功能
    },
    editUser(user) {
      // TODO: 实现编辑用户功能
    },
    deleteUser(user) {
      // TODO: 实现删除用户功能
    },
  },
};
</script>

<style scoped>
.users {
  padding: 20px;
}
</style>
