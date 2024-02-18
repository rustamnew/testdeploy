<template>
    <li class="menu-item" :class="expanded ? 'expanded' : ''">
        <button v-if="item.children && item.children.length > 0" class="expand" @click="expandClick()">{{ expanded ? '-' : '+' }}</button>
        
        <div class="title">
            <a class="link" :href="`https://www.klerk.ru${item.url}`" target="_blank">{{item.title}}</a>

            <input type="checkbox" v-model="checkbox" @change="check()">

            <span title="count">{{ `(${item.count})` }}</span>
            <span title="children count summ" >{{ `(${childrenCount})` }}</span>
        </div>

        <ul class="list" v-if="item.children && item.children.length > 0">
            <MenuItem v-for="child in item.children" :item="child" @check="checkEventHandler($event)"/> 
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'MenuItem',
        props: {
            item: Object
        },
        data() {
            return {
                expanded: false,
                checkbox: false,
                childrenCount: 0,
                totalCount: 0,
                checkedSumm: 0
            }
        },
        mounted() {
            this.countSumm(this.item)
            this.totalCount = this.childrenCount + this.item.count
        },
        watch: { 
            item: function(newVal, oldVal) {
                this.expanded = false
                this.checkbox = false
            }
        },
        methods: {
            expandClick() {
                this.expanded = !this.expanded
            },

            countSumm(item) {
                
                if (item.children && item.children.length) {
                    item.children.forEach( (child) => {
                    
                        if (child.count) {
                            this.childrenCount += child.count
                        }
                        if (child.children) {
                            this.countSumm(child)
                        }
                        
                    })
                }
            },

            check() {
                let count = 0;

                if (this.checkbox) {
                    count = this.totalCount
                } else {
                    count = this.totalCount * -1
                }

                this.checkedSumm += count
                
                if (this.checkbox) { 
                    this.$emit('check', count)
                } else if (this.checkedSumm > 0) {
                    this.$emit('check', this.checkedSumm)
                } else {
                    this.$emit('check', count)
                }
                
            },

            checkEventHandler(count) {
                this.checkedSumm += count

                if (this.checkbox) { 
                    this.$emit('check', this.totalCount)
                } else {
                    this.$emit('check', this.checkedSumm)
                }
            }
        }
    }
</script>

<style scoped>
    .menu-item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        list-style: none;
    }

    .title {
        display: flex;
        align-items: center;
    }

    .title > * {
        margin-right: 0.4rem;
    }
    .expand {
        margin-right: 0.5rem;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        cursor: pointer;
    }
    .list {
        display: none;
        flex-basis: 100%;
    }
    .expanded {
        
    }
    .expanded > .list {
        border-left: 1px solid lightgray;
        display: block;
        padding-left: 3rem;
    }

</style>
