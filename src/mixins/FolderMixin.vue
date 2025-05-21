<script>
import axios from "axios";

export default {
  name: "FolderMixin",
  methods: {
    async postFolder(title, description) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:8080/api/v1/folder`, {title, description}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.folder;
      } catch (error) {
        throw error;
      }
    },
    async deleteFolder(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.delete(`http://localhost:8080/api/v1/folder/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.folders;
      } catch (error) {
        throw error;
      }
    },
    async getFolder(id) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/folder/${id}`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.folder;
      } catch (error) {
        throw error;
      }
    },
    async getFolders() {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`http://localhost:8080/api/v1/folder`, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.folders;
      } catch (error) {
        throw error;
      }
    },
    async patchFolder(id, title, description) {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.patch(`http://localhost:8080/api/v1/folder/${id}`, {title, description}, {headers: {Authorization: 'Bearer ' + token}});
        return response.data.folder;
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