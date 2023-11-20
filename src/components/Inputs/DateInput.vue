<script setup>

import { ref, onMounted } from 'vue';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


</script>

<template>
    <div class="datepicker-wrapper" :class="transparent ? 'transparent' : ''">
        <VueDatePicker 
        v-model="seted_date" 
        @update:model-value="updateValue()" 
        :format="format" 
        
        range 
        auto-range="0"
        cancelText="Отмена"
        selectText="Выбрать"
        locale="ru"
        />
    </div>
</template>

<script>
    export default {
        props: {
            date: Array,
            transparent: Boolean
        },
        data() {

            return {
                seted_date: this.date
            }
        },
        setup() {

        },
        mounted() {

        },
        watch: { 
            date: function(newVal, oldVal) { 
                this.seted_date = newVal
            }
        },
        methods: {
            updateValue(event) {
                this.$emit('updateValue', {
                    obj: this.seted_date,
                })
            },
            format(date) {
                const day1 = date[0].getDate();
                
                const month1 = (date[0].getMonth() + 1 < 10 ? '0' : '') + date[0].getMonth()
                const year1 = date[0].getFullYear();
                const hour1 = date[0].getHours();
                const minutes1 = (date[0].getMinutes() < 10 ? '0' : '') + date[0].getMinutes()

                const day2 = date[1].getDate();
                const month2 = (date[1].getMonth() + 1 < 10 ? '0' : '') + date[1].getMonth()
                const year2 = date[1].getFullYear();
                const hour2 = date[1].getHours();
                const minutes2 = (date[1].getMinutes() < 10 ? '0' : '') + date[1].getMinutes()

                if (day1 + month1 + year1 == day2 + month2 + year2) {
                    return `${day1}.${month1}.${year1}, ${hour1}:${minutes1} - ${hour2}:${minutes2}`;
                } else {
                    return `${day1}.${month1}.${year1}, ${hour1}:${minutes1} - ${day1}.${month1}.${year1}, ${hour2}:${minutes2}`;
                }
            }
        }
    }
    
</script>
