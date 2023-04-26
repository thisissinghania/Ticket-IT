<template>
  <popup-area :sizeSM="`12`" :sizeMD="`10`" :sizeLG="`8`">
    <template v-slot:modalTitle>
      <h3>Ticket Data</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <VeeForm id="adhoc-ticket-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col class="custom-field mb-3" cols="12" sm="12" md="12">
            <v-col class="pa-0 mb-1 field-label bold-label"
              ><label>Select Ticket Type</label></v-col
            >
            <v-col class="field-type field-stype-select pa-0">
              <Field name="ticketType" as="select">
                <option value="" disabled>Select</option>
                <option
                  :value="quantityList.name"
                  v-for="(quantityList, i) in setQuantities"
                  :key="i"
                >
                  {{ quantityList.name }}
                </option>
              </Field>
            </v-col>
            <ErrorMessage name="ticketType" />
          </v-col>
          <v-row class="mb-0">
            <!-- form-left -->
            <v-col cols="12" sm="12" md="6">
              <v-row>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field end-search-icon" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"><label>EAN SKU</label></v-col>
                    <v-col class="field-type pa-0">
                      <Field name="eansku" type="text" />
                      <button class="search_icon" type="button">
                        <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
                      </button>
                    </v-col>
                    <ErrorMessage name="eansku" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Ticket Type</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="ticket" type="text" />
                    </v-col>
                    <ErrorMessage name="ticket" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Promo Title</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="promoTitle" type="text" />
                    </v-col>
                    <ErrorMessage name="promoTitle" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"><label>Item Name</label></v-col>
                    <v-col class="field-type pa-0">
                      <Field name="itemName" type="text" />
                    </v-col>
                    <ErrorMessage name="itemName" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Item Description</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="itemDesc" type="text" />
                    </v-col>
                    <ErrorMessage name="itemDesc" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Sale Price</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="salePrice" type="text" />
                    </v-col>
                    <ErrorMessage name="salePrice" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Ordinary price</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="ordinaryPrice" type="text" />
                    </v-col>
                    <ErrorMessage name="ordinaryPrice" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Promo End Date</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="promoEndDate" type="date" />
                    </v-col>
                    <ErrorMessage name="promoEndDate" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Product1 Image</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="product1Image" type="text" />
                    </v-col>
                    <ErrorMessage name="product1Image" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Coo Country</label></v-col
                    >
                    <v-col class="field-type field-stype-select pa-0">
                      <Field name="cooCountry" as="select">
                        <option value="" disabled>Select</option>
                        <option value="Australia">Australia</option>
                      </Field>
                    </v-col>
                    <ErrorMessage name="cooCountry" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>Coo Source</label></v-col
                    >
                    <v-col class="field-type field-stype-select pa-0">
                      <Field name="cooSource" as="select">
                        <option value="" disabled>Select</option>
                        <option value="Product of">Product of</option>
                        <option value="Grown in">Grown in</option>
                        <option value="Packed in">Packed in</option>
                        <option value="Made in">Made in</option>
                      </Field>
                    </v-col>
                    <ErrorMessage name="cooSource" />
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="pt-0 pb-0">
                  <v-col class="custom-field" cols="12">
                    <v-col class="pa-0 mb-1 field-label bold-label"
                      ><label>COO Aus Per Cent</label></v-col
                    >
                    <v-col class="field-type pa-0">
                      <Field name="ausPerCent" type="text" />
                    </v-col>
                    <ErrorMessage name="ausPerCent" />
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
            <!-- form-right -->
            <v-col cols="12" sm="12" md="6">
              <v-col class="pt-0">
                <h3 class="mb-3">Preview</h3>
                <v-col cols="12" class="canvas_area text-center"
                  ><img src="@/assets/ticket-it/images/canvas.png" alt="canvas"
                /></v-col>
              </v-col>
            </v-col>
          </v-row>
        </v-row>
        <v-col class="pa-0 mt-5 d-flex">
          <button-with-icon class="green-bg mr-3"
            ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
            <p>Save</p></button-with-icon
          >
          <button-with-icon
            @click="$emit('printCreateTicketModal'), $emit('closeModal')"
            type="button"
            class="light-blue"
            ><span><img src="@/assets/ticket-it/images/print.svg" /></span>
            <p>Print</p></button-with-icon
          >
        </v-col>
      </VeeForm>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import Popover from '@/components/ticket-it/modals/AllModals.vue'
import { setQuantities } from '@/core/ticket-it/data/setQuantities'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import { validationSchema } from '@/core/ticket-it/validations/CreateTicket.js'

export default defineComponent({
  name: 'create-ticket',
  components: {
    'popup-area': Popover,
    'button-with-icon': ButtonWithIcon,
    VeeForm,
    Field,
    SvgIcon,
    ErrorMessage
  },
  setup() {
    const submit = () => {}

    return {
      validationSchema,
      submit,
      setQuantities,
      mdiMagnify
    }
  }
})
</script>
