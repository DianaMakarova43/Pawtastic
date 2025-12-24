<template>
  <v-app class="position-relative">
    <v-app-bar :elevation="2" rounded>
      <template v-slot:prepend>
        <v-app-bar-nav-icon id="menu-activator-pages"></v-app-bar-nav-icon>
        <v-menu activator="#menu-activator-pages" width="200">
          <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
                @click="$router.push(item.path)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <v-app-bar-title>Приложение Pawtastic</v-app-bar-title>

      <v-avatar class="mr-3" id="menu-activator-avatar" color="red" image="smirk.png" size="45"></v-avatar>
      <v-menu activator="#menu-activator-avatar" width="250">
        <v-list >
          <v-list-item >
            <v-btn @click="toggleTheme"  width="220px"  height="35px">
              <v-icon start>{{ themeIcon }}</v-icon>
              {{themeIconTitle}}
            </v-btn>
          </v-list-item>
          <v-list-item @click="$router.push('/profile')">
            <v-list-item-title>Профиль аккаунта</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="token" @click="logout">
            <v-list-item-title>Выйти из аккаунта</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-container style="max-width: 1100px;" class="my-16 mx-auto">
      <router-view/>
    </v-container>
    <v-footer border>© {{ new Date().getFullYear() }} Pawtastic | Все для заучивания карточек. Все права защищены.
    </v-footer>
  </v-app>
</template>

<script>
import {useTheme} from 'vuetify'
import {computed} from 'vue'

export default {
  name: 'App',
  data: () => ({
    items: [
      {title: 'Папки', path: '/main/floders'},
      {title: 'Модули', path: '/main/modules'},
    ],
    token: localStorage.getItem('authToken')
  }),
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      this.$router.push('/');
    }
  },
  setup() {
    const theme = useTheme()

    const toggleTheme = () => {
      theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
    }

    const themeIcon = computed(() =>
        theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
    )

    const themeIconTitle = computed(() =>
        theme.global.name.value === 'dark' ? 'Светлая тема' : 'Тёмная тема'
    )

    return {
      toggleTheme,
      themeIcon,
      themeIconTitle
    }
  },
}
</script>

<style>
.v-footer {
  flex: 0 0 0 !important;
  position: absolute !important;
  bottom: 0;
  width: 100%;
}

</style>
