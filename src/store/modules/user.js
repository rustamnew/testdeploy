import axios from 'axios'
import router from '@/router'

export default {
    
    state: {
        user: {},
        errorText: ''
    },
    actions: {
        async registerUser(context, data) {
            await axios.post('https://dist.nd.ru/api/reg', {
                email: data.email,
                password: data.password,
                confirm_password: data.confirm_password,
            })
            .then((/*response*/) => {
                this.dispatch("loginUser", {
                    email: data.email,
                    password: data.password
                })
                this.commit("closeModal")
            })
            .catch((response) => {
                context.commit('updateErrorText', response.response.data.message)
            })
        },

        async loginUser(context, data) {
            await axios({
                url: 'https://dist.nd.ru/api/auth',
                method: 'POST',
                data: JSON.stringify({
                    email: data.email,
                    password: data.password
                }),
                headers: {
                    'Content-Type': 'application/json',
                    mode: 'cors'
                }
            })
            .then((/*response*/) => {

                context.commit('updateUser', {
                    email: data.email,
                    id: data.id
                })
                context.commit('updateErrorText', '')

                this.commit("closeModal")

                router.push('account')
            })
            .catch((response) => {
                context.commit('updateErrorText', response.response.data.message)
            })
        },

        async getUser(context) {
            await axios.get(process.env.VUE_APP_API_URL + '/api/auth')
            .then((response) => {
                context.commit('updateUser', response.data)
            })
            .catch((response) => {
                console.log('error: ', response)
            })
        },

        async logoutUser(context) {
            await axios.delete('https://dist.nd.ru/api/auth')
            .then((/*response*/) => {
                context.commit('updateUser', {})
            })
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        updateErrorText(state, errorText) {
            state.errorText = errorText
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        getErrorText(state) {
            return state.errorText
        }
    }
}