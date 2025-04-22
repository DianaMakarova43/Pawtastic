<template>
  <div class="flex justify-between items-center border-b-1 py-3">
    <h2 class="text-3xl font-bold">Папки</h2>
    <v-btn @click="openDialog" width="180px" height="40px">
      <v-icon start>mdi-plus</v-icon>
      Создать папку
    </v-btn>
  </div>
  <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700  transition-colors">
    <v-card variant="tonal" subtitle="Subtitle" >
      <template #title>
        <v-icon class="mr-2 mb-2" color="primary">mdi-folder-cog-outline</v-icon>
        Card title
      </template>
    </v-card>
  </div>
  <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700  transition-colors">
    <v-card variant="tonal" subtitle="Subtitle" >
      <template #title>
        <v-icon class="mr-2 mb-2" color="primary">mdi-folder-cog-outline</v-icon>
        Card title
      </template>
    </v-card>
  </div>
  <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700  transition-colors">
    <v-card variant="tonal" subtitle="Subtitle" >
      <template #title>
        <v-icon class="mr-2 mb-2" color="primary">mdi-folder-cog-outline</v-icon>
        Card title
      </template>
    </v-card>
  </div>
  <my-dialog ref="dialogRef" :title="'Создать новую папку'"/>
</template>

<script >
import MyDialog from "../../components/MyDialog.vue";

export default {
  components: { MyDialog },
  methods: {
    openDialog() {
      this.$refs.dialogRef.open()
    },
  },
}
</script>