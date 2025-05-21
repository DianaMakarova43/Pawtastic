<script>
import axios from "axios";

export default {
  methods: {
    async postItem(title, description, code, moduleId) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:8080/api/v1/module-item`, {title, description, code, moduleId}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.item;
      } catch (error) {
        throw error;
      }
    },
    async deleteItem(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.delete(`http://localhost:8080/api/v1/module-item/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.folders;
      } catch (error) {
        throw error;
      }
    },
    async getItem(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/module-item/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.item;
      } catch (error) {
        throw error;
      }
    },
    async getItems(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/module-item/by-module/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.moduleItems;
      } catch (error) {
        throw error;
      }
    },
    async patchItems(id, title, description, code, moduleId) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.patch(`http://localhost:8080/api/v1/module-item/${id}`, {title, description, code, moduleId}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.item;
      } catch (error) {
        throw error;
      }
    },
  }
}
</script>

<template>

</template>

<style scoped>

</style>