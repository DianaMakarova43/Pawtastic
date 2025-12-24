<script>
import CodeBlock from '../../components/CodeBlock.vue'
import 'prismjs/components/prism-java'
import moduleMixin from "../../mixins/ModuleMixin.vue";
import itemsMixin from "../../mixins/ItemsMixin.vue";

export default {
  components: {
    CodeBlock
  },
  mixins: [moduleMixin, itemsMixin],
  data() {
    return {
      selectedLanguage: 'java',
      nameInput: '',
      descInput: '',
      cards: [],
      moduleId: '',
    }
  },
  async mounted() {
    this.moduleId = this.$route.params.id
    const response = await this.getModule(this.moduleId)
    this.nameInput = response.title
    this.descInput = response.description

    const responseTwo = await this.getItems(this.moduleId)
    this.cards = responseTwo
  },
  methods: {
    addNewCard() {
      this.cards.push({title: "", desc: ""})
    },
    deleteCard(index) {
      this.cards.splice(index, 1)
    },
    async editModule() {
      await this.patchModule(this.moduleId, this.nameInput, this.descInput)
      for (let i = 0; i < this.cards.length; i++) {
        await this.patchItems(this.cards[i].id, this.cards[i].title, this.cards[i].desc, this.cards[i].code, this.moduleId)
      }

    }
  }
}
</script>

<template>
  <h2 class=" mb-4 text-3xl font-bold">Редактирование модуля</h2>
  <v-text-field
      v-model="nameInput"
      clearable variant="outlined"
  ></v-text-field>
  <v-text-field
      v-model="descInput"
      label="Описание"
      clearable variant="outlined"
  ></v-text-field>
  <template v-for="(card, index) in cards">
    <v-card :title="`Карточка №${index + 1}`" class="mb-5">
      <v-card-text class=" d-flex flex-column">
        <v-text-field
            v-model="card.title"
            label="Термин"
            clearable variant="outlined"
        ></v-text-field>
        <v-textarea clearable variant="outlined" label="Определение" v-model="card.description"></v-textarea>

        <template v-if="card.code?.length">
          <v-textarea
              clearable variant="outlined"
              v-model="card.code"
              placeholder="Вставь свой код"
          />

          <h2 class="text-1xl text-center">Как будет выглядеть код на карточке:</h2>
          <CodeBlock :code="card.code" :language="selectedLanguage"/>
        </template>
        <div class=" d-flex gap-10  ">
          <v-btn
              class="mt-2"
              color="blue"
              @click="card.visibleCode = !card.visibleCode"
          >
            Добавить код
          </v-btn>
          <v-btn
              class="mt-2 ml-auto"
              color="red"
              @click="deleteCard(index)"
          >
            <v-icon>mdi-delete</v-icon>
            Удалить карточку
          </v-btn>
        </div>

      </v-card-text>

    </v-card>
  </template>
  <div class="d-flex flex-column justify-center align-center">
    <v-btn
        @click="addNewCard"
        class="mt-2"
        color="blue"
        text="Добавить карточку"
    ></v-btn>
    <v-btn
        @click="editModule"
        class="mt-4 w-full font-weight-bold"
        color="green"
        text="Редактировать модуль"
    ></v-btn>
  </div>
</template>

<style scoped>

</style>