<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="filter-area mt-md-3">
      <v-row class="align-center">
        <v-col class="filter" cols="12" xs="12" sm="12" md="9" lg="8">
          <!-- form start -->
          <VeeForm id="filter-form">
            <v-col class="all-filters">
              <v-row>
                <v-col
                  class="custom-field pa-0 mt-1 mb-1 mr-sm-0 mr-md-3"
                  cols="12"
                  sm="12"
                  md="5"
                  lg="4"
                >
                  <v-col class="field-type field-stype-select pa-0">
                    <Field name="create" @change="openPage($event)" as="select">
                      <option value="" disabled>Select Action</option>
                      <option value="/reports/change-report">Create From Change Report</option>
                      <option value="/latest-batches/create-pos-promotion">
                        Create From POS Promotion
                      </option>
                      <option value="/latest-batches/create-inventory">
                        Create From Inventory
                      </option>
                      <option value="/latest-batches/create-pos-purchase-order">
                        Create From POS Purchase Order
                      </option>
                    </Field>
                  </v-col>
                </v-col>
                <v-col
                  class="custom-field pa-0 mt-1 mb-1 mr-sm-0 mr-md-3"
                  cols="12"
                  sm="12"
                  md="4"
                  lg="3"
                >
                  <v-col class="field-type field-stype-select pa-0">
                    <Field name="batches" as="select">
                      <option value="" disabled>Select Batches</option>
                      <option value="all-batches">All Batches</option>
                      <option value="active-batches">Active Batches</option>
                      <option value="historic-batches">Historic Batches</option>
                    </Field>
                  </v-col>
                </v-col>
                <v-col
                  class="custom-field pa-0 mt-1 mb-1 mr-sm-0 mr-md-3"
                  cols="12"
                  sm="12"
                  md="2"
                  lg="2"
                >
                  <v-col class="field-type field-stype-select pa-0">
                    <Field name="status" as="select">
                      <option value="" disabled>Status</option>
                      <option value="printed">Printed</option>
                      <option value="sent">Sent</option>
                      <option value="unsend">Unsend</option>
                      <option value="expired">Expired</option>
                    </Field>
                  </v-col>
                </v-col>
              </v-row>
            </v-col>
          </VeeForm>
          <!-- form end -->
        </v-col>
        <v-col class="new-batch-cta d-flex justify-md-end" cols="12" xs="12" sm="12" md="3" lg="4"
          ><button-with-icon @click="toggleModal()" class="green-bg"
            ><span><img src="@/assets/ticket-it/images/pencil.svg" /></span>
            <p>Create Batch</p></button-with-icon
          ></v-col
        >
      </v-row>
    </v-col>

    <!-- batch listing start -->
    <v-col class="pt-0 latest-batch-list">
      <v-col
        class="single_batch_list pa-0 mb-5 mt-3 mb-sm-7"
        v-for="(batchList, i) in latestBatches"
        :key="i"
      >
        <latest-batches-data :batchList="batchList" />
      </v-col>
    </v-col>
    <!-- batch listing end -->

    <pagination-list />
    <create-batch v-if="modalStatus" v-on:closeModal="toggleModal" />
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import { latestBatches } from '@/core/ticket-it/data/latestBatches'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import PaginationList from '@/components/ticket-it/pagination/paginationList.vue'
import CreateBatch from '@/views/ticket-it/panel-view/latest-batches/create-batch/CreateBatch.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import LatestBatchesData from '@/views/ticket-it/panel-view/latest-batches/LatestBatchesData.vue'
import router from '@/router'

export default defineComponent({
  name: 'latest-batches',
  components: {
    'navigation-bar': NavigationBar,
    'button-with-icon': ButtonWithIcon,
    'pagination-list': PaginationList,
    'create-batch': CreateBatch,
    'latest-batches-data': LatestBatchesData,
    VeeForm,
    Field
  },
  setup() {
    let modalStatus = ref(false)

    const toggleModal = () => {
      modalStatus.value = !modalStatus.value
    }

    const openPage = (event) => {
      const switchType = event.target.value
      if (switchType == 'create-batch') {
        modalStatus.value = !modalStatus.value
      } else {
        router.push(`${TICKET_IT}${switchType}`)
      }
    }

    return {
      toggleModal,
      navigationBar,
      latestBatches,
      modalStatus,
      TICKET_IT,
      openPage
    }
  }
})
</script>
