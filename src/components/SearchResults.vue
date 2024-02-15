<script setup lang="ts">
import { useRepoStore } from "@/stores/repo"

import Loading from './Loading.vue'
import RepoItem from './RepoItem.vue'
import Pagination from './Pagination.vue'


</script>

<template>
    <Loading v-if="repoStore.isLoading === true"/>

    <div v-if="repoStore.errorMessage" class="mt-4">
        {{ repoStore.errorMessage }}
    </div>

    <div class="flex flex-col justify-between h-full w-full">
        <div class="search-results flex flex-col items-center">
            <RepoItem v-for="item in repoStore.repos" :item="item"/>

            <div class="empty text-3xl font-bold text-center dark:text-white" v-if="!repoStore.repos.length && repoStore.isLoading === false">
                Нет записей
            </div>
        </div>

        <Pagination v-if="repoStore.repos.length" />
    </div>
    
</template>

<script lang="ts">
    export default {
        data() {
            const repoStore = useRepoStore()

            return {
                repoStore
            }
        },
        methods: {
            setPage(page: number) {
                this.repoStore.pagination.current_page = page
            }
        }
    }
</script>
