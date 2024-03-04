<script setup>
import { RouterView } from 'vue-router'
import { useConfigStore } from './stores/config';
</script>

<template>
    <div class="page">
        <RouterView />
    </div>
</template>

<script>
    export default {
        data() {
            const configStore = useConfigStore()

            return {
                configStore
            }
        },
        created() {
            this.configStore.loadData()
        }
    }
</script>

<style>
    #app {
        width: 100%;
    }
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

    @media (max-width: 800px) {
        h1 {
            text-align: center;
            margin-bottom: 2rem;
            line-height: 1.2;
        }
    }
</style>
