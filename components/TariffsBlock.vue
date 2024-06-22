<script setup lang="ts">
import Button from './shared/Button'
</script>

<template>
    <div class="tariffs-logo">
        <img src="/images/tariffs_logo.svg" alt="seenday">
    </div>

    <div class="tariffs">
        <div class="container">
            <h2 class="tariffs__title">
                Тарифы интернет-эквайринга
            </h2>

            <div class="tariffs__list">
                <div class="tariffs__item bordered">
                    <div class="tariffs__item-content">
                        <h4 class="tariffs__item-title">
                            Эквайринг Seenday
                        </h4>

                        <div class="tariffs__item-subtitle">
                            <span>Прием платежей для:</span>

                            <div class="highlighted">
                                <span>ООО / ИП</span>
                                <span>Самозанятых</span>
                            </div>
                        </div>

                        <ul class="tariffs__item-features">
                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/bank.svg" alt="bank">
                                </div>

                                <span>
                                    Уже подключённый эквайринг, а значит Вам не придётся решать никакие вопросы с
                                    банком;
                                </span>
                            </li>

                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/time.svg" alt="time">
                                </div>

                                <span>
                                    Оперативно устраняем любые проблемы;
                                </span>
                            </li>

                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/file-document.svg" alt="file-document">
                                </div>

                                <span>
                                    Подключенная онлайн касса для ОФД чеков;
                                </span>
                            </li>

                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/pen.svg" alt="pen">
                                </div>

                                <span>
                                    Ведем бухгалтерию за Вас и предоставляем Вам только акт о выплате средств;
                                </span>
                            </li>

                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/coin.svg" alt="coin">
                                </div>

                                <span>
                                    Выплачиваем средства за все принятые заказы Клиентами на Ваш расчетный счет или
                                    карту Самозанятого;
                                </span>
                            </li>
                        </ul>

                        <div class="tariffs__item-promo">
                            При совершении продаж на 50 т.р. - <span class="highlighted">дарим +500 ГБ памяти </span>
                            на 1 месяц
                        </div>

                        <div class="tariffs__item-additional">
                            <span class="number">6%</span>
                            <span class="text">комиссия Seenday с платежей по интернет-эквайрингу</span>
                        </div>

                        <div class="tariffs__item-controls">
                            <Button label="Подключиться" color="purple" href="https://seenday.com/ru/registration?ph=1" />
                        </div>
                    </div>
                </div>

                <div class="tariffs__item">
                    <div class="tariffs__item-content">
                        <h4 class="tariffs__item-title">
                            Ваш эквайринг
                        </h4>

                        <div class="tariffs__item-subtitle">
                            <span>Прием через:</span>

                            <div class="highlighted">
                                <span>
                                    <img src="/images/icons/tinkoff-logo.svg" alt="tinkoff">
                                </span>
                            </div>
                        </div>

                        <ul class="tariffs__item-features">
                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/file-document.svg" alt="file-document">
                                </div>

                                <span>
                                    Покупаете и занимаетесь интеграцией онлайн кассы с Вашим эквайрингом;
                                </span>
                            </li>
                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/bank.svg" alt="bank">
                                </div>

                                <span>
                                    Самостоятельно общаетесь с банком, если возникли какие-либо проблемы в работе их
                                    интернет-эквайринга или их сервиса;
                                </span>
                            </li>
                            <li class="feature__item">
                                <div class="feature__icon">
                                    <img src="/images/icons/pen.svg" alt="pen">
                                </div>

                                <span>
                                    Ведёте бухгалтерию без нашего участия
                                </span>
                            </li>
                        </ul>

                        <div class="tariffs__item-additional">
                            <span class="number">6%</span>
                            <span class="text">комиссия Seenday с платежей по интернет-эквайрингу</span>
                        </div>

                        <div class="tariffs__item-controls">
                            <Button label="Подключиться" color="yellow-transparent" href="https://seenday.com/ru/registration?ph=1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tariffs-logo {
    display: flex;
    justify-content: center;
    margin-bottom: -40px;

    img {
        max-width: 100%;
        width: 736px;
    }
}
.tariffs {
    width: 100%;
    background-image: url('/images/tariffs-background.jpeg');
    background-size: cover;

    color: #ffffff;

    padding: 80px 0;

    display: flex;
    justify-content: center;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tariffs__title {
        text-align: center;
        margin-bottom: 40px;
    }

    .tariffs__list {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .tariffs__item {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            padding: 50px 100px 70px;

            &:last-child {
                margin-right: 0
            }
            &:not(.bordered) {
                background: radial-gradient(192.35% 126.8% at 34.18% 10.47%, rgba(114, 48, 135, 0.5) 0%, rgba(193, 95, 164, 0.5) 100%);
                width: 35%;

                padding: 50px 58px 55px 65px;
            }

            &.bordered {
                border: 3px solid #ffa500;
                position: relative;
                z-index: 0;
                width: 58%;
                max-width: 720px;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 0;
                    background: radial-gradient(156.07% 105.58% at 78.79% 105.58%, rgba(118, 95, 182, 0.67) 0%, rgba(165, 132, 225, 0.67) 99.04%);
                    opacity: 0.51;
                }
            }

            .tariffs__item-content {
                display: flex;
                flex-direction: column;
                z-index: 1;
                position: relative;
                align-items: center;

                .tariffs__item-title {
                    margin-bottom: 15px;
                }

                .tariffs__item-subtitle {
                    background-color: rgba(106, 54, 182, 0.46);
                    padding: 9px 17px 11px;
                    display: flex;
                    align-items: center;
                    width: 100%;

                    & > span {
                        margin-right: 20px;

                        &:last-child {
                            margin-right: 0
                        }
                    }

                    .highlighted {
                        font-weight: 700;
                        text-transform: uppercase;

                        & > span {
                            margin-right: 11px;

                            &:last-child {
                                margin-right: 0
                            }
                        }
                    }
                }

                .tariffs__item-features {
                    margin-top: 20px;

                    .feature__item {
                        position: relative;
                        margin-bottom: 15px;
                        line-height: 25px;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        .feature__icon {
                            position: absolute;
                            left: -36px;
                        }
                    }
                }

                .tariffs__item-promo {
                    margin-top: 14px;
                    padding: 16px 20px 18px;
                    font-size: 17px;
                    line-height: 21px;
                    text-align: center;
                    border: 1px solid #ffa500;

                    .highlighted {
                        font-weight: 700;
                        color: #ffa500;
                    }
                }

                .tariffs__item-additional {
                    margin-top: 32px;
                    max-width: 360px;
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    line-height: 21px;

                    .number {
                        margin-right: 6px;
                        font-size: 40px;
                        line-height: 49px;
                        font-weight: 700;
                    }
                }

                .tariffs__item-controls {
                    margin-top: 19px;
                    width: 100%;

                    &:deep(button) {
                        width: 100%;
                    }
                }
            }

        }
    }
}

@media screen and (max-width: 840px) {
    .tariffs-logo {
        margin-bottom: -18px;

        img {
            width: 80%;
        }
    }

    .tariffs {
        padding-top: 54px;

        .tariffs__list {
            flex-direction: column;
            width: 100%;

            .tariffs__item {
                margin-right: 0;
                margin-bottom: 20px;
                width: 100%;
                padding: 30px 34px 40px;

                &:last-child {
                    margin-bottom: 0
                }

                &:not(.bordered),
                &.bordered {
                    width: 100%;
                    max-width: unset;
                }

                .tariffs__item-content {
                    display: flex;
                    flex-direction: column;
                    z-index: 1;
                    position: relative;

                    .tariffs__item-title {
                        margin-bottom: 15px;
                    }

                    .tariffs__item-subtitle {
                        //padding: 9px 17px 11px;
                        display: flex;
                        flex-direction: column;

                        & > span {
                            margin-right: 20px;

                            &:last-child {
                                margin-right: 0
                            }
                        }

                        .highlighted {
                            font-weight: 700;
                            text-transform: uppercase;

                            & > span {
                                margin-right: 11px;

                                &:last-child {
                                    margin-right: 0
                                }
                            }
                        }
                    }

                    .tariffs__item-features {

                        .feature__item {
                            padding-left: 20px;

                            .feature__icon {
                                position: absolute;
                                left: -10px;
                            }
                        }
                    }

                    .tariffs__item-additional {
                        margin-top: 30px;
                    }
                }
            }
        }
    }
}
</style>
