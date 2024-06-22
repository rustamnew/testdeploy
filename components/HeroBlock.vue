<script setup lang="ts">
import Button from './shared/Button'

const openModal = ref(false)
</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="hero__main">
                <div class="hero__info">
                    <h1 class="hero__title">
                        Сервис для продажи <br>

                        фотографий онлайн <br>

                        и работы с клиентами
                    </h1>

                    <div class="hero__picture">
                        <img src="/images/hero.png" alt="Сервис для продажи фотографий">
                    </div>

                    <div class="hero__text">
                        <span class="highlighted">Seenday</span> – это готовое решение для автоматической <br>
                        продажи печатных или электронных фотографий <br>
                        и оптимизации работы с клиентами онлайн
                    </div>

                    <div class="hero__buttons">
                        <Button label="Подключиться" color="purple" href="https://seenday.com/ru/registration?ph=1" />

                        <Button icon="comment" label="Задать вопрос" :callback="() => { console.log(openModal); openModal = true; console.log(openModal) }" color="transparent" />
                    </div>
                </div>
            </div>

            <div class="hero__stats">
                <div class="item">
                    <div class="number">
                        60000+
                    </div>

                    <div class="text">
                        заказов сделали
                        <br>
                        пользователи
                    </div>
                </div>

                <div class="item">
                    <div class="number">
                        50000+
                    </div>

                    <div class="text">
                        пользователей
                        <br>
                        зарегистрировано
                    </div>
                </div>

                <div class="item">
                    <div class="number">
                        более 10%
                    </div>

                    <div class="text">
                        повторных продаж
                        <br>
                        фотографий
                    </div>
                </div>

                <div class="item">
                    <div class="number">
                        1150+ руб
                    </div>

                    <div class="text">
                        средний чек в 2022 году
                        <br>
                        с продажи фотографий
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ModalFeedback :open="openModal" @close="openModal = false" />
</template>

<style scoped lang="scss">
    .hero {
        width: 100%;
        background-image: url('/images/hero_background.svg');
        background-size: cover;

        position: relative;
        display: flex;
        justify-content: center;
        padding: 6.5625rem 0 10rem;

        &__main {
            display: flex;

            .hero__info {
                flex-shrink: 0;
                z-index: 2;
                width: 50%;

                .hero__title {
                    margin-bottom: 3px
                }

                .hero__text {
                    font-size: 1.4rem;
                    line-height: 1.19;
                    letter-spacing: -0.19px;

                    .highlighted {
                        color: #a129ff;
                        font-size: 1.375rem;
                        font-weight: 700;
                    }
                }

                .hero__buttons {
                    margin-top: 3.125rem;
                    display: flex;

                    &:deep(button.purple) {
                        width: 255px;
                        height: 2.625rem;
                        margin-right: 0.875rem;
                    }
                }
            }

            .hero__picture {
                z-index: 1;
                position: absolute;
                right: 28px;
                top: 50px;
                width: 50%;

                img {
                    max-width: 777px;
                    width: 100%;
                    max-height: 676px;
                }
            }
        }

        &__stats {
            margin-top: 10rem;
            display: flex;
            flex-wrap: wrap;

            .item {
                margin-right: 5rem;
                margin-bottom: 1rem;

                &:last-child {
                    margin-right: 0;
                }

                .number {
                    font-size: 1.6875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #a129ff;
                    margin-bottom: 1px;
                }

                .text {
                    font-size: 0.8125rem;
                    font-weight: 500;
                    line-height: 0.975rem;
                    width: 110%;
                }
            }
        }

    }

    @media screen and (max-width: 1200px) {
        .hero {
            padding-top: 4rem;

            &__main {
                .hero__info {
                    width: 58%;

                    .hero__text {
                        font-size: 1rem;

                        .highlighted {
                            font-size: 1.2rem;
                        }
                    }
                }
                .hero__picture {
                    width: 40%;
                }
            }
        }
    }
    @media screen and (max-width: 900px) {
        .hero__stats {
            margin-top: 6rem
        }
    }
    @media screen and (max-width: 700px) {
        .hero {
            padding-top: 2rem;

            &__main {
                .hero__title {
                    text-align: center
                }
                .hero__info {
                    width: 100%;
                }
                .hero__picture {
                    width: 100%;
                    position: initial
                }
            }

            .hero__stats {
                margin-top: 4rem
            }
        }
    }

    @media screen and (max-width: 500px) {

        .hero {
            .hero__buttons {
                flex-direction: column;
                align-items: center;

                &:deep(.button),
                &:deep(button) {
                    margin-bottom: 1rem;
                    margin-right: 0 !important;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
            .hero__stats {
                flex-direction: column;
                align-items: center;

                .item {
                    margin-right: 0;

                    text-align: center
                }
            }
        }
    }
</style>
