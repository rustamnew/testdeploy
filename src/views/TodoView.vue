<script setup>
import Todo from '../components/Todo.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
    <h1>Список задач</h1>
    
    <Todo />

    <router-link class="router-link" to="/">&larr; На главную </router-link>
</template>