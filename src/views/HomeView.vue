<script setup>
import { RouterLink } from 'vue-router';
import AppOptions from '../components/AppOptions.vue';
</script>

<template>
    <h1>Главная страница</h1>

    <AppOptions />

    <router-link class="router-link" to="/todo">К списку задач &rarr;</router-link>
</template>
