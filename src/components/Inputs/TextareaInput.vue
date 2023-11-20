<script setup>

</script>

<template>
    <div class="textarea-wrapper" :class="transparent ? 'transparent' : ''">
        <textarea name="" id="" rows="2" v-model="textarea" @keyup="updateValue($event)"></textarea>
    </div>
    
    
</template>

<script>
    export default {
        props: {
            text: String,
            transparent: Boolean
        },
        data() {
            let textarea = ''

            if (this.text) {
                textarea = this.text
            }
            return {
                textarea
            }
        },
        mounted() {
            if (this.text) {
                
            }
        },
        watch: { 
            text: function(newVal, oldVal) { 
                this.textarea = this.text
            }
        },
        setup() {

        },
        methods: {
            updateValue(event) {
                this.$emit('updateValue', {
                    obj: this.textarea,
                })
            },
        }
    }
    
</script>

