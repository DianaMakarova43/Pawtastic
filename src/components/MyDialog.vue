<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card :title="title">
      <v-card-text>
        <v-text-field
            class="mt-4"
            v-model="nameInput"
            label="Название"
            clearable
            variant="outlined"
        ></v-text-field>
        <v-text-field
            v-model="descInput"
            label="Описание"
            clearable
            variant="outlined"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="close">Отмена</v-btn>
        <v-btn :loading="loading" @click="submit">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MyDialog',
  data() {
    return {
      dialog: false,
      nameInput: '',
      descInput: '',
      loading: false,
      editId: null, // <-- запоминаем ID если редактируем
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
  },
  methods: {
    open(folder = null) {
      if (folder) {
        this.nameInput = folder.title;
        this.descInput = folder.description;
        this.editId = folder.id;
      } else {
        this.nameInput = '';
        this.descInput = '';
        this.editId = null;
      }
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.nameInput = '';
      this.descInput = '';
      this.editId = null;
    },
    async submit() {
      this.loading = true;
      try {
        this.$emit('submit', {
          id: this.editId,
          title: this.nameInput,
          description: this.descInput,
        });
      } finally {
        await new Promise(resolve => setTimeout(resolve, 500));
        this.loading = false
        this.close();
      }
    }
  }
}
</script>
