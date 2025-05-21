<script>
import CodeBlock from '../../components/CodeBlock.vue'
import 'prismjs/components/prism-java'
import moduleMixin from "../../mixins/ModuleMixin.vue";
import itemsMixin from "../../mixins/ItemsMixin.vue";

export default {
  name: "ModulesAddPage",
  components: {
    CodeBlock
  },
  mixins: [moduleMixin, itemsMixin],
  data() {
    return {
      selectedLanguage: 'java',
      nameInput: '',
      descInput: '',
      cards: [
        {title: "", desc: "", sampleCode: "", visibleCode: false, visibleImg: false},
        {title: "", desc: "", sampleCode: "", visibleCode: false, visibleImg: false},
        {title: "", desc: "", sampleCode: "", visibleCode: false, visibleImg: false},
        {title: "", desc: "", sampleCode: "", visibleCode: false, visibleImg: false},
        {title: "", desc: "", sampleCode: "", visibleCode: false, visibleImg: false},
      ],
      moduleId: '',
    }
  },
  watch: {
    cards: {
      handler(newVal, oldVal) {
        console.log('cards изменился:', newVal);
      },
      deep: true, // важно! следит за вложенными свойствами
    }
  },
  methods: {
    addNewCard() {
      this.cards.push({title: "", desc: ""})
    },
    deleteCard(index) {
      this.cards.splice(index, 1)
    },
    async addNewModule() {
      const response = await this.postModule(this.nameInput, this.descInput)
      this.moduleId = response.id
      for (let i = 0; i < this.cards.length; i++) {
        await this.postItem(this.cards[i].title, this.cards[i].desc, this.cards[i].sampleCode, this.moduleId)
      }

    }
  }
}
</script>

<template>
  <h2 class=" mb-4 text-3xl font-bold">Создать новый модуль</h2>
  <v-text-field
      v-model="nameInput"
      label="Название"
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
        <v-textarea clearable variant="outlined" label="Определение" v-model="card.desc"></v-textarea>

        <template v-if="card.visibleCode">
          <v-textarea
              clearable variant="outlined"
              v-model="card.sampleCode"
              placeholder="Вставь свой код"
          />

          <h2 class="text-1xl text-center">Как будет выглядеть код на карточке:</h2>
          <CodeBlock :code="card.sampleCode" :language="selectedLanguage"/>
        </template>
        <template v-if="card.visibleImg">
          <h2 class="text-1xl text-center mt-5 mb-2">Добавьте картинку:</h2>
          <v-file-input  label="Картинка"></v-file-input>
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
              class="mt-2"
              color="blue"
              @click="card.visibleImg = !card.visibleImg"
          >
            Добавить картинку
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
        @click="addNewModule"
        class="mt-4 w-full font-weight-bold"
        color="green"
        text="Создать модуль"
    ></v-btn>
  </div>
</template>

<style scoped>

</style>