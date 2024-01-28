import { defineStore } from 'pinia'

import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
    auth: GH_TOKEN,
});
            
export const useRepoStore = defineStore('repo', {
  state: () => {
    const searchQuery: string | null = ''
    return {
        repos: [] as any[],
        pagination: {
            per_page: 10,
            current_page: 1,
            total_pages: 1
        },
        searchQuery,
        isLoading: false
    }
  },
  actions: {
    async searchRepos(save_current_page = false) {
        this.isLoading = true
        this.repos = []

        if (save_current_page === false) {
            this.pagination.current_page = 1
        }

        if (this.searchQuery) {
            const response = await octokit.request('GET /search/repositories', {
                q: this.searchQuery,
                page: this.pagination.current_page,
                per_page: this.pagination.per_page
            })

            if (response.data.total_count > 1000) { //Ограничение API на 1000 результатов
                response.data.total_count = 1000
            }
    
            let total_pages = Math.ceil(response.data.total_count / this.pagination.per_page) 
    
            this.pagination.total_pages = total_pages
            this.repos = response.data.items
            
        }

        this.isLoading = false
    }
  },
})