<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <br>
                <h3>DANH SÁCH SINH VIÊN</h3>
                <br>
                <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                    <th scope="row">{{index}}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.gender }}</td>
                    <td>
                        <button class="btn btn-danger" @click="removeItem(index)">Xóa</button>
                        <button class="btn btn-warning" @click="updateItem(index)">Sửa</button>
                    </td>
                    </tr>
                </tbody>
                </table>
                <br>
                <router-link
                    tag="button"
                    class="btn btn-primary"
                    :to="{name: 'adduser'}">Thêm Mới</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Update from './Update.vue'
export default {
    data() {
        return {
            users: JSON.parse(localStorage.getItem('users'))
        }
    },
    components: {
        Update
    },
    methods: {
        removeItem(index) {
            this.users.splice(index, 1)
        },
        updateItem(index) {
            this.$router.push({name: 'useredit', params:{id: index}});
        }
    },
}
</script>
<style>
    
</style>