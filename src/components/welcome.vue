<template>
  <h3>欢迎光临---{{ msg }}</h3>
  <router-link to="/login">login</router-link>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    defineProps({
      msg: String
    })
  }
})
</script>
