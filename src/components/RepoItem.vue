<script setup lang="ts">
    import { type PropType } from 'vue'
    import IconStar from './icons/IconStar.vue'

    type Owner = {
        login: string,
        avatar_url: string,
    }

    interface RepoItem {
        name: string,
        owner: Owner,
        description: string,
        language: string,
        stargazers_count: string,
    }

    const props = defineProps({
        item: Object as PropType<RepoItem>
    })
</script>

<template>
    <div class="item p-2 border rounded-lg my-4 flex flex-col max-w-xl w-full">
        <div class="title flex flex-col items-start mb-5">
            <div class="name">
                <a :href="`https://github.com/${item?.owner.login}/${item?.name}`" target="_blank" class="flex font-medium dark:text-white">
                    {{ item?.name }}
                </a>
            </div>

            <div class="author">
                <a :href="`https://github.com/${item?.owner?.login}`" target="_blank" class="flex items-center mr-3">
                    <img class="size-5 rounded-full mr-2" :src="item?.owner?.avatar_url" alt="user_avatar">
                    <span class="dark:text-white">{{ item?.owner.login }}</span>
                </a>
            </div>
        </div>

        <div class="text mb-3 font-medium dark:text-white">
            {{ item?.description }}
        </div>

        <div class="additional flex">
            <div class="language mr-2 text-sm dark:text-white">
                {{ item?.language }}
            </div>

            <div class="stargazers ml-auto">
                <a :href="`https://github.com/${item?.owner.login}/${item?.name}/stargazers`" class=" flex items-center text-sm font-medium dark:text-white" target="_blank">
                    <IconStar />
                    {{ item?.stargazers_count }}
                </a>
            </div>
        </div>
    </div>

</template>