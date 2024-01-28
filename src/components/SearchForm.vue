<script setup lang="ts">

import { useRepoStore } from "@/stores/repo"
</script>

<template>
    <div class="search-form flex justify-center w-full max-w-96">
        <input 
        type="text" 
        placeholder="Название"
        @keyup="searchRequest()"
        v-model="searchQuery"
        class="
        bg-gray-50 border 
        border-gray-300 
        text-gray-900 
        text-sm 
        rounded-lg 
        focus:ring-blue-500 
        focus:border-blue-500 
        block 
        w-full 
        p-2.5 
        dark:bg-gray-700 
        dark:border-gray-600 
        dark:placeholder-gray-400 
        dark:text-white 
        dark:focus:ring-blue-500 
        dark:focus:border-blue-500">
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            const repoStore = useRepoStore()

            return {
                searchQuery: '',
                repoStore
            }
        },
        mounted() {
            this.getQueryParams()
        },
        methods: {
            searchRequest() {
                this.repoStore.searchQuery = this.searchQuery
                this.repoStore.searchRepos()
                this.setQueryParams()
            },
            setQueryParams() {
                this.$router.push({ path: this.$route.path, query: { q: this.searchQuery }})
            },
            getQueryParams() {
                let urlParams = new URLSearchParams(window.location.search);
                const q = urlParams.get('q')
                const page = urlParams.get('page')
                const per_page = urlParams.get('per_page')

                if (page) {
                    this.repoStore.pagination.current_page = Number(page) 
                }
                if (per_page) {
                    this.repoStore.pagination.per_page = Number(per_page) 
                }
                if (q) {
                    this.repoStore.searchQuery = q
                    this.searchQuery = q
                    this.repoStore.searchRepos(true)
                } else {
                    this.$router.push({ path: this.$route.path, query: { }})
                }
            }
        }
    }
</script>