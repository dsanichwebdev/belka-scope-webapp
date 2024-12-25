<template lang="pug">
.auth-buttons
  .flex.justify-between(:class="{ 'expanded-gap': expanded }")
    q-btn(flat :no-caps="expanded" dense @click="$emit('handleLogin', 'google')")
      q-img(:src="'/icons/google.png'" width="32px" height="32px")
      .text-h6.q-ml-sm(v-if="expanded") Google
    q-btn(flat :no-caps="expanded" dense @click="$emit('handleLogin', 'vk')")
      q-img(:src="'/icons/vk.png'" width="32px" height="32px")
      .text-h6.q-ml-sm(v-if="expanded") ВКонтакте
    q-btn(flat :no-caps="expanded" dense @click="$emit('handleLogin', 'yandex')")
      q-img(:src="'/icons/yandex.png'" width="32px" height="32px")
      .text-h6.q-ml-sm(v-if="expanded") Яндекс
    q-btn(flat :no-caps="expanded" dense @click="$emit('handleLogin', 'mailru')")
      q-img(:src="'/icons/mail-ru.webp'" width="32px" height="32px")
      .text-h6.q-ml-sm(v-if="expanded") MailRu
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'AuthButtons',

  props: {
    handleLogin: {
      type: Function as PropType<(service: string) => void>,
      required: true,
    },
    expanded: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {}
  },

  watch: {},

  methods: {},
})
</script>

<style scoped lang="stylus">
.expanded-gap {
  gap: 5px;
}
</style>
