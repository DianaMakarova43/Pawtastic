<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card :title="title">
      <v-card-text>
        <v-text-field class="mt-4"
            v-model="nameInput"
            label="Название"
            clearable variant="outlined"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">Отмена</v-btn>
        <v-btn @click="dialog = false">Сохранить</v-btn>
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
    }
  },
  methods: {
    open() {
      this.dialog = true
    },
  },
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>