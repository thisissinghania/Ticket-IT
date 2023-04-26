<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12" sm="6" md="6">
          <v-col class="pa-0 subpage-title">Batches Report</v-col>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="d-flex flex-wrap justify-sm-end">
          <button-with-icon class="dark-yellow ma-1"
            ><span><img src="@/assets/ticket-it/images/export-icon.svg" /></span>
            <p>Export</p></button-with-icon
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col class="filter-area mt-md-3">
      <!-- form start -->
      <VeeForm id="filter-form" @submit="submit" :validation-schema="validationSchema">
        <v-row>
          <v-col class="custom-field" cols="12" sm="4" md="3" lg="2">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>Report</label></v-col>
            <v-col class="field-type field-stype-select pa-0">
              <Field name="report" as="select">
                <option value="" disabled>Select Report</option>
                <option value="Printed batches">Printed batches</option>
                <option value="User Activity">User Activity</option>
              </Field>
            </v-col>
            <ErrorMessage name="report" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="4" md="2" lg="2">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>From</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="fromDate" type="date" />
            </v-col>
            <ErrorMessage name="fromDate" />
          </v-col>
          <v-col class="custom-field" cols="12" sm="4" md="2" lg="2">
            <v-col class="pa-0 mb-1 field-label bold-label"><label>To</label></v-col>
            <v-col class="field-type pa-0">
              <Field name="toDate" type="date" />
            </v-col>
            <ErrorMessage name="toDate" />
          </v-col>
          <v-col class="custom-field mt-md-6" cols="12" sm="4" md="2" lg="2">
            <button-with-icon class="green-bg"
              ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
              <p>Submit</p></button-with-icon
            >
          </v-col>
        </v-row>
      </VeeForm>
      <!-- form end -->
    </v-col>

    <v-col class="table-data">
      <table-structure>
        <template v-slot:thead>
          <tr>
            <th v-for="(tableHeadings, i) in printedReport" :key="i">
              <v-col class="pa-0 d-flex align-center"> {{ tableHeadings.name }}</v-col>
            </th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tbody>
            <tr v-for="(tableData, i) in printedReportData" :key="i">
              <td class="pt-4 pb-4">{{ tableData.publishDate }}</td>
              <td class="pt-4 pb-4">{{ tableData.nameOfBatch }}</td>
              <td class="pt-4 pb-4">{{ tableData.promoStartDate }}</td>
              <td class="pt-4 pb-4">{{ tableData.printed }}</td>
              <td class="pt-4 pb-4">{{ tableData.nonPrinted }}</td>
              <td class="pt-4 pb-4">{{ tableData.batch }}</td>
            </tr>
          </tbody>
        </template>
      </table-structure>
    </v-col>

    <pagination-list />
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import { printedReport } from '@/core/ticket-it/data/printedReport'
import { printedReportData } from '@/core/ticket-it/data/printReportData'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import TableStructure from '@/components/ticket-it/table/TableStructure.vue'
import PaginationList from '@/components/ticket-it/pagination/paginationList.vue'
import { validationSchema } from '@/core/ticket-it/validations/BatchesReport.js'

export default defineComponent({
  name: 'batches-report',
  components: {
    'navigation-bar': NavigationBar,
    'button-with-icon': ButtonWithIcon,
    'table-structure': TableStructure,
    'pagination-list': PaginationList,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    return {
      navigationBar,
      printedReport,
      validationSchema,
      printedReportData
    }
  }
})
</script>
