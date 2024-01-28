<script setup lang="ts">
import IconDarkMode from './icons/IconDarkMode.vue'
import IconLightMode from './icons/IconLightMode.vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <button class="fixed border bg-white border-black rounded-full p-3 bottom-10 left-10 dark:border-white" @click="toggleDark()">
        <IconDarkMode v-if="!isDark"/>
        <IconLightMode v-if="isDark"/>
    </button>
</template>