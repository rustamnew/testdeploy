<template>
  <q-breadcrumbs active-color="white">
    <q-breadcrumbs-el
      v-for="item in breadcrumbs"
      :key="item.title"
      :label="item.title"
      :to="item.path"
    />
  </q-breadcrumbs>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BreadcrumbsComponent",
  data() {
    return {
      breadcrumbs: [],
    };
  },
  watch: {
    $route(to, from) {
      this.updateBreadcrumbs(to);
    },
  },
  created() {
    this.updateBreadcrumbs(this.$route);
  },
  methods: {
    updateBreadcrumbs(to) {
      let array = [];
      to.matched.forEach((item) => {
        if (item.name) {
          let finalPath = item.path;

          if (item.path.includes(":ticketId")) {
            finalPath = item.path.replace(":ticketId", to.params.ticketId);
          }
          const obj = {
            path: finalPath,
            title: item.name,
          };
          array.push(obj);
        }
      });
      if (array[0].path !== "/") {
        array.unshift({
          path: "/",
          title: "Главная",
        });
      }
      this.breadcrumbs = array;
    },
  },
});
</script>
