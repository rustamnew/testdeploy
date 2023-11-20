<script setup>
import Logo from '../Logo.vue'
import SideBarTableCategories from './SideBarTableCategories.vue'
import SideBarProfile from './SideBarProfile.vue'
import SideBarControls from './SideBarControls.vue'


import ArrowWhiteIcon from '../../assets/icons/ArrowWhiteIcon.svg'
</script>

<template>
    <div class="sidebar" :class="hide ? 'hide' : ''">

    
        <Logo />

        <SideBarTableCategories />

        <SideBarProfile />

        <SideBarControls />


        <button class="button simple small black icon circle sidebar-switcher" @click="switchSidebar()">
            <ArrowWhiteIcon />
        </button>

        <div class="version-info">Версия 1.02</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hide: false
            }
        },
        methods: {
            switchSidebar() {
                if (!this.hide) {
                    this.hide = true
                } else {
                    this.hide = false
                }
                
            }
        }
    }
</script>

