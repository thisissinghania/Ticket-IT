<template>
  <v-container fluid class="register-page">
    <v-col no-gutters class="register-middle-area pa-0">
      <v-col class="logo text-center pa-5 pb-0"
        ><img src="@/assets/ticket-it/images/logo.png" alt="logo"
      /></v-col>
      <v-col class="headline text-center pb-0">Create New Account</v-col>
      <v-col class="subline text-center pt-0">Register to continue</v-col>

      <v-col class="pa-md-6">
        <VeeForm id="register-form" @submit="submit" :validation-schema="validationSchema">
          <v-row>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>First Name</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="firstName" type="text" />
              </v-col>
              <ErrorMessage name="firstName" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Last Name</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="lastName" type="text" />
              </v-col>
              <ErrorMessage name="lastName" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Email</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="email" type="text" />
              </v-col>
              <ErrorMessage name="email" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Phone</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="phone" type="text" />
              </v-col>
              <ErrorMessage name="phone" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Address Line 1</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="address1" type="text" />
              </v-col>
              <ErrorMessage name="address1" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Address Line 2</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="address2" type="text" />
              </v-col>
              <ErrorMessage name="address2" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Password</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="password" type="password" />
              </v-col>
              <ErrorMessage name="password" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Confirm Password</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="confirmPass" type="password" />
              </v-col>
              <ErrorMessage name="confirmPass" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>Region</label></v-col>
              <v-col class="field-type field-stype-select pa-0">
                <Field name="region" as="select">
                  <option value="" disabled>Select</option>
                  <option value="nsw">NSW</option>
                  <option value="qld">QLD</option>
                  <option value="sa">SA</option>
                  <option value="tas">TAS</option>
                  <option value="vic">VIC</option>
                </Field>
              </v-col>
              <ErrorMessage name="region" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label"><label>POS Provider</label></v-col>
              <v-col class="field-type field-stype-select pa-0">
                <Field @change="posProvider($event)" name="posProvider" as="select">
                  <option value="" disabled>Select</option>
                  <option value="retailExpress">Retail Express</option>
                  <option value="vend">Vend</option>
                  <option value="shopFront">Shop Front</option>
                  <option value="dear">Dear</option>
                  <option value="netsuite">Netsuite</option>
                </Field>
              </v-col>
              <ErrorMessage name="posProvider" />
            </v-col>
            <v-col
              class="custom-field"
              cols="12"
              sm="6"
              v-for="(allInputs, i) in filterObject[0]?.value"
              :key="i"
            >
              <v-col class="pa-0 mb-1 field-label"
                ><label>{{ allInputs.label }}</label></v-col
              >
              <v-col class="field-type pa-0">
                <Field :name="allInputs.name" type="text" />
              </v-col>
              <ErrorMessage :name="allInputs.name" />
            </v-col>

            <v-col cols="12" sm="12" class="regiter_footer mt-5">
              <v-col class="mb-3 pa-0 mx-auto" sm="5"
                ><fill-button class="w-100">Sign Up</fill-button></v-col
              >
              <v-col class="pa-0 already_account text-center"
                >Already have an account?<router-link :to="`${TICKET_IT}/login`" class="ml-2"
                  >Login</router-link
                ></v-col
              >
            </v-col>
          </v-row>
        </VeeForm>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import { validationSchema } from '@/core/ticket-it/validations/Register.js'
import { registerInputs } from '@/core/ticket-it/data/registerInputs.js'
import router from '@/router'

export default defineComponent({
  name: 'register-page',
  components: {
    'fill-button': FillButton,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    let filterObject = ref([])

    const posProvider = (event) => {
      const selectedvalue = event.target.value.toLowerCase()
      filterObject.value = registerInputs.filter(
        (item) => item.label.toLowerCase() == selectedvalue
      )
    }

    const submit = () => {
      router.push(`${TICKET_IT}/login`)
    }

    return {
      submit,
      validationSchema,
      TICKET_IT,
      registerInputs,
      posProvider,
      filterObject
    }
  }
})
</script>
