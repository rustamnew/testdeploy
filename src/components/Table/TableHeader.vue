<script setup>
import SearchInput from '../Inputs/SearchInput.vue';
import FilterIcon from '../../assets/icons/FilterIcon.svg'
import SortIcon from '../../assets/icons/SortIcon.svg'
import TableAddItemModal from '../Modals/TableAddItemModal.vue';

import {useModalStore} from '../../stores/modal'
</script>

<template>
    <div class="table-header">
        <div class="title">Учебные сессии</div>

        <div class="buttons">
            <SearchInput />

            <div class="filter">
                <button class="button simple icon">
                    <FilterIcon />
                </button>
            </div>

            <div class="sort">
                <button class="button simple icon">
                    <SortIcon />
                </button>
            </div>
            
            <div class="create">
                <button class="button simple blue" @click="openTableAddItemModal('tableAddItem')">
                    Создать
                </button>
            </div>
        </div>

        <TableAddItemModal />
    </div>
</template>

<script>
    export default {
        data() {
            let modalStore = useModalStore()
            
            return {
                modalStore
            }
        },
        methods: {
            openTableAddItemModal(modal_id) {
                this.modalStore.activateModal(modal_id)
            }
        }
    }
</script>

