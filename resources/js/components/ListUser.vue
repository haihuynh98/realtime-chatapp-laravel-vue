<template>
    <div class="card mb-sm-3 mb-md-0 contacts_card">
        <div class="card-header">
            <h3 class="d-flex text-white">Online<span class="badge badge-success ml-2">{{ usersOnline.length }}</span></h3>
            <div class="input-group">
                <input v-model="searchQuery" type="text" placeholder="Search..." name="" class="form-control search">
                <div class="input-group-prepend">
                    <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
                </div>
            </div>
        </div>
        <div class="card-body contacts_body">
            <div class="contacts">
                <li v-for="user in users" :key="user.id" @click="this.$emit('selectReceiver', user)">
                    <div class="current-user-mark" v-if="user.id === $root.user.id"/>
                    <div class="d-flex bd-highlight">
                        <div class="img_cont">
                            <img :src="user.id === $root.user.id ? '/images/current_user.jpg' : '/images/other_user.jpg'" class="rounded-circle user_img">
                            <span class="online_icon " v-bind:class="{'offline' :!checkOnline(user)}"></span>
                        </div>
                        <div class="user_info">
                            <span>{{ user.name }} {{ user.id === $root.user.id ? '(You)' : '' }}</span>
                            <span class="badge badge-danger font-12px" v-if="user.new_messages">
                                {{ user.new_messages }}
                            </span>
                            <p v-if="checkOnline(user)">{{ user.name }} is online</p>
                            <p v-else>{{ user.name }} is offline</p>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            usersOnline: {
                type: Array,
                required: true,
            },
            users: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                searchQuery: '',
                usersOffline: [],
            }
        },
        methods: {
            checkOnline(user) {
                let i
                for (i = 0; i < this.usersOnline.length; i++) {
                    if (this.usersOnline[i].id === user.id) {
                        return true
                    }
                }
                return false
            },
        },
        computed: {
            filteredUsersList() {
                return this.usersOnline.filter(row => row.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
            },
            update() {
            },
        },
        beforeUpdate() {
            this.update
        },
    }
</script>
<style></style>
