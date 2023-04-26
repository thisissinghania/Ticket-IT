<template>
  <popup-area :sizeSM="`12`" :sizeMD="`7`" :sizeLG="`4`">
    <template v-slot:modalTitle>
      <h3>Ticket View</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <v-col class="pa-0 text-center"
        ><img src="@/assets/ticket-it/images/ticket-view.png" alt="ticket-view"
      /></v-col>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import Popover from '@/components/ticket-it/modals/AllModals.vue'

export default defineComponent({
  name: 'ticket-view',
  components: {
    'popup-area': Popover
  },
  setup() {
    return {}
  }
})
</script>
