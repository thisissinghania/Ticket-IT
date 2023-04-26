<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12">
          <v-col class="pa-0 subpage-title">Create Batch From Retailexpress Promotions</v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="mt-2">
      <v-col class="shadow-block pa-md-5">
        <VeeForm id="create-inventory" @submit="submit" :validation-schema="validationSchema">
          <v-row>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"><label>Select Brand</label></v-col>
              <v-col class="field-type field-stype-select pa-0">
                <Field name="selectBrand" as="select">
                  <option value="" disabled>Select</option>
                  <option :value="brands.value" v-for="(brands, i) in brandList" :key="i">
                    {{ brands.name }}
                  </option>
                </Field>
              </v-col>
              <ErrorMessage name="selectBrand" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"><label>Select Colour</label></v-col>
              <v-col class="field-type field-stype-select pa-0">
                <Field name="colour" as="select">
                  <option value="" disabled>Select</option>
                  <option :value="colour.value" v-for="(colour, i) in colourList" :key="i">
                    {{ colour.name }}
                  </option>
                </Field>
              </v-col>
              <ErrorMessage name="colour" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"><label>Select Season</label></v-col>
              <v-col class="field-type field-stype-select pa-0">
                <Field name="season" as="select">
                  <option value="" disabled>Select</option>
                  <option :value="season.value" v-for="(season, i) in seasonList" :key="i">
                    {{ season.name }}
                  </option>
                </Field>
              </v-col>
              <ErrorMessage name="season" />
            </v-col>
            <v-col class="custom-field" cols="12" sm="6">
              <v-col class="pa-0 mb-1 field-label bold-label"><label>Select Supplier</label></v-col>
              <v-col class="field-type field-stype-select pa-0">
                <Field name="supplier" as="select">
                  <option value="" disabled>Select</option>
                  <option :value="supplier.value" v-for="(supplier, i) in supplierList" :key="i">
                    {{ supplier.name }}
                  </option>
                </Field>
              </v-col>
              <ErrorMessage name="supplier" />
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
import { validationSchema } from '@/core/ticket-it/validations/PosPromotion.js'

export default defineComponent({
  name: 'create-pos-promotion',
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
