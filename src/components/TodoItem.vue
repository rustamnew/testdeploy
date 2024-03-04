<script setup>
    import IconCross from './icons/IconCross.vue'
    import IconCheck from './icons/IconCheck.vue'
    import IconEdit from './icons/IconEdit.vue'
    import IconRemove from './icons/IconRemove.vue'

    import Modal from './Modal.vue'
    
    import { useTodoStore } from '@/stores/todo'
</script>

<template>
    <div class="todo-item">

        <!--Edit mode-->
        <template v-if="editMode === true">
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

                <button class="remove" @click="confirmRemoveItem()"> 
                    <IconRemove /> 
                </button>
            </div>
        </template>

        <!--View mode-->
        <template v-else>
            <h5 class="title">
                {{ item.title }}
            </h5>

            <div class="text" v-if="item.text">
                {{ item.text }}
            </div>

            <ul class="steps" v-if="item.steps">
                <li v-for="step, index in item.steps" :key="index" class="step">
                    <label>
                        <input v-model="step.checked" @change="saveItem()" type="checkbox">
                        <span>{{ step.title }}</span>
                        <IconCheck v-if="step.checked" color="green" size="2rem"/>
                    </label>
                </li>
            </ul>

            <div class="controls">
                <button class="edit" @click="editItem()"> 
                    <IconEdit /> 
                </button>
            </div>
        </template>

        
    </div>

    <Teleport to="body">
        <Modal 
        v-if="confirmRemove === true"
        title="Удалить задачу" 
        message="Отменить это действие будет невозможно" 
        mode="confirm"
        :callback="() => {removeItem()}" 
        @close="confirmRemove = false" 
        />

        <Modal 
        v-if="error.showError === true"
        :message="error.message" 
        mode="message"
        :callback="() => {removeItem()}" 
        @close="error.showError = false" 
        />
    </Teleport>

    
</template>

<script>
    export default {
        data() {
            const item = JSON.parse(JSON.stringify(this.itemProp))
            const itemDefault = JSON.parse(JSON.stringify(this.itemProp))

            const todoStore = useTodoStore()

            return {
                item,
                itemDefault,
                editMode: false,
                confirmRemove: false,
                error: {
                    message: '',
                    showError: false
                },
                todoStore
            }
        },
        created() {
            if (this.allEmptyCheck()) {
                this.editMode = true
            }
        },
        watch: {
            itemProp: {
                handler(val, oldVal) {
                    this.item = val
                    this.itemDefault = val
                },
                deep: true
            },
        },
        props: {
            itemProp: Object,
            index: Number
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
            editItem() {
                this.itemDefault = JSON.parse(JSON.stringify(this.item)) 
                this.editMode = true

                this.$nextTick(() => {
                    this.resizeTextarea()
                });
            },
            saveItem() {
                if (!this.allEmptyCheck()) {
                    this.todoStore.saveItem(this.item, this.index)

                    this.itemDefault = this.item
                    this.editMode = false
                } else {
                    this.error.message = 'Нельзя сохранить пустую задачу'
                    this.error.showError = true
                }
                
            },
            cancelEdit() {
                this.item = this.itemDefault
                this.editMode = false
            },
            confirmRemoveItem() {
                this.confirmRemove = true
            },
            removeItem() {
                this.todoStore.removeItem(this.index)
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
    button {
        appearance: none;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .todo-item {
        border: 1px solid #000000;
        padding: 8px;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 100%;
        max-width: 350px;

        .title {
            margin-bottom: 0.5rem;
            word-break: break-word;
            font-size: 2rem;

            input {
                width: 100%;
                font-size: 1.5rem;
            }
        }

        .text {
            white-space: pre-wrap;
            word-break: break-word;
            margin-bottom: 0.5rem;
            display: flex;
            font-size: 1.3rem;

            textarea {
                width: 100%;
            }
        }
        
        .step {
            display: flex;
            align-items: center;
            margin-bottom: 0.3rem;
            height: 2rem;

            label {
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                
                border-top: 1px solid rgba($color: #000000, $alpha: 0.1);

                input[type="checkbox"] {
                    display: none;
                }
                input[type="checkbox"]:checked + span {
                    text-decoration: line-through;
                    opacity: 0.7;
                }
                svg{
                    margin-left: auto;
                }
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
            .edit {
                background-color: orange;
                padding: 0.4rem;

                &:hover {
                    background-color: rgba($color: orange, $alpha: 0.7);
                }
            }
            .check {
                background-color: green;

                &:hover {
                    background-color: rgba($color: green, $alpha: 0.7);
                }
            }
            .remove {
                background-color: gray;

                &:hover {
                    background-color: rgba($color: gray, $alpha: 0.7);
                }
            }
        }
    }
    
</style>
