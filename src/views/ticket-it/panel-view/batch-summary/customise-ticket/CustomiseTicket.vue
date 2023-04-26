<template>
  <popup-area :sizeSM="`12`" :sizeMD="`8`" :sizeLG="`6`">
    <template v-slot:modalTitle>
      <h3>Customise Ticket</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <VeeForm id="customise-ticket-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <!-- left-part -->
          <v-col cols="12" sm="6">
            <v-row>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>EAN SKU</label></v-col>
                <v-col class="field-type pa-0">
                  <Field name="skuNumber" type="text" />
                </v-col>
                <ErrorMessage name="skuNumber" />
              </v-col>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Item Name</label></v-col>
                <v-col class="field-type pa-0">
                  <Field v-slot="{ field }" name="itemName">
                    <textarea v-bind="field" rows="3" />
                  </Field>
                </v-col>
                <ErrorMessage name="itemName" />
              </v-col>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Sale Price</label></v-col>
                <v-col class="field-type pa-0">
                  <Field name="salePrice" type="text" />
                </v-col>
                <ErrorMessage name="salePrice" />
              </v-col>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"
                  ><label>Ordinary Price</label></v-col
                >
                <v-col class="field-type pa-0">
                  <Field name="ordinaryPrice" type="text" />
                </v-col>
                <ErrorMessage name="ordinaryPrice" />
              </v-col>
            </v-row>
          </v-col>
          <!-- right-part -->
          <v-col cols="12" sm="6">
            <v-row>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Preview</label></v-col>
                <v-col class="field-type field-stype-select pa-0">
                  <Field name="preview" as="select">
                    <option value="" disabled>Select</option>
                    <option value="Digital Display 3 H">Digital Display 3 H</option>
                    <option value="Digital Display H">Digital Display H</option>
                    <option value="Digital Display V">Digital Display V</option>
                    <option value="Everyday 210x35">Everyday 210x35</option>
                    <option value="Promo 210x35">Promo 210x35</option>
                    <option value="Everyday 70X35">Everyday 70X35</option>
                    <option value="Promo 70X35">Promo 70X35</option>
                    <option value="Everyday 35X35">Everyday 35X35</option>
                    <option value="Promo 35X35">Promo 35X35</option>
                    <option value="Everyday 8UP">Everyday 8UP</option>
                    <option value="Everyday 2UP">Everyday 2UP</option>
                    <option value="Promo 1UP">Promo 1UP</option>
                    <option value="Promo 2UP">Promo 2UP</option>
                    <option value="Promo 8UP">Promo 8UP</option>
                    <option value="Everyday 1UP">Everyday 1UP</option>
                    <option value="Digital Display 1 H">Digital Display 1 H</option>
                    <option value="Digital Display 2 H">Digital Display 2 H</option>
                  </Field>
                </v-col>
                <ErrorMessage name="preview" />
              </v-col>
              <v-col class="custom-field" cols="12">
                <v-col class="preview_area pa-5"
                  ><img src="@/assets/ticket-it/images/ticket-view.png" alt="ticket-view"
                /></v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-col class="pa-0 mt-5">
          <button-with-icon class="green-bg"
            ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
            <p>Save Changes</p></button-with-icon
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
import { validationSchema } from '@/core/ticket-it/validations/CustomiseTicket.js'

export default defineComponent({
  name: 'customize-ticket',
  components: {
    'popup-area': Popover,
    'button-with-icon': ButtonWithIcon,
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
