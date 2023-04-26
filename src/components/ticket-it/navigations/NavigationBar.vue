<template>
  <v-col class="pa-0 navigation-bar">
    <ul>
      <li v-for="(navigation, i) in navData" :key="i">
        <router-link :to="`${TICKET_IT}/${navigation?.link}`">{{ navigation?.name }}</router-link>
      </li>
    </ul>
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'

export default defineComponent({
  name: 'navigation-bar',
  props: {
    navigationBar: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    let navData = ref(props.navigationBar)

    return {
      navData,
      TICKET_IT
    }
  }
})
</script>
