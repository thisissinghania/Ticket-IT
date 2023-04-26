<template>
  <popup-area :sizeSM="`10`" :sizeMD="`6`" :sizeLG="`4`">
    <template v-slot:modalTitle>
      <h3>Ticket Print</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <VeeForm id="print-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col class="d-flex justify-end">
            <button-with-icon
              @click="$emit('buildingTicketModal'), $emit('closeModal')"
              class="light-blue mr-3"
              ><span><img src="@/assets/ticket-it/images/print.svg" /></span>
              <p>Print</p></button-with-icon
            >
          </v-col>
          <v-col class="custom-field" cols="12">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Quantity</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="quantity" type="text" placeholder="0" />
            </v-col>
            <ErrorMessage name="quantity" />
          </v-col>
          <v-col cols="12">
            <h3 class="mb-3">Preview</h3>
            <v-col cols="12" class="canvas_area text-center"
              ><img src="@/assets/ticket-it/images/created-ticket.png" alt="created-ticket"
            /></v-col>
          </v-col>
        </v-row>
      </VeeForm>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'
import Popover from '@/components/ticket-it/modals/AllModals.vue'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import { validationSchema } from '@/core/ticket-it/validations/TicketPrint.js'

export default defineComponent({
  name: 'print-create-ticket',
  components: {
    'popup-area': Popover,
    'button-with-icon': ButtonWithIcon,
    VeeForm,
    Field
  },
  setup() {
    return {
      validationSchema
    }
  }
})
</script>
