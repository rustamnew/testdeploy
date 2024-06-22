<script setup lang="ts">
import Button from './shared/Button'

const menu = ref([
    {
        title: 'Для фотографов',
        href: 'https://seenday.com/ru/for-photographers',
    },
    {
        title: 'Продажа фотографий',
        sublist: [
            {
                title: 'В школах',
                href: 'https://seenday.com/ru/school',
            },
            {
                title: 'В детских садах',
                href: 'https://seenday.com/ru/kindergarten',
            },
        ],
    },
    {
        title: 'Контакты',
        href: 'https://seenday.com/ru/contacts',
    },
])

const paymentMethods = ref([
    {
        icon: 'tinkoff-black',
        iconHover: 'tinkoff',
    },
    {
        icon: 'fiz-black',
        iconHover: 'fiz',
        title: 'Оплата для <br> юр. лиц',
    },
    {
        icon: 'sbp-black',
        iconHover: 'sbp',
    },
    {
        icon: 'visa-black',
        iconHover: 'visa',
    },
    {
        icon: 'mastercard-black',
        iconHover: 'mastercard',
    },
    {
        icon: 'mir-black',
        iconHover: 'mir',
    },
])

const socials = ref([
    {
        icon: 'tg-black',
        iconHover: 'tg-white',
        href: 'https://t.me/seenday',
    },
    {
        icon: 'vk-black',
        iconHover: 'vk-white',
        href: 'https://vk.com/seenday_com',
    },
])
</script>

<template>
    <footer class="footer">
        <div class="footer__actions">
            <div class="container">
                <div class="footer__actions-list">
                    <div class="footer__actions-item">
                        <div class="footer-action__icon">
                            <img src="/images/footer/footer-coins.png" width="127" height="190" alt="icon">
                        </div>

                        <div class="footer-action__info">
                            <div class="footer-action__info-title highlighted">
                                Станьте партнером <br> Seenday
                            </div>

                            <div class="footer-action__info-text">
                                Обеспечьте себе <br> дополнительный доход
                            </div>
                        </div>
                    </div>

                    <div class="footer__actions-item large lines">
                        <div class="footer-action__icon">
                            <img src="/images/footer/robot.png" width="300" height="223" alt="icon">
                        </div>

                        <div class="footer-action__info">
                            <div class="footer-action__info-title">
                                Вы - фотограф?
                            </div>

                            <div class="footer-action__subtitle">
                                Подключайтесь к Seenday
                                <br class="hidden-at-xslg">
                                и автоматизируйте свою работу
                            </div>
                        </div>

                        <div class="footer-action__btn">
                            <Button href="https://seenday.com/ru/registration?ph=1" label="Подключиться" color="yellow" />
                        </div>
                    </div>

                    <div class="footer__actions-item">
                        <div class="footer-action__icon">
                            <img src="/images/footer/email.png" width="74" height="100" alt="icon">
                        </div>

                        <div class="footer-action__info">
                            <div class="footer-action__info-title">
                                Реквизиты
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__additional">
            <div class="container">
                <div v-if="paymentMethods.length" class="footer-payments">
                    <div class="title">
                        Способы оплаты
                    </div>

                    <div class="footer-payments__list">
                        <div v-for="item, index in paymentMethods" :key="index" class="footer-payments__item">
                            <img class="footer-payments__icon" :src="`/images/payments/${item.icon}.svg`" :width="item.iconWidth ? item.iconWidth : null" :height="item.iconHeight ? item.iconHeight : null" :alt="item.icon">
                            <img class="footer-payments__icon-hover" :src="`/images/payments/${item.iconHover}.svg`" :width="item.iconHoverWidth ? item.iconHoverWidth : null" :height="item.iconHoverHeight ? item.iconHoverHeight : null" :alt="item.icon">

                            <span v-if="item.title" v-html="item.title" />
                        </div>
                    </div>
                </div>

                <div v-if="socials.length" class="footer__socials">
                    <div class="title">
                        Мы в социальных сетях:
                    </div>

                    <div class="footer-socials__list">
                        <a v-for="item, index in socials" :key="index" class="footer-social__item" :href="item.href" target="_blank" rel="nofollow noreferrer noopener">
                            <img class="footer-social__icon" :src="`/images/socials/${item.icon}.svg`" :alt="item.icon">
                            <img class="footer-social__icon-hover" :src="`/images/socials/${item.iconHover}.svg`" :alt="item.icon">
                        </a>
                    </div>
                </div>

                <div class="footer__lang">
                    <div class="title">
                        Сменить язык:
                    </div>

                    <div class="footer__lang-switcher">
                        <div class="icon">
                            <img src="/images/langs/ru.svg" alt="ru">
                        </div>

                        <span class="lang-title">Rus</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__menu">
            <div class="container">
                <nav class="footer__nav">
                    <ul class="nav__list">
                        <li v-for="item, index in menu" :key="index" class="nav__item">
                            <a :href="item.href ? item.href : null" class="nav__link">
                                {{ item.title }}
                            </a>

                            <ul v-if="item.sublist" class="nav__item-sublist">
                                <li v-for="subItem, subIndex in item.sublist" :key="subIndex" class="nav__subitem">
                                    <a :href="subItem.href ? subItem.href : null" class="nav__link">{{ subItem.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="footer__registered">
                    <div class="footer__registered-logo">
                        <img width="200" src="/images/logo-white.svg" alt="logo">
                    </div>

                    <a class="footer__registered-info" href="https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&amp;DocNumber=865111" target="_blank">
                        <img src="/images/icons/registered.svg" alt="registered">

                        <div class="footer__registered-text">
                            Товарный знак № <span>865111</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <div class="container">
                <div class="footer__copyright">
                    © Seenday, 2021-2024
                </div>

                <div class="footer__bottom-links">
                    <a href="https://seenday.com/terms" target="_blank" class="footer__bottom-link">Пользовательское соглашение</a>
                    <a href="https://seenday.com/confidential" target="_blank" class="footer__bottom-link">Политика конфиденциальности</a>
                    <a href="https://seenday.com/cookie" target="_blank" class="footer__bottom-link">Cookie</a>
                </div>

                <div class="footer__project">
                    Проект компании Marbery
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    background: #282828;
    color: #B09EBC;
    overflow-x: hidden;

    & > *:not(:first-child) {
        border-top: 1px solid #553D67;
    }

    .footer__actions {
        padding: 66px 0 40px;
        display: flex;
        justify-content: center;

        .footer__actions-list {
            display: grid;
            gap: 18px;
            grid-template-columns: 1fr 3fr;

            .footer__actions-item {
                background-color: #543C66;
                color: #ffffff;
                border-radius: 10px;
                overflow: hidden;
                display: flex;
                //flex-basis: 24%;
                padding: 38px 28px 44px 112px;
                position: relative;
                cursor: pointer;
                min-width: 306px;

                &:hover {
                    box-shadow: 0 0 7px 5px rgba($color: #FFA401, $alpha: 0.4);
                    overflow: visible;
                }

                &.large {
                    max-width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    overflow: visible;
                    padding-left: 330px;
                    padding-right: 10%;

                    background-image: url(/images/banner_decorations/line-1-desc.svg),
                    url(/images/banner_decorations/line-2-desc.svg),
                    url(/images/banner_decorations/line-3-desc.svg),
                    url(/images/banner_decorations/line-4-desc.svg),
                    url(/images/banner_decorations/banner-bg.jpg);

                    background-repeat: no-repeat,
                    no-repeat,
                    no-repeat,
                    no-repeat,
                    no-repeat;

                    background-size: auto, auto, auto, auto, cover;

                    background-position: bottom right,
                    bottom right,
                    top left,
                    top left,
                    center;

                    .footer-action__icon {
                        left: -2%;
                        top: unset;
                        bottom: -22px;
                    }
                    .footer-action__info {
                        margin-right: 20px;
                        flex-shrink: 0;
                        .footer-action__info-title {
                            margin-bottom: 6px;
                            font-size: 25px;
                            line-height: 30px;
                            font-weight: 700;
                        }
                        .footer-action__info-text {
                            font-size: 13px;
                            line-height: 16px;
                            color: #ffffff;
                        }
                    }

                    .footer-action__btn {
                        width: 100%;
                        max-width: 240px;
                    }
                    .footer-action__btn:deep(button) {
                        width: 100%;
                    }
                }

                .footer-action__icon {
                    position: absolute;
                    left: -2%;
                    top: -10%;
                }

                .footer-action__info-title {
                    margin-bottom: 6px;

                    &.highlighted {
                        font-size: 14px;
                        line-height: 17px;
                        font-weight: 700;
                        color: #FFA401;
                    }

                }
                .footer-action__info-text {
                    font-size: 13px;
                    line-height: 16px;
                    color: #ffffff;
                }

                &:nth-child(4) {
                    padding: 28px 10px 28px 108px;

                    .footer-action__icon {
                        left: 7%;
                        top: -16%;
                    }
                }

            }

            .break {
                flex-basis: 100%;
                width: 0;
                height: 0
            }
        }
    }

    .footer__additional {
        display: flex;
        padding: 16px 0 24px;
        justify-content: center;

        .container {
            display: flex;
            padding-right: 10%;
            flex-wrap: wrap;
            row-gap: 16px;
            justify-content: space-between;
        }
        .container > * {
            margin-right: 16px;

            &:last-child {
                margin-right: 0
            }
        }

        .footer-payments__list {
            display: flex;
            flex-wrap: wrap;

            .footer-payments__item {
                flex-shrink: 0;
                background: #553D67;
                border-radius: 3px;
                padding: 4px;
                margin-right: 7px;
                height: 2rem;
                display: flex;
                align-items: center;
                color: #282828;
                font-size: 10px;
                line-height: 10px;
                font-weight: 700;
                margin-bottom: 7px;

                &:last-child {
                    margin-right: 0
                }

                .footer-payments__icon {
                    display: block;
                }
                .footer-payments__icon-hover {
                    display: none;
                }

                &:hover {
                    color: #ffffff;

                    .footer-payments__icon {
                        display: none;
                    }
                    .footer-payments__icon-hover {
                        display: block;
                    }
                }

                span:not(:first-child) {
                    margin-left: 3px
                }
            }
        }

        .footer-socials__list {
            display: flex;

            .footer-social__item {
                margin-right: 10px;
                background-color: #543C66;
                border-radius: 8px;
                padding: 6px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:last-child {
                    margin-right: 0
                }

                .footer-social__icon {
                    display: block;
                }
                .footer-social__icon-hover {
                    display: none;
                }

                &:hover {
                    .footer-social__icon {
                        display: none;
                    }
                    .footer-social__icon-hover {
                        display: block;
                    }
                }
            }

        }

        .footer__lang {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .title {
                margin-bottom: 4px;
            }

            .footer__lang-switcher {
                display: flex;
                justify-content: center;
                align-items: center;

                .icon {
                    cursor: pointer;
                    border: 1px solid #553D67;
                    border-radius: 8px;
                    padding: 4px;
                    margin-right: 6px
                }
            }
        }

        .title {
            margin-bottom: 6px;
        }
    }

    .footer__menu {
        display: flex;
        justify-content: center;
        padding: 40px 0;

        .container {
            display: flex;
        }

        .footer__nav {
            flex: 1;

            .nav__list {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .nav__item {
                    color: #ffffff;

                    .nav__link {
                        margin-bottom: 16px;
                        display: flex;
                    }

                    .nav__item-sublist .nav__link{
                        color: #BEACCB;
                    }
                }
            }
        }

        .footer__registered {
            margin-left: 100px;

            .footer__registered-info {
                display: flex;

                img {
                    width: 13px;
                    height: 13px;
                    margin-right: 4px;
                }

                span {
                    text-decoration: underline
                }
            }
        }
    }

    .footer__bottom {
        display: flex;
        justify-content: center;
        padding-top: 14px;
        padding-bottom: 20px;

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            & > * {
                margin-bottom: 8px;
            }
        }

        .footer__bottom-link {
            margin-right: 48px;
            font-size: 14px;
            line-height: 17px;

            &:last-child {
                margin-right: 0
            }
        }
    }
    .row {
        display: flex;
    }

    @media screen and (max-width: 1150px) {
        .footer__actions {
            .footer__actions-list {
                .footer__actions-item {
                    &.large {
                        flex-direction: column;
                        padding-left: 42%;
                        align-items: flex-start;

                        .footer-action__icon {
                            bottom: -17px;

                            img {
                                width: 40%;
                                height: auto;
                            }

                        }
                        .footer-action__btn {
                            margin-top: 12px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 800px) {
        .footer__actions {
            .footer__actions-list {
                grid-template-columns: 1fr;

                .footer__actions-item {
                    display: flex;
                    flex-basis: 100%;
                    width: 100%;
                    order: 2;

                    &.large {
                        order: 1;
                        width: 100%;
                        flex-direction: column;
                        padding-left: 40px;
                        padding-right: 40px;
                        padding-bottom: 0;
                        align-items: center;

                        .footer-action__info {
                            text-align: center
                        }
                        .footer-action__icon {
                            position: initial;
                            order: 4;
                            display: flex;
                            margin-bottom: -18px;

                            img {
                                width: 300px;
                            }
                        }
                        .footer-action__btn {
                            margin-top: 12px;
                        }
                    }

                    &:nth-child(3) {
                        padding: 20px 28px 20px 118px;

                        .footer-action__icon {
                            left: 5%;
                            top: -19%;
                        }
                    }

                    .footer-action__info-title {

                        &.highlighted {
                            font-size: 18px;
                            line-height: 22px;
                        }
                    }
                    .footer-action__info-text {
                        font-size: 15px;
                        line-height: 18px;
                    }
                }

            }
        }

        .footer__menu {
            padding-bottom: 20px;

            .container {
                flex-direction: column;
                align-items: center;
            }

            .footer__nav {
                width: 100%;
            }

            .footer__registered {
                margin-left: 0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 14px;

                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -10%;
                    left: -10%;
                    height: 1px;
                    background-color: #553D67;
                }

                .footer__registered-info {
                    display: flex;

                    img {
                        width: 13px;
                        height: 13px;
                        margin-right: 4px;
                    }
                }
            }
        }

        .footer-payments {
            width: 100%;
            margin-right: 0
        }

        .footer__bottom {
            .container {
                flex-direction: column;
            }
            .footer__copyright {
                margin-bottom: 12px;
            }
            .footer__bottom-links {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                .footer__bottom-link {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
