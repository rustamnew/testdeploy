<script setup>
import TodoItem from './TodoItem.vue'

import { useTodoStore } from '../stores/todo';
import { useConfigStore } from '../stores/config';

import IconPlus from './icons/IconPlus.vue';
</script>

<template>
    <h2>Список задач</h2>

    <div class="todo">
        <TodoItem v-for="item, index in todoStore.items" :key="index" :itemProp="item" :index="index"/>

        <span class="empty" v-if="!todoStore.items.length">Нет задач</span>

        <button class="add-todo" v-if="configStore.config.todoAddForm === false" @click="addItem()">
            <IconPlus color="green" size="4rem"/>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            const todoStore = useTodoStore()
            const configStore = useConfigStore()

            
            return {
                todoStore,
                configStore
            }
        },
        created() {
            this.todoStore.loadData()
        },
        methods: {
            addItem() {
                this.todoStore.createItem()
            }
        }
    }
</script>

<style scoped lang="scss">
    h2 {
        margin-bottom: 1rem;
    }
    .todo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        width: 100%;
    }

    .empty {
        width: 100%;
        text-align: center;
    }

    .add-todo {
        border: 3px green solid;
        border-radius: 4px;
        background: none;
        padding: 10px 20px;
        height: 11rem;
        width: 350px;
        align-self: center;
        cursor: pointer;

        &:hover {
            background: rgba(5, 175, 5, 0.2);
        }
    }

    @media (max-width: 800px) {
        .todo {
            flex-direction: column;
            align-items: center;
        }
        .add-todo {
            width: 100%;
        }
    }
</style>
