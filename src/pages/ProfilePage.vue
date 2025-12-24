<script>
import userMixin from "../mixins/UserMixin.vue";

export default {
  mixins: [userMixin]
}
</script>

<template>
<div>
<!--  //токен нужен??-->
  <v-btn
      @click="fetchUser(1)"
      class="mt-2"
      text="1"
  ></v-btn>
  <v-btn
      @click="patchUser(1, 'asd')"
      class="mt-2"
      text="2"
  ></v-btn>
</div>
</template>

<style scoped>

</style>