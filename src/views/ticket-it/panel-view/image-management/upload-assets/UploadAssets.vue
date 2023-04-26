<template>
  <popup-area :sizeSM="`12`" :sizeMD="`8`" :sizeLG="`5`">
    <template v-slot:modalTitle>
      <h3>Upload Asset</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <VeeForm id="new-bacth-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col class="custom-field" cols="12" sm="12" md="12">
            <v-col class="drop-image pa-0">
              <label class="d-flex flex-wrap pt-6 pb-6">
                <Field name="file" type="file" />
                <v-col cols="12" class="pa-0 text-center mb-2"
                  ><img src="@/assets/ticket-it/images/upload.svg" alt="upload"
                /></v-col>
                <v-col cols="12" class="pa-0 text-center upload-label mb-2"
                  >Drag & Drop to Upload File <br />
                  OR</v-col
                >
                <v-col cols="12" class="pa-0 d-flex justify-center"
                  ><span class="blank_cta">Browse File</span></v-col
                >
              </label>
            </v-col>
            <ErrorMessage name="file" />
          </v-col>
        </v-row>
        <v-col class="pa-0 mt-5">
          <fill-button class="green-bg small-font-cta">Upload</fill-button>
        </v-col>
      </VeeForm>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import Popover from '@/components/ticket-it/modals/AllModals.vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import { validationSchema } from '@/core/ticket-it/validations/ImageManagement.js'

export default defineComponent({
  name: 'upload-assets',
  components: {
    'popup-area': Popover,
    'fill-button': FillButton,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    const submit = () => {}

    return {
      validationSchema,
      submit
    }
  }
})
</script>
