<template>
  <pre><code ref="codeEl" class="language-java">{{ code }}</code></pre>
</template>

<script setup>
import Prism from 'prismjs'
import 'prismjs/components/prism-java' // обязательно!
import {onMounted, ref, watch, nextTick} from 'vue'

const props = defineProps({
  code: String
})

const codeEl = ref(null)

const highlight = async () => {
  await nextTick() // дождаться, пока DOM обновится
  if (codeEl.value) {
    Prism.highlightElement(codeEl.value)
  }
}

onMounted(highlight)
watch(() => props.code, highlight)
</script>

<style scoped>
pre {
  background: #2d2d2d;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}
</style>
