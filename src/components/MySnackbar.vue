<template>
  <div class="text-center ma-2">
    <v-snackbar
        :color="color"
        v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
            variant="text"
            @click="snackbar = false"
        >
         X
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
  }),
  methods: {
    open() {
      this.snackbar = true
    },
  },
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>
