<script setup>
import IconCross from './icons/IconCross.vue';
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits()

const modalContent = ref(null)

onClickOutside(modalContent, () => { emit('cancel') })
</script>

<template>
    <div class="modal">
        <div class="content" ref="modalContent">
            <h5 class="title" v-if="title">{{ title }}</h5>

            <p class="message" v-if="message"> {{ message }}</p>

            <div class="buttons" v-if="mode === 'confirm'">
                <button @click="confirm()">Ок</button>
                <button @click="close()">Отмена</button>
            </div>

            <div class="buttons" v-if="mode === 'message' || !mode">
                <button @click="close()">Ок</button>
            </div>

            <button class="close" @click="close()"><IconCross size="100%" color="black"/></button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            message: String,
            callback: Function,
            mode: String
        },
        methods: {
            confirm() {
                this.callback()
            },
            close() {
                this.$emit('cancel')
            }
        }
    }
</script>

<style scoped lang="scss">
    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            background-color: #fff;
            padding: 1rem;
            border-radius: 6px;
            position: relative;

            .title {
                margin-bottom: 1rem;
            }

            .message {
                margin: 1rem 0 2rem;
            }

            .buttons {
                display: flex;
                justify-content: center;
                
                button {
                    padding: 10px 20px;
                    border: 1px solid #000;
                    margin: 0 12px;

                    &:hover {
                        background-color: rgba(0, 0, 0, 0.2);
                    } 
                }
            }

            .close {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                font-size: 2rem;

                width: 1.5rem;
                height: 1.5rem;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

    }
</style>
