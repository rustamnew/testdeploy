import { defineStore } from "pinia";
import axios from "axios";

export const useTicketStore = defineStore("ticket", {
  state: () => ({
    tickets: [],
  }),
  actions: {
    async fetchTickets() {
      await axios
        .get("/ticket.json")
        .then((response) => {
          this.tickets = response.data.tickets;
        })
        .catch(() => {
          console.log("error");
        });
    },

    clearData() {
      this.tickets = [];
    },

    getById(id) {
      let ticketById;

      if (!this.tickets.length) {
        this.$subscribe((mutation, state) => {
          if (mutation.events.key === "tickets") {
            const valueArray = mutation.events.newValue;
            const ticket = valueArray.find((item) => {
              return item.id == id;
            });

            ticketById = ticket;
          }
        });
      } else {
        const ticket = this.tickets.find((item) => {
          return item.id == id;
        });

        ticketById = ticket;
      }

      return ticketById;
    },
  },
});
