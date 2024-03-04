<script setup>
    import IconCross from './icons/IconCross.vue'
    import IconCheck from './icons/IconCheck.vue'

    import Modal from './Modal.vue'
    
    import { useTodoStore } from '@/stores/todo'
</script>

<template>
    <div class="todo-add">
        <h2>Добавить задачу</h2>

        <div class="title">
            <input type="text" placeholder="Заголовок" v-model="item.title">
        </div>
            
        <div class="text">
            <textarea placeholder="Описание" v-model="item.text" @input="resizeTextarea()" ref="textarea"></textarea>
        </div>
            
        <ul class="steps">
            <li v-for="step, index in item.steps" :key="index" class="step">
                <input v-model="step.checked" type="checkbox">
                <input type="text" v-model="step.title" placeholder="Название этапа">

                <button class="remove" @click="removeStep(index)">
                    <IconCross color="red" />
                </button>
            </li>

            <button class="add-step" @click="addStep()">Добавить этап</button>
        </ul>

        <div class="controls">
            <button class="cancel" @click="cancelEdit()"> 
                <IconCross /> 
            </button>

            <button class="check" @click="saveItem()"> 
                <IconCheck /> 
            </button>
        </div>
    </div>

    <Teleport to="body">
        <Modal 
        v-if="error.showError === true"
        :message="error.message" 
        mode="message"
        :callback="() => {removeItem(index)}" 
        @close="error.showError = false" 
        />
    </Teleport>

    
</template>

<script>
    export default {
        data() {
            const todoStore = useTodoStore()

            return {
                todoStore,
                item: {
                    title: '',
                    text: '',
                    steps: []
                },
                error: {
                    message: '',
                    showError: false
                },
            }
        },
        methods: {
            allEmptyCheck() {
                const allEmpty = !this.item.title && !this.item.text && !this.item.steps.length
                return allEmpty
            },
            addStep() {
                this.item.steps.push({
                    title: '',
                    checked: false
                })
            },
            removeStep(index) {
                this.item.steps.splice(index, 1)
            },
            saveItem() {
                if (!this.allEmptyCheck()) {
                    this.todoStore.saveItem(this.item, this.todoStore.items.length)

                    this.item = {
                        title: '',
                        text: '',
                        steps: []
                    }
                } else {
                    this.error.message = 'Нельзя сохранить пустую задачу'
                    this.error.showError = true
                }
                
            },
            cancelEdit() {
                this.item = {
                    title: '',
                    text: '',
                    steps: []
                }   
            },
            resizeTextarea() {
                const textarea = this.$refs.textarea;
                textarea.style.height = "1rem";

                const newHeight = textarea.scrollHeight + 20 
                textarea.style.height = newHeight + "px";
            }
        }
    }
</script>

<style lang="scss">
    input[type="checkbox"] {
        width: 1.5rem;
        height: 1.5rem;
    }
    input[type="text"] {
        padding: 0.3rem;
    }
    textarea {
        resize: vertical;
        max-height: 300px;
        padding: 0.5rem;
    }
    ul,li {
        list-style: none;
        padding: 0;
    }
    span {
        word-break: break-word;
    }
    h5 {
        font-size: 2rem;
    }
    button {
        appearance: none;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .todo-add {
        border: 1px solid #000000;
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 5rem;

        h2 {
            margin-bottom: 2rem;
        }

        .title {
            width: 100%;
            margin-bottom: 0.5rem;
            word-break: break-word;
            input {
                width: 100%;
                font-size: 1.5rem;
            }
        }

        .text {
            width: 100%;
            white-space: pre-wrap;
            word-break: break-word;
            margin-bottom: 0.5rem;
            display: flex;

            textarea {
                width: 100%;
                min-height: 6rem;
            }
        }

        .steps {
            align-self: flex-start;
            min-width: 50%;
        }
        
        .step {
            display: flex;
            align-items: center;
            margin-bottom: 0.3rem;

            label {
                display: flex;
                align-items: center;
            }

            .remove {
                width: 1rem;
                height: 1rem;

                margin-left: 0.5rem;

                svg {
                    width: 100%;
                    height: 100%;
                }
            }

            input[type="text"] {
                height: 1.5rem;
                width: 100%;
            }
            input[type="checkbox"] {
                margin-right: 0.5rem;
            }
        }

        .add-step {
            background-color: purple;
            color: #ffffff;
            padding: 4px 8px;
            border-radius: 4px;
            margin-top: 1rem;

            &:hover {
                background-color: rgba($color: purple, $alpha: 0.7);
            }
        }

        .controls {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            margin-top: auto;

            button {
                width: 2rem;
                height: 2rem;
                padding: 0.3rem;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                &:not(:first-child) {
                    margin-left: 0.3rem;
                }

                svg {
                    width: 100%;
                    height: 100%;
                }
            }

            .cancel {
                background-color: red;

                &:hover {
                    background-color: rgba($color: red, $alpha: 0.7);
                }
            }
            .check {
                background-color: green;

                &:hover {
                    background-color: rgba($color: green, $alpha: 0.7);
                }
            }
        }
    }
</style>
