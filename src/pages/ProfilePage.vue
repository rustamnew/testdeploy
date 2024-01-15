<script setup>
const options = [
  "Казань",
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Тюмень",
];
</script>

<template>
  <q-page class="flex flex-center">
    <h1>Профиль</h1>

    <div class="q-pa-md row items-start q-gutter-md fit">
      <q-card class="my-card bg-blue text-white fit">
        <q-card-section>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input dark color="white" v-model="profile.name" label="Имя" />
            </q-item-section>
          </q-item>

          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input
                dark
                color="white"
                v-model="profile.surname"
                label="Фамилия"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-select
                v-model="profile.city"
                dark
                color="white"
                :options="options"
                label="Город"
              />
            </q-item-section>
          </q-item>

          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input
                dark
                color="white"
                v-model="profile.date"
                label="Дата рождения"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="profile.date" mask="DD.MM.YYYY">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-item-section>
              <q-input
                dark
                color="white"
                type="textarea"
                v-model="profile.info"
                label="Информация о пользователе"
              />
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "stores/user";

export default defineComponent({
  name: "ProfilePage",

  data() {
    return {
      profile: {},
    };
  },

  async created() {
    const userStore = useUserStore();
    this.profile = JSON.parse(JSON.stringify(userStore.user));
  },
});
</script>
