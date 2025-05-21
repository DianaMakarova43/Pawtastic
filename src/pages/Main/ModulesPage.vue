<template>
  <div class="flex justify-between items-center border-b-1 py-3">
    <h2 class="text-3xl font-bold">Модули</h2>
    <v-btn @click="$router.push('/main/modules/add')" width="200px" height="40px">
      <v-icon start>mdi-plus</v-icon>
      Создать модуль
    </v-btn>
  </div>
  <div v-for="module in modules">
    <div class="mt-7 cursor-pointer rounded-md hover:bg-stone-700 transition-colors" @click="$router.push({ name: 'ModulesCardsPage', params: { id: module.id } })"
    >
      <v-card variant="tonal" :subtitle="module.description" class="d-flex justify-space-between align-center">
        <template #title >
          <v-icon class="mr-2 mb-2" color="primary" >mdi-puzzle</v-icon>
          {{ module.title }}
        </template>
        <div class="mr-2">
          <h4>Количество карточек: 20</h4>
          <h4>Автор: user</h4>
        </div>
      </v-card>
    </div>
  </div>

</template>
<script>
import moduleMixin from "../../mixins/ModuleMixin.vue";

export default {
  mixins: [moduleMixin],
  data() {
    return {
      modules: [],
    }
  },
  async mounted() {
    this.modules = await this.getModules()
  },
  methods: {
    editModule(module) {
      // this.titleModal = 'Редактировать папку';
      // this.$refs.dialogRef.open(module); // передаём выбранную папку
    },

  }
}
</script>