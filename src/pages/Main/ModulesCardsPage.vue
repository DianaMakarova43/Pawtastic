<script>
import CodeBlock from "../../components/CodeBlock.vue";
import 'prismjs/components/prism-java'
import ItemsMixin from "../../mixins/ItemsMixin.vue";
import ModuleMixin from "../../mixins/ModuleMixin.vue";
import MySnackbar from "../../components/MySnackbar.vue";

export default {
  name: "ModulesCardsPage",
  components: {MySnackbar, CodeBlock},
  data() {
    return {
      selectedLanguage: 'java',
      nameInput: '',
      descInput: '',
      cards: [],
      moduleId: null,
      module: {},
      text: 'Модуль успешно удален!',
      color: "green",
      currentIndex: 0,
      flipped: false,
    }
  },
  mixins: [ItemsMixin, ModuleMixin],
  async mounted() {
    this.moduleId = this.$route.params.id;
    this.cards = await this.getItems(this.moduleId);
    this.module = await this.getModule(this.moduleId);
  },
  methods: {
    async deleteModuleOne(id) {
      await this.deleteModule(id);
      this.$refs.snackbarRef.open();
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.$router.push('/main/modules');
    },
    nextCard() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      }
    },
    prevCard() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  }
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h2 class=" mb-4 text-3xl font-bold">{{ module.title || 'Загрузка...' }}</h2>
    <div>
      <v-btn @click.stop="" class="mr-2">
        <v-icon color="blue">mdi-pen</v-icon>
      </v-btn>
      <v-btn @click.stop="deleteModuleOne(moduleId)">
        <v-icon color="red">mdi-basket</v-icon>
      </v-btn>
    </div>
  </div>

  <h2 class=" mb-16 text-2xl font-bold">Описание модуля: {{ module.description || 'Загрузка...' }}</h2>

  <v-slide-x-transition mode="out-in">
    <div v-if="cards.length" :key="currentIndex" class="flip-card" @click="flipped = !flipped">
      <div class="flip-card-inner" :class="{ flipped }">
        <!-- Front Side -->
        <v-card class="flip-card-front position-absolute" :title="`Карточка №${currentIndex + 1}`">
          <v-card-text class="d-flex justify-center align-center h-64">
            <h2 class="text-5xl font-bold text-center">{{ cards[currentIndex].title }}</h2>
          </v-card-text>
        </v-card>

        <!-- Back Side -->
        <v-card class="flip-card-back">
          <v-card-text class="d-flex flex-column justify-center align-center">
            <h2 class="mb-4 text-3xl font-bold">{{ cards[currentIndex].title }}</h2>
            <div class="mb-4 text-xl">{{ cards[currentIndex].description }}</div>
            <CodeBlock
                class="w-full"
                :code="cards[currentIndex].code"
                :language="selectedLanguage"
            />
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-slide-x-transition>

  <!-- Стрелки -->
  <div class="flex justify-between mt-2">
    <v-btn :disabled="currentIndex === 0" icon @click="prevCard">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <div class="text-center  mb-2" v-if="cards.length">
      Карточка {{ currentIndex + 1 }} из {{ cards.length }}
    </div>
    <v-btn :disabled="currentIndex === cards.length - 1" icon @click="nextCard">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
  <my-snackbar :text="text" :color="color" ref="snackbarRef"/>
</template>

<style>
.flip-card {
  perspective: 1000px;
  width: 100%;
  max-width: 800px;
  height: 500px; /* задаёт фиксированную высоту карточки */
  margin: 0 auto;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%; /* обе стороны должны занимать одинаковую высоту */
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;
}

.flip-card-front {
  z-index: 2;
  transform: rotateY(0deg);
}

.flip-card-back {
  transform: rotateY(180deg);
}

</style>