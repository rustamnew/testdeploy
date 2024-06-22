<script setup lang="ts">
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from 'radix-vue'
import Button from './shared/Button'

const _props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
})

const emit = defineEmits(['close'])

function handleClose() {
    emit('close')
}
</script>

<template>
    <DialogRoot :open="open">
        <DialogPortal>
            <DialogOverlay class="dialog">
                <DialogContent class="dialog__content">
                    <DialogTitle class="dialog__title">
                        Задайте свой вопрос
                    </DialogTitle>

                    <form class="dialog__form" @submit.prevent="handleClose()">
                        <input id="name" class="input" placeholder="Имя">

                        <input id="username" class="input" placeholder="+7 (999) 999-99-99">

                        <textarea placeholder="Ваш вопрос" />

                        <Button class="button" label="Задать вопрос" @callback="handleClose()" />
                    </form>

                    <div class="dialog__policy">
                        Нажимая на кнопку Вы автоматически подтверждаете, что согласны с <a href="https://seenday.com/" target="_blank">Политикой обработки данных</a>
                    </div>
                </DialogContent>

                <DialogClose class="dialog__close" @click="handleClose()">
                    <img src="/images/icons/close.svg" alt="close">
                </DialogClose>
            </DialogOverlay>
        </DialogPortal>
    </DialogRoot>
</template>

<style scoped lang="scss">
    dialogroot[open=false] .dialog {
        display: none;
    }

    .dialog {
        background: rgba(0 0 0 / 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        place-items: center;
        overflow-y: auto;
        z-index: 1000;

        &__content {
            max-width: 460px;
            width: 100%;
            background: white;
            padding: 40px 45px 20px;
            border-radius: 4px;
        }

        &__title {
            font-size: 1.875rem;
            line-height: 1.2;
            text-transform: uppercase;
            font-weight: 700;
            text-align: center;
            margin-bottom: 20px;
        }

        &__policy {
            margin-top: 20px;
            font-size: 12px;
            text-align: center;

            a {
                color: #0000EE;
            }
        }
        &__close {
            position: absolute;
            top: 4%;
            right: 3%;
            cursor: pointer;

            img {
                width: 20px;
                height: 20px;
            }
        }

        input, textarea {
            border: 1px solid #AAADE4;
            height: 2.875rem;
            padding-right: 1.25rem;
            padding-left: 1.25rem;
            font-size: 16px;
            line-height: 1.2;
            outline: none;
            transition: border-color 0.3s ease;
            width: 100%;
            margin-bottom: 16px;

            &:focus {
                border-color: #a129ff;
            }
        }

        textarea {
            min-height: 6rem;
        }
    }
</style>
