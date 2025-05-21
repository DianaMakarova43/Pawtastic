<template>
  <div class="!my-auto flex justify-center items-center text-center">
    <div v-if="!auth" class="w-xs">
      <h2 class="mb-4 text-3xl font-bold">Авторизация</h2>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
            v-model="userName"
            label="Имя"
            clearable variant="outlined"
        ></v-text-field>
        <v-text-field
            v-model="userPassword"
            label="Пароль"
            clearable variant="outlined" type="password"
        ></v-text-field>
        <v-text-field
            v-model="userEmail"
            label="Email"
            clearable variant="outlined" type="email"
        ></v-text-field>
        <v-text-field
            clearable variant="outlined"
            v-model="userRole"
            label="Роль"
        ></v-text-field>
        <v-btn
            :loading="loading"
            @click="login = true"
            class="mt-2"
            text="Войти"
            type="submit"
            block
        ></v-btn>
      </v-form>
      <p class="mt-4 font-semibold no-underline hover:underline cursor-pointer" @click="auth = true">Нет аккаунта?
        Зарегистрируйтесь!</p>
    </div>
    <div v-else class="w-xs">
      <h2 class="mb-4 text-3xl font-bold">Регистрация</h2>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
            clearable variant="outlined"
            v-model="userName"
            label="Имя"
        ></v-text-field>
        <v-text-field
            v-model="userPassword"
            label="Пароль"
            clearable variant="outlined" type="password"
        ></v-text-field>
        <v-text-field
            v-model="userEmail"
            label="Email"
            clearable variant="outlined" type="email"
        ></v-text-field>
        <v-text-field
            clearable variant="outlined"
            v-model="userRole"
            label="Роль"
        ></v-text-field>
        <v-btn
            :loading="loading"
            @click="login = false"
            class="mt-2"
            text="Зарегистрироваться"
            type="submit"
            block
        ></v-btn>
      </v-form>
      <p class="mt-4 font-semibold no-underline hover:underline cursor-pointer" @click="auth = false">Есть аккаунт?
        Войдите!</p>
    </div>
    <v-btn
        @click="fetchUser(1)"
        class="mt-2"
        text="1"
    ></v-btn>
    <v-btn
        @click="patchUser(1, this.userName)"
        class="mt-2"
        text="2"
    ></v-btn>
  </div>
  <my-snackbar :text="text" :color="color" ref="snackbarRef" />
</template>
<script>
import UserMixin from "../mixins/UserMixin.vue";
import MySnackbar from "../components/MySnackbar.vue";

export default {
  components: {MySnackbar},
  data() {
    return {
      loading: false,
      userName: '',
      userPassword: '',
      userEmail: '',
      userRole: '',
      auth: false,
      text: '',
      login: false,
      color: "green",
    };
  },
  mixins: [UserMixin],
  methods: {
    async submit() {
      this.loading = true;

      try {
        if (this.login) {
          await this.loginUser(this.userName, this.userPassword, this.userEmail, this.userRole);
        } else {
          await this.registerUser(this.userName, this.userPassword, this.userEmail, this.userRole);
        }
        this.color = "green";
        this.text = this.login
            ? "Авторизация прошла успешно!"
            : "Регистрация прошла успешно!";
        this.$refs.snackbarRef.open();
      } catch (error) {
        this.color = "red";
        this.text = this.login ? "Ошибка при авторизации!" : "Ошибка при регистрации!"
        this.$refs.snackbarRef.open()
      } finally {
        await new Promise(resolve => setTimeout(resolve, 500));
        this.loading = false;
      }
    },
  },
}
</script>