<script setup>

import {useMenuTabStore} from '../../stores/menuTab'

import ArchiveIcon from '../../assets/icons/ArchiveIcon.svg'
import CalendarIcon from '../../assets/icons/CalendarIcon.svg'
import DoorIcon from '../../assets/icons/DoorIcon.svg'
import GraduationCapIcon from '../../assets/icons/GraduationCapIcon.svg'
import SettingsIcon from '../../assets/icons/SettingsIcon.svg'
import Student from '../../assets/icons/Student.svg'
import UserListIcon from '../../assets/icons/UserListIcon.svg'
import VideoCamIcon from '../../assets/icons/VideoCamIcon.svg'
</script>

<template>
    <div class="table-categories">
        <div class="item" :class="menuTabStore.tab == 'Расписание' ? 'active' : ''" @click="changeTab('Расписание')">
            <CalendarIcon />

            <span>Расписание</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Учебные сессии' ? 'active' : ''" @click="changeTab('Учебные сессии')">
            <GraduationCapIcon />

            <span>Учебные сессии</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Список комнат' ? 'active' : ''" @click="changeTab('Список комнат')">
            <DoorIcon />

            <span>Список комнат</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Пользователи' ? 'active' : ''" @click="changeTab('Пользователи')">
            <Student />

            <span>Пользователи</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Учебные группы' ? 'active' : ''" @click="changeTab('Учебные группы')">
            <UserListIcon />

            <span>Учебные группы</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Список устройств' ? 'active' : ''" @click="changeTab('Список устройств')">
            <VideoCamIcon />

            <span>Список устройств</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Настройки системы' ? 'active' : ''" @click="changeTab('Настройки системы')">
            <SettingsIcon />

            <span>Настройки системы</span>
        </div>

        <div class="item" :class="menuTabStore.tab == 'Архив' ? 'active' : ''" @click="changeTab('Архив')">
            <ArchiveIcon />

            <span>Архив</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            let menuTabStore = useMenuTabStore()
            return {
                menuTabStore,
            }
        },
        methods: {
            changeTab(tab) {

                this.menuTabStore.tab = tab
            }
        }
    }
</script>

