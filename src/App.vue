<script setup lang="ts">
import SearchForm from './components/SearchForm.vue'
import SearchResults from './components/SearchResults.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue';
</script>

<template>
    <div class="flex flex-col w-full h-full items-center">
        <header class="border-b py-5 flex flex-col items-center mb-10 w-full bg-white dark:bg-opacity-0">
            <h1 class="text-lg mb-4 dark:text-white">Поиск репозиториев</h1>

            <SearchForm />
        </header>

        <main class="h-full w-full ">
            <SearchResults />
        </main>
    </div>

    <ThemeSwitcher />
</template>

<style>
html.dark {
    color-scheme: dark;
}
html, body, #app {
    height: 100%;
}
</style>

