<script>
import axios from "axios";

export default {
  methods: {
    async postModule(title, description) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:8080/api/v1/module`, {title, description}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async deleteModule(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.delete(`http://localhost:8080/api/v1/module/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.modules;
      } catch (error) {
        throw error;
      }
    },
    async getModule(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/module/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async getModules() {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/module`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.modules;
      } catch (error) {
        throw error;
      }
    },
    async getModulesFolder(folderId) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/module/by-folder/${folderId}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.modules;
      } catch (error) {
        throw error;
      }
    },
    async patchModule(id, title, description) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.patch(`http://localhost:8080/api/v1/module/${id}`, {title, description}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.module;
      } catch (error) {
        throw error;
      }
    },

    async postModuleImport(moduleId, file) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:8080/api/v1/module/${moduleId}`, {file}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.module;
      } catch (error) {
        throw error;
      }
    },

    async postModuleFolder(moduleId, folderId) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:8080/api/v1/module/${moduleId}/folder/${folderId}`, {}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.module;
      } catch (error) {
        throw error;
      }
    },

    async deleteModuleFolder(moduleId, folderId) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.delete(`http://localhost:8080/api/v1/module/${moduleId}/folder/${folderId}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.modules;
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