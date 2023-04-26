<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12">
          <v-col class="pa-0 subpage-title">Change Report</v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="mt-2">
      <v-col class="shadow-block pa-md-5">
        <VeeForm id="change-report" @submit="submit" :validation-schema="validationSchema">
          <v-row>
            <!-- left -->
            <v-col cols="12" sm="12" md="6">
              <v-row>
                <v-col class="custom-field" cols="12">
                  <v-col class="pa-0 mb-1 field-label bold-label"
                    ><label>Select Change Report</label></v-col
                  >
                  <v-col class="field-type field-stype-select pa-0">
                    <Field name="selectReport" as="select">
                      <option value="" disabled>Select</option>
                      <option value="All">All</option>
                      <option value="Item Name">Item Name</option>
                      <option value="Item Description">Item Description</option>
                      <option value="Sale Price">Sale Price</option>
                      <option value="Sale Price1">Sale Price1</option>
                      <option value="Sale Price2">Sale Price2</option>
                    </Field>
                  </v-col>
                  <ErrorMessage name="selectReport" />
                </v-col>
                <v-col class="custom-field" cols="12" sm="6">
                  <v-col class="pa-0 mb-1 field-label bold-label"><label>Date From</label></v-col>
                  <v-col class="field-type pa-0">
                    <Field name="dateFrom" type="date" />
                  </v-col>
                  <ErrorMessage name="dateFrom" />
                </v-col>
                <v-col class="custom-field" cols="12" sm="6">
                  <v-col class="pa-0 mb-1 field-label bold-label"><label>Time From</label></v-col>
                  <v-col class="field-type pa-0">
                    <Field name="timeFrom" type="time" />
                  </v-col>
                  <ErrorMessage name="timeFrom" />
                </v-col>
                <v-col class="custom-field" cols="12" sm="6">
                  <v-col class="pa-0 mb-1 field-label bold-label"><label>Date To</label></v-col>
                  <v-col class="field-type pa-0">
                    <Field name="dateTo" type="date" />
                  </v-col>
                  <ErrorMessage name="dateTo" />
                </v-col>
                <v-col class="custom-field" cols="12" sm="6">
                  <v-col class="pa-0 mb-1 field-label bold-label"><label>Time To</label></v-col>
                  <v-col class="field-type pa-0">
                    <Field name="timeTo" type="time" />
                  </v-col>
                  <ErrorMessage name="timeTo" />
                </v-col>
              </v-row>
            </v-col>

            <!-- right -->
            <v-col cols="12" sm="12" md="6">
              <v-row>
                <v-col class="custom-field" cols="12" sm="6">
                  <v-col class="pa-0 mb-1 field-label bold-label"
                    ><label>Select Brand</label></v-col
                  >
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
                  <v-col class="pa-0 mb-1 field-label bold-label"
                    ><label>Select Season</label></v-col
                  >
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
                  <v-col class="pa-0 mb-1 field-label bold-label"
                    ><label>Select Supplier</label></v-col
                  >
                  <v-col class="field-type field-stype-select pa-0">
                    <Field name="supplier" as="select">
                      <option value="" disabled>Select</option>
                      <option
                        :value="supplier.value"
                        v-for="(supplier, i) in supplierList"
                        :key="i"
                      >
                        {{ supplier.name }}
                      </option>
                    </Field>
                  </v-col>
                  <ErrorMessage name="supplier" />
                </v-col>
                <v-col class="custom-field" cols="12" sm="6">
                  <v-col class="pa-0 mb-1 field-label bold-label"
                    ><label>Select Colour</label></v-col
                  >
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
              </v-row>
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
import { validationSchema } from '@/core/ticket-it/validations/ChangeReport.js'
import { colourList } from '@/core/ticket-it/data/colourList'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'

export default defineComponent({
  name: 'change-report',
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
