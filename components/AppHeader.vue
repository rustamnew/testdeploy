<script setup lang="ts">
import Button from './shared/Button'
import IconHamburger from './icons/IconHamburger'

const menu = ref([
    {
        title: 'Для фотографов',
        link: 'https://seenday.com/ru/for-photographers',
    },
    {
        title: 'В школах',
        link: 'https://seenday.com/ru/school',
    },
    {
        title: 'В детских садах',
        link: 'https://seenday.com/ru/kindergarten',
    },
    {
        title: 'Контакты',
        link: 'https://seenday.com/ru/contacts',
    },
])

const mobileMenuOpened = ref(false)

function openMobileMenu() {
    mobileMenuOpened.value = true
}
function closeMobileMenu() {
    mobileMenuOpened.value = false
}
</script>

<template>
    <div class="mobile-menu" :class="mobileMenuOpened ? 'opened' : null">
        <div class="mobile-menu__content">
            <div class="mobile-menu__close" @click="closeMobileMenu()">
                <img src="/images/icons/close.svg" alt="close">
            </div>

            <NuxtLink to="/" class="mobile-menu__logo">
                <img src="/images/logo.svg" alt="logo">
            </NuxtLink>

            <nav v-if="menu.length > 0" class="nav mobile">
                <a v-for="item in menu" :key="item.link" :href="item.link" class="nav__item" target="_blank">{{ item.title }}</a>
            </nav>

            <div class="controls">
                <Button label="Войти" color="purple" href="https://seenday.com/ru/login" />
                <Button label="Создать аккаунт" color="purple" href="https://seenday.com/ru/registration?ph=1" />
                <Button label="Подключиться как фотограф" color="purple" href="https://seenday.com/ru/registration?ph=1" />
            </div>
        </div>
    </div>

    <header>
        <div class="container">
            <div class="mobile-menu-open" @click="openMobileMenu()">
                <IconHamburger />
            </div>

            <div class="logo">
                <NuxtLink to="/">
                    <img src="/images/logo.svg" alt="logo">
                </NuxtLink>
            </div>

            <nav v-if="menu.length > 0" class="nav desktop">
                <a v-for="item in menu" :key="item.link" :href="item.link" class="nav__item" target="_blank">{{ item.title }}</a>
            </nav>

            <div class="buttons">
                <Button color="gray" label="Войти" href="https://seenday.com/ru/login" />

                <Button color="purple" label="Создать аккаунт" href="https://seenday.com/ru/registration" classname="desktop" />

                <Button color="purple" icon="user-plus" href="https://seenday.com/ru/registration" classname="mobile" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        background-color: #ffffff;
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        padding: 10px 0;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            img {
                width: 150px;
            }
        }

        .nav {
            .nav__item {
                color: #282828;
                text-decoration: none;
                margin-right: 24px;
                font-weight: 500;
                font-size: 15px;
                white-space: nowrap;

                &:hover {
                    opacity: 0.6;
                }

                &:last-child {
                    margin-right: 0
                }
            }
        }

        .buttons {
            display: flex;
            align-items: center;
        }
        .buttons:deep(.button),
        .buttons:deep(button)  {
            margin-right: 10px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .mobile-menu-open {
        display: none;
    }

    .mobile-menu {
        opacity: 0;
        transition: opacity 0.2s;
        position: fixed;

        background-color: rgba($color: #000000, $alpha: 0.5);

        top: 0;
        bottom: 0;
        right: 100%;
        left: -100%;

        z-index: 1000;

        .mobile-menu__content {
            width: 80%;
            background-color: #282828;
            position: relative;
            transform: translateX(-100%);
            transition: transform 0.5s;
            padding: 1.25rem 1rem 1rem;

            .mobile-menu__close {
                position: absolute;
                top: 2%;
                right: 5%;
                cursor: pointer;

                img {
                    width: 35px;
                    height: 35px;
                }
            }

            .mobile-menu__logo {
                img {
                    width: 150px;
                }
            }

            .nav.mobile {
                display: flex;
                flex-direction: column;
                margin-top: 26px;

                .nav__item {
                    font-weight: 500;
                    color: #ffffff;
                    margin-bottom: 25px;
                    font-size: 18px;
                }
            }

            .controls:deep(.button),
            .controls:deep(button)  {
                margin-right: 10px;
                margin-bottom: 10px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .mobile-menu.opened {
        display: flex;
        opacity: 1;
        left: 0;
        right: 0;

        .mobile-menu__content {
            transform: translateX(0);
        }
    }

    @media screen and (max-width: 990px) {
        header {
            nav.desktop {
                display: none;
            }

            .container {
                justify-content: flex-start;
            }

            .logo {
                margin-right: auto
            }

            .mobile-menu-open {
                display: initial;
                margin-right: 20px;
            }
        }

    }

    @media screen and (max-width: 360px) {
        header {
            .mobile-menu-open {
                margin-right: 12px;
            }

            .logo img {
                width: 120px;
            }
        }

    }
</style>
