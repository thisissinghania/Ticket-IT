<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="6">
          <v-col class="pa-0 subpage-title">Adhoc Tickets</v-col>
        </v-col>
        <v-col cols="12" sm="12" md="6" class="d-flex flex-wrap justify-md-end">
          <fill-button class="small-font-cta light-blue ma-1">Show Zero Quantities</fill-button>
          <router-link
            :to="`${TICKET_IT}/adhoc-tickets/preview-all-ticket`"
            class="custom_fill_cta small-font-cta dark-blue ma-1"
            >Preview All Tickets</router-link
          >
          <button-with-icon @click="createAdhocModal()" class="green-bg ma-1"
            ><span><img src="@/assets/ticket-it/images/pencil.svg" /></span>
            <p>Create Ticket</p></button-with-icon
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col class="search-and-filter pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="6">
          <VeeForm id="search-form">
            <v-row>
              <v-col class="custom-field search-field" cols="10" sm="10" md="6" lg="5">
                <v-col class="field-type pa-0">
                  <Field name="search" type="text" placeholder="Search" />
                  <button class="search_icon" type="button">
                    <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
                  </button>
                </v-col>
              </v-col>
              <v-col cols="2" sm="2" md="6" lg="7" class="filter_button pl-0"
                ><button type="button" @click="showFilter()">
                  <img src="@/assets/ticket-it/images/filter.svg" alt="filter" /></button
              ></v-col>
            </v-row>
          </VeeForm>
        </v-col>

        <v-col cols="12" sm="12" md="6" class="d-flex flex-wrap justify-md-end">
          <button-with-icon class="dark-primary ma-1"
            ><span><img src="@/assets/ticket-it/images/del.svg" /></span>
            <p>Delete</p></button-with-icon
          >
          <button-with-icon @click="ticketPrintToggleModal()" class="light-blue ma-1"
            ><span><img src="@/assets/ticket-it/images/print.svg" /></span>
            <p>Print</p></button-with-icon
          >
          <button-with-icon @click="quantityToggleModal()" class="dark-yellow ma-1"
            ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
            <p>Set Quantities</p></button-with-icon
          >
        </v-col>

        <v-col cols="12" v-if="showFilterStatus">
          <VeeForm id="search-filter-form">
            <v-col class="table_filter">
              <v-row>
                <v-col cols="12 font-weight-bold pb-0">Each by</v-col>
                <v-col cols="12" class="d-flex flex-wrap pt-0">
                  <label class="table_filter_check mr-4 mr-sm-10 mt-3">
                    <input type="checkbox" class="mr-2" />
                    Each
                  </label>
                  <label class="table_filter_check mr-4 mr-sm-10 mt-3">
                    <input type="checkbox" class="mr-2" />
                    6pk
                  </label>
                  <label class="table_filter_check mr-4 mr-sm-10 mt-3">
                    <input type="checkbox" class="mr-2" />
                    Each by 1
                  </label>
                  <label class="table_filter_check mr-4 mr-sm-10 mt-3">
                    <input type="checkbox" class="mr-2" />
                    24 Pack
                  </label>
                  <label class="table_filter_check mr-4 mr-sm-10 mt-3">
                    <input type="checkbox" class="mr-2" />
                    6 Pack
                  </label>
                </v-col>
              </v-row>
            </v-col>
          </VeeForm>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="table-data">
      <table-structure>
        <template v-slot:thead>
          <tr>
            <th></th>
            <th v-for="(tableHeadings, i) in tableAdhocTitle" :key="i">
              <v-col class="pa-0 d-flex align-center"
                ><v-col-auto
                  class="pa-0 w-auto custom_check mr-2"
                  v-if="tableHeadings.check == true"
                  ><input
                    type="checkbox"
                    :name="`table${tableRow?.id}`"
                    :checked="checkParentVal"
                    @change="onChangeParentVal()"
                /></v-col-auto>
                {{ tableHeadings.name }}</v-col
              >
            </th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tbody v-for="(tableData, i) in tableAdhocData" :key="i">
            <adhoc-table
              :tableData="tableData"
              :ticketQuantity="ticketQuantity"
              v-on:editModal="createAdhocModal"
            />
          </tbody>
        </template>
      </table-structure>
    </v-col>

    <pagination-list />
    <set-quantity v-if="quantityModalStatus" v-on:closeModal="quantityToggleModal" />
    <ticket-print v-if="printModalStatus" v-on:closeModal="ticketPrintToggleModal" />
    <create-ticket
      v-if="createAdhocModalStatus"
      v-on:closeModal="createAdhocModal"
      v-on:printCreateTicketModal="printCreateTicketModal"
    />
    <print-create-ticket
      v-if="printCreateTicketStatus"
      v-on:closeModal="printCreateTicketModal"
      v-on:buildingTicketModal="buildingTicketModal"
    />
    <building-ticket v-if="buildingTicketStatus" v-on:closeModal="buildingTicketModal" />
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { Form as VeeForm, Field } from 'vee-validate'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import { tableAdhocTitle } from '@/core/ticket-it/data/tableAdhocTitle.js'
import { tableAdhocData } from '@/core/ticket-it/data/tableAdhocData.js'
import { ticketQuantity } from '@/core/ticket-it/data/ticketQuantities.js'
import PaginationList from '@/components/ticket-it/pagination/paginationList.vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import TableStructure from '@/components/ticket-it/table/TableStructure.vue'
import AdhocTable from '@/views/ticket-it/panel-view/adhoc-tickets/AdhocTable.vue'
import SetQuantity from '@/views/ticket-it/panel-view/adhoc-tickets/set-quantities/SetQuantities.vue'
import TicketPrint from '@/views/ticket-it/panel-view/adhoc-tickets/ticket-print/TicketPrint.vue'
import CreateTicket from '@/views/ticket-it/panel-view/adhoc-tickets/create-ticket/CreateTicket.vue'
import PrintCreateTicket from '@/views/ticket-it/panel-view/adhoc-tickets/print-create-ticket/PrintCreateTicket.vue'
import BuildingTicket from '@/views/ticket-it/panel-view/adhoc-tickets/building-ticket/BuildingTicket.vue'

export default defineComponent({
  name: 'adhoc-tickets',
  components: {
    'navigation-bar': NavigationBar,
    'fill-button': FillButton,
    'button-with-icon': ButtonWithIcon,
    'table-structure': TableStructure,
    'pagination-list': PaginationList,
    'adhoc-table': AdhocTable,
    'set-quantity': SetQuantity,
    'ticket-print': TicketPrint,
    'create-ticket': CreateTicket,
    'print-create-ticket': PrintCreateTicket,
    'building-ticket': BuildingTicket,
    VeeForm,
    Field,
    SvgIcon
  },
  setup() {
    let checkParentVal = ref(false)
    let quantityModalStatus = ref(false)
    let printModalStatus = ref(false)
    let createAdhocModalStatus = ref(false)
    let printCreateTicketStatus = ref(false)
    let buildingTicketStatus = ref(false)
    let showFilterStatus = ref(false)

    const showFilter = () => {
      showFilterStatus.value = !showFilterStatus.value
    }
    const buildingTicketModal = () => {
      buildingTicketStatus.value = !buildingTicketStatus.value
    }
    const printCreateTicketModal = () => {
      printCreateTicketStatus.value = !printCreateTicketStatus.value
    }
    const quantityToggleModal = () => {
      quantityModalStatus.value = !quantityModalStatus.value
    }
    const ticketPrintToggleModal = () => {
      printModalStatus.value = !printModalStatus.value
    }
    const createAdhocModal = () => {
      createAdhocModalStatus.value = !createAdhocModalStatus.value
    }

    const onChangeParentVal = () => {
      checkParentVal.value = !checkParentVal.value
    }

    return {
      navigationBar,
      tableAdhocTitle,
      tableAdhocData,
      ticketQuantity,
      TICKET_IT,
      mdiMagnify,
      onChangeParentVal,
      checkParentVal,
      quantityToggleModal,
      quantityModalStatus,
      ticketPrintToggleModal,
      printModalStatus,
      createAdhocModal,
      createAdhocModalStatus,
      printCreateTicketModal,
      printCreateTicketStatus,
      buildingTicketModal,
      buildingTicketStatus,
      showFilter,
      showFilterStatus
    }
  }
})
</script>
