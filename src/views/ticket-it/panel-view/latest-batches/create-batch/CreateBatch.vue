<template>
  <popup-area :sizeSM="`12`" :sizeMD="`10`" :sizeLG="`5`">
    <template v-slot:modalTitle>
      <h3>Create Batch</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <VeeForm id="new-bacth-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col class="custom-field" cols="12" sm="12" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Batch Name</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="batchName" type="text" placeholder="Enter Batch Name" />
            </v-col>
            <ErrorMessage name="batchName" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="12" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Ticket Start Date</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="ticketStartDate" type="date" placeholder="Select Date" />
            </v-col>
            <ErrorMessage name="ticketStartDate" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="12" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Ticket End Date</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="ticketEndDate" type="date" placeholder="Select Date" />
            </v-col>
            <ErrorMessage name="ticketEndDate" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="12" md="12">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Notes</label></v-col>
            <v-col class="field-type pa-0">
              <Field v-slot="{ field }" name="notes">
                <textarea v-bind="field" rows="4" />
              </Field>
            </v-col>
          </v-col>
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
          </v-col>
        </v-row>
        <v-col class="pa-0 mt-5">
          <button-with-icon class="green-bg"
            ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
            <p>Save</p></button-with-icon
          >
        </v-col>
      </VeeForm>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import Popover from '@/components/ticket-it/modals/AllModals.vue'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import { validationSchema } from '@/core/ticket-it/validations/CreateBatch.js'
import router from '@/router'

export default defineComponent({
  name: 'create-batch',
  components: {
    'popup-area': Popover,
    'button-with-icon': ButtonWithIcon,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup(props, { $emit }) {
    const submit = () => {
      router.push(`${TICKET_IT}/latest-batches/new-batch-publish`)
      $emit('closeModal')
    }

    return {
      validationSchema,
      submit
    }
  }
})
</script>
