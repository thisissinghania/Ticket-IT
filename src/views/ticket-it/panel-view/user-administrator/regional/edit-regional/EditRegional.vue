<template>
  <popup-area :sizeSM="`12`" :sizeMD="`8`" :sizeLG="`6`">
    <template v-slot:modalTitle>
      <h3>Edit Account</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>

    <template v-slot:modalContent>
      <VeeForm id="edit-regional" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Email</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="email" type="email" />
            </v-col>
            <ErrorMessage name="email" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>First Name</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="firstName" type="text" />
            </v-col>
            <ErrorMessage name="firstName" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Last Name</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="lastName" type="text" />
            </v-col>
            <ErrorMessage name="lastName" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Phone</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="phone" type="text" />
            </v-col>
            <ErrorMessage name="phone" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Address Line 1</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="address1" type="text" />
            </v-col>
            <ErrorMessage name="address1" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Address Line 2</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="address2" type="text" />
            </v-col>
            <ErrorMessage name="address2" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Group</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="group" type="text" />
            </v-col>
            <ErrorMessage name="group" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Store Category</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="storeCategory" type="text" />
            </v-col>
            <ErrorMessage name="storeCategory" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Region</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="region" type="text" />
            </v-col>
            <ErrorMessage name="region" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Country</label></v-col>
            <v-col class="field-type field-stype-select pa-0">
              <Field name="country" as="select">
                <option value="" disabled>Select</option>
                <option value="Digital Display 3 H">Country name</option>
              </Field>
            </v-col>
            <ErrorMessage name="country" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>State</label></v-col>
            <v-col class="field-type field-stype-select pa-0">
              <Field name="state" as="select">
                <option value="" disabled>Select</option>
                <option value="Digital Display 3 H">State name</option>
              </Field>
            </v-col>
            <ErrorMessage name="state" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Postcode</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="postcode" type="text" />
            </v-col>
            <ErrorMessage name="postcode" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Current Password</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="currentPass" type="text" />
            </v-col>
            <ErrorMessage name="currentPass" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Change Password</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="changePass" type="password" />
            </v-col>
            <ErrorMessage name="changePass" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="6" md="4">
            <v-col class="pa-0 mb-1 field-label bold-label"
              ><label>Confirm New Password</label></v-col
            >
            <v-col class="field-type pa-0">
              <Field name="newPass" type="password" />
            </v-col>
            <ErrorMessage name="newPass" />
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
import { validationSchema } from '@/core/ticket-it/validations/RegionalManager.js'

export default defineComponent({
  name: 'edit-regional',
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
