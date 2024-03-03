<script setup>
import TodoItem from './TodoItem.vue'

import { useTodoStore } from '../stores/todo';

import IconPlus from './icons/IconPlus.vue';
</script>

<template>
    <div class="todo">
        <TodoItem v-for="item, index in todoStore.items" :key="index" :itemProp="item" :index="index"/>

        <button class="add-todo" v-if="true/*!todoStore.items.length*/" @click="addItem()">
            <IconPlus color="green" size="4rem"/>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            const todoStore = useTodoStore()
            
            return {
                todoStore
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
    .todo {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
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
    }
</style>
