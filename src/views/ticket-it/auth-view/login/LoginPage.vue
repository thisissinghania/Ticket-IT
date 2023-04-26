<template>
  <v-container fluid class="login-page">
    <v-col no-gutters class="login-middle-area pa-0">
      <v-row no-gutters class="login-divider">
        <v-col cols="12" sm="12" md="6" lg="7" class="left-login-part pa-5 pa-lg-10">
          <v-col class="logo pa-0 mb-0 mb-md-10"
            ><img src="@/assets/ticket-it/images/logo.png" alt="logo"
          /></v-col>
          <v-col class="headline pa-0 pt-8">The ticketing solution that ticks all the boxes</v-col>
          <v-col class="content pa-0 mt-3"
            >In-store tickets are critical as part of the path to purchase. In any retail
            transaction, communicating accurate pricing, savings, product details and benefits can
            be the difference between getting a profitable sale and not getting a sale at
            all.</v-col
          >
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="5" class="right-login-part pa-5 pa-lg-10">
          <v-col class="headline pa-0 mt-0 mt-md-10">Welcome back!</v-col>
          <v-col class="subline pa-0 mb-10">Login to continue</v-col>
          <v-col class="form-area pa-0">
            <!-- form start -->
            <VeeForm id="login-form" @submit="submit" :validation-schema="validationSchema">
              <v-col class="pa-0 custom-field mb-5">
                <v-col class="pa-0 mb-1 field-label"><label>Username/Email</label></v-col>
                <v-col class="field-type pa-0">
                  <Field name="email" type="email" placeholder="Enter your username/Email" />
                </v-col>
                <ErrorMessage name="email" />
              </v-col>
              <v-col class="pa-0 custom-field">
                <v-col class="pa-0 mb-1 field-label"><label>Password</label></v-col>
                <v-col class="field-type pa-0">
                  <Field name="password" type="password" placeholder="Enter your password" />
                </v-col>
                <ErrorMessage name="password" />
              </v-col>
              <v-col class="pa-0">
                <v-row no-gutters>
                  <v-col sm="6" md="6" class="mt-3 mb-5 remember-me">
                    <input type="checkbox" />
                    Remember me
                  </v-col>
                  <v-col sm="6" md="6" class="mt-3 mb-5 forgot-password"
                    ><router-link to="#">Forgot Password</router-link></v-col
                  >
                </v-row>
              </v-col>
              <fill-button class="mt-5 w-100 mb-0">Sign In</fill-button>
              <v-col class="mb-md-10 forgot-password text-center"
                >Don't have an account?<router-link :to="`${TICKET_IT}/register`" class="ml-2"
                  >Register</router-link
                ></v-col
              >
            </VeeForm>
            <!-- form end -->
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import { validationSchema } from '@/core/ticket-it/validations/Login.js'
import router from '@/router'

export default defineComponent({
  name: 'login-page',
  components: {
    'fill-button': FillButton,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    const submit = () => {
      router.push(`${TICKET_IT}/latest-batches`)
    }

    return {
      submit,
      validationSchema,
      TICKET_IT
    }
  }
})
</script>
