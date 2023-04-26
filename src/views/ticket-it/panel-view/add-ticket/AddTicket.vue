<template>
  <v-col class="pa-0">
    <v-col class="filter-area pt-md-5 pb-md-5">
      <v-row class="align-center">
        <v-col class="filter" cols="12" xs="12" sm="12" md="9" lg="8">
          <!-- form start -->
          <VeeForm id="filter-form">
            <v-col class="all-filters">
              <v-row>
                <v-col
                  class="custom-field search-field pa-0 mt-1 mb-1 mr-sm-0 mr-md-3"
                  cols="12"
                  sm="12"
                  md="5"
                  lg="4"
                >
                  <v-col class="field-type pa-0">
                    <Field name="search" type="text" placeholder="Search Filter" />
                    <button class="search_icon" type="button">
                      <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
                    </button>
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
                      <option value="expired">expired</option>
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
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col v-if="createBatchStatus == false">
      <v-col class="no-batch pa-5 text-center">
        <p><img src="@/assets/ticket-it/images/exclamation.svg" /></p>
        <p>There are no batches under current category.</p>
      </v-col>
    </v-col>

    <!-- batch listing start -->
    <v-col class="pt-0 latest-batch-list" v-if="createBatchStatus == true">
      <v-col
        class="single_batch_list pa-0 mb-5 mt-3 mb-sm-7"
        v-for="(batchList, i) in addTicketList"
        :key="i"
      >
        <add-ticket-data :batchList="batchList" />
      </v-col>
    </v-col>
    <!-- batch listing end -->

    <create-batch v-if="modalStatus" v-on:closeModal="toggleModal" v-on:createBatch="createBatch" />
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'
import { Form as VeeForm, Field } from 'vee-validate'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import CreateBatch from '@/views/ticket-it/panel-view/add-ticket/create-batch/CreateBatch.vue'
import { addTicketList } from '@/core/ticket-it/data/addTicketList'
import AddTicketData from '@/views/ticket-it/panel-view/add-ticket/AddTicketData.vue'

export default defineComponent({
  name: 'add-ticket',
  components: {
    'create-batch': CreateBatch,
    'button-with-icon': ButtonWithIcon,
    'add-ticket-data': AddTicketData,
    VeeForm,
    Field,
    SvgIcon
  },
  setup() {
    let modalStatus = ref(false)
    let createBatchStatus = ref(false)

    const toggleModal = () => {
      modalStatus.value = !modalStatus.value
    }
    const createBatch = () => {
      createBatchStatus.value = !createBatchStatus.value
    }

    return {
      toggleModal,
      modalStatus,
      mdiMagnify,
      addTicketList,
      createBatchStatus,
      createBatch
    }
  }
})
</script>
