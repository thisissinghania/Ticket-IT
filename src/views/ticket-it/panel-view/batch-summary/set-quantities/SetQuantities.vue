<template>
  <popup-area :sizeSM="`12`" :sizeMD="`10`" :sizeLG="`7`">
    <template v-slot:modalTitle>
      <h3>Set Quantities</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <VeeForm id="set-quantity-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col
            class="custom-field"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(quantityList, i) in setQuantities"
            :key="i"
          >
            <v-col class="pa-0 mb-1 field-label bold-label"
              ><label>{{ quantityList.name }}</label></v-col
            >
            <v-col class="field-type pa-0">
              <Field :name="quantityList.fieldName" type="text" placeholder="0" />
            </v-col>
            <ErrorMessage :name="quantityList.fieldName" />
          </v-col>
        </v-row>
        <v-col class="pa-0 mt-5 d-flex justify-end">
          <button-with-icon class="dark-yellow"
            ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
            <p>Set Quantities</p></button-with-icon
          >
        </v-col>
      </VeeForm>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import * as yup from 'yup'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import Popover from '@/components/ticket-it/modals/AllModals.vue'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import { setQuantities } from '@/core/ticket-it/data/setQuantities'

export default defineComponent({
  name: 'create-batch',
  components: {
    'popup-area': Popover,
    'button-with-icon': ButtonWithIcon,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    const validationSchema = yup.object({})

    const submit = () => {}

    return {
      validationSchema,
      setQuantities,
      submit
    }
  }
})
</script>
