<script setup>
import {RouterView } from 'vue-router'
</script>

<template>
    <div class="page">
        <RouterView />
    </div>
</template>

<style>
    #app > .page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        margin-bottom: 3rem;
        font-size: 3rem;
    }

    div + .router-link {
        margin-top: 2rem;
    }
</style>
