<script setup>

</script>

<template>
    <div class="profile">
        <div class="info">
            <div class="name">{{ name }}</div>
            <div class="position">{{ position }}</div>
        </div>

        <div class="avatar">
            <div class="title">{{ avatar_title }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Барнаби Мармадюк',
                position: 'Преподаватель',
                avatar_title: 'БМ'
            }
        }
    }
</script>

