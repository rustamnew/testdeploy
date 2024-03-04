<script setup>
import Toggle from './inputs/Toggle.vue';
import { useConfigStore } from '../stores/config';
</script>

<template>
    <div class="app-options">
        <Toggle :active="configStore.config.todoAddForm" @toggle="setOption('todoAddForm', $event)" text="Отображать форму добавления задачи"/>
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
        methods: {
            setOption(option, event) {
                this.configStore.config[option] = event
                this.configStore.saveData()
            }
        }
    }
</script>
