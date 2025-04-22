<script>
import axios from "axios";

export default {
  name: "UserMixin",
  methods: {
    async registerUser(username, password, email, role) {
      try {
        const response = await axios.post(`http://localhost:8080/api/v1/register`, {username, email, password, role});
        return response.data.user;
      } catch (error) {
        throw error;
      }
    },
    async loginUser(username, password, email, role) {
      try {
        const response = await axios.post(`http://localhost:8080/api/v1/login`, {username, email, password, role});
        const authHeader = response.data.accessToken;
        localStorage.setItem('authToken', authHeader);
        return authHeader
      } catch (error) {
        throw error;
      }
    },
    async fetchUser(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/user/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.user;
      } catch (error) {
        console.log(error.message);
      }
    },
    async patchUser(username, password, email, role) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.patch(`http://localhost:8080/api/v1/user/${id}`, {username, email, password, role}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.user;
      } catch (error) {
        console.log(error.message);
      }
    },
  }
}
</script>

<template>

</template>

<style scoped>

</style>