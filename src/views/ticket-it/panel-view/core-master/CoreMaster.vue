<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12">
          <v-col class="pa-0 subpage-title">Core Tickets Details</v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="pa-md-5 core_master">
      <v-col class="shadow_block">
        <v-row>
          <!-- left part -->
          <v-col cols="12" sm="12" md="6" class="pa-md-7 border-bottom">
            <ul class="master_detail">
              <li>
                <span>Description</span>
                <p>Master Core</p>
              </li>
              <li>
                <span>Date Created</span>
                <p>15/03/23 16:33 PM</p>
              </li>
              <li>
                <span>File Name</span>
                <p>Advertising Product Name Glossary updated 200010(3).xlsx</p>
              </li>
              <li>
                <span>Status</span>
                <p>Uptodate</p>
              </li>
              <li>
                <span>Update type</span>
                <p>Replace</p>
              </li>
            </ul>
          </v-col>

          <!-- right part -->
          <v-col cols="12" sm="12" md="6" class="pa-md-7 border-left border-bottom">
            <v-col class="pa-0 subpage-title">Core Setting</v-col>
            <v-col class="pa-0 mb-3 mt-1 content"
              ><p>You can change the core update type to:</p></v-col
            >
            <ul class="master_detail mb-5">
              <li>
                <span>1: Updates:</span>
                <p>
                  Updates existing product data and new products if required. If a product is in the
                  database that doesn't exist in the imported excel file, it isn't delete from the
                  system.
                </p>
              </li>
              <li>
                <span>2: Replace:</span>
                <p>All product data is cleared and all product are imported from the file.</p>
              </li>
            </ul>
            <fill-button class="small-font-cta green-bg">Change to update</fill-button>
          </v-col>

          <v-col cols="12" class="pa-md-5">
            <v-col class="pa-0 subpage-title mb-3">Upload Core Tickets</v-col>
            <VeeForm id="core-form">
              <v-col class="custom-field pa-0" cols="12">
                <v-col class="field-type pa-0">
                  <Field name="description" type="text" placeholder="Description" />
                </v-col>
              </v-col>
              <v-col class="custom-field rounded green-bg mt-4" cols="12">
                <Field name="file" type="file" />
              </v-col>
            </VeeForm>
          </v-col>
        </v-row>
      </v-col>
    </v-col>
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'

export default defineComponent({
  name: 'core-master',
  components: {
    'navigation-bar': NavigationBar,
    'fill-button': FillButton,
    VeeForm,
    Field
  },
  setup() {
    return {
      navigationBar
    }
  }
})
</script>
