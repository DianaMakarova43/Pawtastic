<template>
  <div>
    <div class="flex justify-between items-center border-b-1 py-3">
      <h2 class="text-3xl font-bold">Папки</h2>
      <v-btn @click="createFolder" width="180px" height="40px">
        <v-icon start>mdi-plus</v-icon>
        Создать папку
      </v-btn>
    </div>

    <div v-for="folder in folders" :key="folder.id">
      <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700 transition-colors">
        <v-card variant="tonal" :subtitle="folder.description" class="d-flex justify-space-between align-center">
          <template #title>
            <v-icon class="mr-2 mb-2" color="primary">mdi-folder-cog-outline</v-icon>
            {{ folder.title }}
          </template>
          <div>
            <v-btn @click="editFolder(folder)" class="mr-2">
              <v-icon color="blue">mdi-pen</v-icon>
            </v-btn>
            <v-btn @click="deleteFolderOne(folder.id)" class="mr-2">
              <v-icon color="red">mdi-basket</v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>

    <my-dialog
        ref="dialogRef"
        :title="titleModal"
        @submit="handleDialogSubmit"
    />
  </div>
</template>

<script>
import MyDialog from "../../components/MyDialog.vue";
import FolderMixin from "../../mixins/FolderMixin.vue";

export default {
  components: { MyDialog },
  mixins: [FolderMixin],
  data() {
    return {
      folders: [],
      titleModal: '',
    }
  },
  async mounted() {
    this.folders = await this.getFolders()
  },
  methods: {
    async fetchFolders() {
      this.folders = await this.getFolders();
    },
    createFolder() {
      this.titleModal = 'Создать новую папку';
      this.$refs.dialogRef.open(); // открываем пустое окно
    },
    editFolder(folder) {
      this.titleModal = 'Редактировать папку';
      this.$refs.dialogRef.open(folder); // передаём выбранную папку
    },
    async deleteFolderOne(id) {
      await this.deleteFolder(id);
      this.folders = this.folders.filter(folder => folder.id !== id);
    },
    async handleDialogSubmit({ id, title, description }) {
      if (id) {
        await this.patchFolder(id, title, description);
      } else {
        await this.postFolder(title, description);
      }
      await this.fetchFolders();
    }
  }
}
</script>
