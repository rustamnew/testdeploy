<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="formData.login" label="Логин *" />

          <q-input
            filled
            :type="isPwd ? 'password' : 'text'"
            v-model="formData.password"
            label="Пароль *"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div>
            <q-btn label="Войти" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useUserStore } from "stores/user";

const userStore = useUserStore();

export default defineComponent({
  name: "LoginPage",

  data() {
    return {
      formData: {
        login: "",
        password: "",
      },
    };
  },
  setup() {
    return {
      isPwd: ref(true),
    };
  },
  methods: {
    toMainPage() {
      this.$route.push("/");
    },
    async onSubmit() {
      await userStore.loginUser(this.formData);
      this.$router.replace("/");
    },

    onReset() {
      login.value = null;
      password.value = null;
    },
  },
});
</script>
