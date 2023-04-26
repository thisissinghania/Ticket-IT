<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="12">
          <v-col class="pa-0 go-back"
            ><router-link
              class="d-flex align-center"
              :to="`${TICKET_IT}/latest-batches/batch-summary`"
              ><img src="@/assets/ticket-it/images/go-back.svg" alt="go-back" class="mr-3" />
              back</router-link
            ></v-col
          >
          <v-col class="pa-0 subpage-title mt-5">Preview All Tickets</v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="preview_ticket_area pa-3 pa-md-7">
      <v-row>
        <v-col cols="12" sm="12" md="6" class="preview_left">
          <v-col class="shadow_block pa-0">
            <v-col class="pa-md-6">
              <v-col class="pa-0 text-center image mb-5"
                ><img src="@/assets/ticket-it/images/ticket-view.png" alt="ticket-view"
              /></v-col>
              <h3>30 Tickets</h3>
              <h3>30 Sheets Required</h3>
            </v-col>
            <v-col class="pa-md-6 border-top">
              <v-pagination v-model="page" :total-visible="3" :length="15"></v-pagination>
            </v-col>
          </v-col>
        </v-col>

        <v-col cols="12" sm="12" md="6" class="preview_right">
          <VeeForm id="preview-all-ticket" @submit="submit" :validation-schema="validationSchema">
            <v-col class="custom-field pa-0">
              <v-col class="field-type field-stype-select preview-ticket-select pa-0">
                <Field name="ticket" as="select">
                  <option value="" disabled>Select Ticket</option>
                  <option
                    :value="quantityList.name"
                    v-for="(quantityList, i) in setQuantities"
                    :key="i"
                  >
                    {{ quantityList.name }}
                  </option>
                </Field>
              </v-col>
              <ErrorMessage name="ticket" />
            </v-col>
            <v-col class="pa-0">
              <fill-button class="small-font-cta light-blue mt-5">Print</fill-button>
            </v-col>
          </VeeForm>
        </v-col>
      </v-row>
    </v-col>
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import { setQuantities } from '@/core/ticket-it/data/setQuantities'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import { validationSchema } from '@/core/ticket-it/validations/BatchAllTicket.js'

export default defineComponent({
  name: 'batch-summary-all-ticket',
  components: {
    'navigation-bar': NavigationBar,
    'fill-button': FillButton,
    Field,
    VeeForm,
    ErrorMessage
  },
  setup() {
    const page = ref(1)

    const submit = () => {}

    return {
      submit,
      TICKET_IT,
      navigationBar,
      page,
      setQuantities,
      validationSchema
    }
  }
})
</script>
