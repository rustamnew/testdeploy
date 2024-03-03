<script setup>
import Toggle from './inputs/Toggle.vue';
</script>

<template>
    <div class="app-options">
        <Toggle @toggle="setFormOption($event)" text="Отображать форму добавления задачи"/>
    </div>
</template>

<script>
    export default {
        methods: {
            setFormOption(event) {
                console.log(event)
            }
        }
    }
</script>
