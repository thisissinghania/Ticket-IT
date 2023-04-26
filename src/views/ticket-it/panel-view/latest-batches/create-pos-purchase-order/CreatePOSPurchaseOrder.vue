<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12">
          <v-col class="pa-0 subpage-title">PO Search</v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="mt-2">
      <v-col class="shadow-block pa-md-5">
        <VeeForm id="change-report" @submit="submit" :validation-schema="validationSchema">
          <v-row>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"
                ><label>Supplier Invoice Number</label></v-col
              >
              <v-col class="field-type pa-0">
                <Field name="supplierInvoice" type="text" />
              </v-col>
              <ErrorMessage name="supplierInvoice" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"
                ><label>Purchase Order ID</label></v-col
              >
              <v-col class="field-type pa-0">
                <Field name="purchaseOrder" type="text" />
              </v-col>
              <ErrorMessage name="purchaseOrder" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"><label>Date From</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="dateFrom" type="date" />
              </v-col>
              <ErrorMessage name="dateFrom" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"><label>Date To</label></v-col>
              <v-col class="field-type pa-0">
                <Field name="dateTo" type="date" />
              </v-col>
              <ErrorMessage name="dateTo" />
            </v-col>

            <v-col>
              <button-with-icon class="green-bg"
                ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
                <p>Submit</p></button-with-icon
              >
            </v-col>
          </v-row>
        </VeeForm>
      </v-col>
    </v-col>
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import { brandList } from '@/core/ticket-it/data/brandList'
import { seasonList } from '@/core/ticket-it/data/seasonList'
import { supplierList } from '@/core/ticket-it/data/supplierList'
import { colourList } from '@/core/ticket-it/data/colourList'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import { validationSchema } from '@/core/ticket-it/validations/PosPurchase.js'

export default defineComponent({
  name: 'create-pos-purchase-order',
  components: {
    'navigation-bar': NavigationBar,
    'button-with-icon': ButtonWithIcon,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    return {
      navigationBar,
      validationSchema,
      supplierList,
      colourList,
      brandList,
      seasonList
    }
  }
})
</script>
