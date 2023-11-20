<script setup>
import Sidebar from './Sidebar/Sidebar.vue'
import Table from './Table/Table.vue'

import {useMenuTabStore} from '../stores/menuTab'

</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<template>
    <div class="wrapper">
        <Sidebar />

        <div class="content">
            <div class="content-inner">
                <Table v-if="menuTabStore.tab == 'Учебные сессии'"/>

                <div class="empty-page" v-else>
                    {{ menuTabStore.tab }}
                </div>
            </div>
            
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

        mounted() {

        },
    }
</script>

<style src="../assets/style.scss" lang="scss"></style>

