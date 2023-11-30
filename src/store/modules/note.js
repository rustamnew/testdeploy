import axios from 'axios'

export default {
    
    state: {
        notes: []
    },
    actions: {
        async addNote(context, data) {
            await axios.post('https://dist.nd.ru/api/notes', {
                title: data.title,
                content: data.content
            })
            .then((/*response*/) => {
                this.dispatch("fetchNotes")
                this.commit("closeModal")
            })
            .catch((response) => {
                console.log('error: ', response)
            })
        },

        async fetchNotes(/*context*/) {
            await axios.get('https://dist.nd.ru/api/notes')
            .then((response) => {
                this.commit("updateNotes", response.data)
            })
            .catch((response) => {
                console.log('error: ', response)
            })
        },

        async removeNote(context, id) {
            await axios.delete(`https://dist.nd.ru/api/notes/${id}`)
            .then((/*response*/) => {
                this.dispatch("fetchNotes")
            })
            .catch((response) => {
                console.log('error: ', response)
            })
        }
    },
    mutations: {
        updateNotes(state, notes) {
            state.notes = notes
        }
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    }
}