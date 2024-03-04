<script setup>
import Todo from '../components/Todo.vue'
import TodoAdd from '../components/TodoAdd.vue'
import { RouterLink } from 'vue-router';
import { useConfigStore } from '../stores/config';

const configStore = useConfigStore()
</script>

<template>
    <TodoAdd v-if="configStore.config.todoAddForm === true"/>
    
    <Todo />

    <router-link class="router-link" to="/">&larr; На главную </router-link>
</template>