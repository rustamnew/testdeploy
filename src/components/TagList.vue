<script setup>
import { ref } from 'vue'

const list = ref(null)

</script>

<script>
    export default {
        name: 'TagList',

        props: {
            tags: Array,
            alignment: String,
        },

        data() {
            //Клонируем объект без ссылки на изначальный
            const tagsArray = JSON.parse(JSON.stringify(this.tags)) 

            //Начальная ширина экрана
            const windowWidth = window.innerWidth

            return {
                windowWidth,
                tagsArray
            }
        },

        //Обработка ресайза окна
        created() {
            window.addEventListener("resize", this.onResize);
        },
        destroyed() {
            window.removeEventListener("resize", this.onResize);
        },

        methods: {
            
            onResize() {
                this.reset() // Заполняем список тегов
                this.$nextTick(() => { //Ждём обновления отрисовки
                    this.checkOverflow(); // Проверяем на переполненность
                })
            },

            // Восстановление значения по умолчанию
            reset() {
                this.tagsArray = JSON.parse(JSON.stringify(this.tags)) 
            },
            

            // Проверка на переполненность списка тегов
            checkOverflow() {
                let overflowed = this.$refs.list.scrollWidth > this.$refs.list.offsetWidth 

                if (overflowed) {
                    this.tagsArray.pop();
                    this.$nextTick(() => {
                        this.checkOverflow()
                    })
                }
            }
            
        },

        mounted() {
            this.checkOverflow()
        }
        
    }
</script>

<template>
    
    <div class="tags" :class="alignment" ref="list">
        <template v-for="item, index in tagsArray" >
            <v-chip :key="index" class="tags__item tag" v-if="item">
                <v-icon v-if="item.icon">{{item.icon}}</v-icon>
                <span v-if="item.text">{{item.text}}</span>
            </v-chip>

            <v-icon v-if="index !== (tagsArray.length - 1)" :key="index + tagsArray.length" class="tag-icon">mdi-circle-small</v-icon>
        </template>
    </div>
</template>

<style scoped lang="scss">
    .tags {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border: 1px solid;
        overflow: hidden;

        &.between {
            justify-content: flex-start;
        }
        &.between {
            justify-content: space-between;
        }


        .tag {
            flex-shrink: 0;
            background: transparent;
            display: flex;
            align-items: center;

            &:deep(.v-chip__content > *:nth-child(2)) {
                margin-left: 0.2rem
            }
        }
    }
</style>