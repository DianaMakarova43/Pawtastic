<template>
  <div class="flex justify-between items-center border-b-1 py-3">
    <h2 class="text-3xl font-bold">Модули</h2>
    <v-btn @click="$router.push('/main/modules/add')" width="200px" height="40px">
      <v-icon start>mdi-plus</v-icon>
      Создать модуль
    </v-btn>
  </div>
  <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700  transition-colors">
    <v-card variant="tonal" subtitle="Subtitle" >
      <template #title>
        <v-icon class="mr-2 mb-2" color="primary">mdi-puzzle</v-icon>
        Card title
      </template>
    </v-card>
  </div>
  <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700  transition-colors">
    <v-card variant="tonal" subtitle="Subtitle" >
      <template #title>
        <v-icon class="mr-2 mb-2" color="primary">mdi-puzzle</v-icon>
        Card title
      </template>
    </v-card>
  </div>
  <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700  transition-colors">
    <v-card variant="tonal" subtitle="Subtitle" >
      <template #title>
        <v-icon class="mr-2 mb-2" color="primary">mdi-puzzle</v-icon>
        Card title
      </template>
    </v-card>
  </div>
</template>
<script >
export default {

}
</script>