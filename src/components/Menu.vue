<script setup>
import MenuItem from './MenuItem.vue'
import Loading from './Loading.vue'

</script>

<template>
    <div class="menu" :class="expanded ? 'expanded' : ''">
        <div class="controls">
            <label class="checkbox-wrap">
                <input type="checkbox" v-model="allowEmpty" @change="fetchMenu()">
                <span>Отображать пустые рубрики</span>
            </label>

            <span class="info">Сумма count: {{ checkedSumm }}</span>
        </div>
        
        <button v-if="items.length > 0" class="expand" @click="expandClick()">{{ expanded ? '-' : '+' }}</button>

        <ul class="list" v-show="expanded && !loading">
            <MenuItem v-for="item, index in items" :item="item" :index="index" @check="countCheckedSumm($event, index)"/>
        </ul>

        <Loading v-if="loading === true"/>
        <span v-if="errorMessage" class="errorMessage">{{ errorMessage }}</span> 
    </div>
</template>


<script>
    export default {
        data() {
            return {
                items: [],
                loading: false,
                errorMessage: '',
                expanded: true,
                allowEmpty: true,
                checkedInfo: {},
                checkedSumm: 0
            }
        },
        created() {
            this.fetchMenu()
        },
        methods: {
            async fetchMenu() {
                this.loading = true
                this.items = []
                const query = `https://www.klerk.ru/yindex.php/v3/event/rubrics?allowEmpty=${this.allowEmpty ? '1' : '0'}`

                await fetch(query) 
                .then(response => response.json())
                .then(data => {
                    this.items = data
                    this.loading = false
                    this.errorMessage = ''
                })
                .catch(error => {
                    this.errorMessage = error;
                    this.loading = false
                    console.error("There was an error!", error);
                });
                
            },
            expandClick() {
                this.expanded = !this.expanded
            },
            countCheckedSumm(event, index) {

                if (!this.checkedInfo[index]) {
                    this.checkedInfo[index] = 0
                }

                this.checkedInfo[index] = event
                let summ = 0
                for (const item in this.checkedInfo) {
                    summ += this.checkedInfo[item]
                }

                this.checkedSumm = summ
            }
        }
    }
</script>

<style scoped>

    .checkbox-wrap {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .checkbox-wrap span {
        margin-left: 0.5rem;
    }
    .checkbox-wrap input[type="checkbox"] {
        width: 1.2rem;
        height: 1.2rem;
    }

    .info {
        display: block;
        margin-bottom: 2rem;
    }
    .list {
        padding-left: 2rem;
    }
    .expand {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        cursor: pointer;
    }
    .expanded .list{
        border-left: 1px solid lightgray;
    }
</style>