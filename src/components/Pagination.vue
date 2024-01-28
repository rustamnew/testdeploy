<script setup lang="ts">

import Paginate from "vuejs-paginate-next";
import { useRepoStore } from "@/stores/repo"
</script>

<template>
    <div class="flex flex-wrap items-center justify-center pb-5 max-w-xl w-full mx-auto">
        <Paginate 
        :page-count="repoStore.pagination.total_pages"
        v-model="repoStore.pagination.current_page"
        :click-handler="setPage"
        :prev-text="'Пред'"
        :next-text="'След'"
        :container-class="'page-list'"
        />

        <div class="flex items-center ml-auto my-6">
            <label for="per_page" class="mr-2">Показывать по:</label>

            <select name="" id="per_page" v-model="repoStore.pagination.per_page" @change="repoStore.searchRepos()" class="
                bg-gray-50 
                border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                focus:ring-blue-500 
                focus:border-blue-500 
                block 
                w-20 
                p-2.5 
                dark:bg-gray-700 
                dark:border-gray-600
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500">
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
            </select>
        </div>
    </div>
    
</template>

<script lang="ts">
    export default {
        data() {
            const repoStore = useRepoStore()
            return {
                repoStore,
            }
        },
        methods: {
            setPage(page: number) {
                this.repoStore.pagination.current_page = page
                this.setQueryParams()
                this.repoStore.searchRepos(true)
            },
            setQueryParams() {
                this.$router.push({ path: this.$route.path, query: { 
                    page: this.repoStore.pagination.current_page,
                    per_page: this.repoStore.pagination.per_page,
                    q: this.repoStore.searchQuery
                }})
            }
        }
    }
</script>

<style>
    .page-list {
        @apply flex justify-center
    }
    .page-list .page-item {
        @apply mx-1
    }
    .page-list .page-item a {
        @apply border rounded-lg py-2 px-4 block w-full h-full hover:bg-sky-500 hover:text-white
    }
    .page-list .page-item:not(.disabled) a {
        @apply cursor-pointer 
    }
    .page-list .page-item.active a {
        @apply bg-sky-500 text-white
    }

    @media (max-width: 500px) {
        .page-list .page-item a {
            @apply py-1 px-2
        }
    }
</style>