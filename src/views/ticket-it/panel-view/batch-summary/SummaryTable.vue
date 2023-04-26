<template>
  <tr :class="checkVal == true ? 'checked_row' : ''">
    <td>
      <button
        class="table_drop_icon"
        :class="toggleStatus == true ? 'open-data' : ''"
        @click="toggleTable()"
      >
        <img src="@/assets/ticket-it/images/table-arrow.svg" />
      </button>
    </td>
    <td>
      <v-col class="pa-0 d-flex align-center justify-start"
        ><v-col-auto class="pa-0 w-auto custom_check mr-2"
          ><input
            type="checkbox"
            :name="`table${tableRow?.id}`"
            :checked="checkVal"
            @change="onChangeVal()"
        /></v-col-auto>
        {{ tableRow.sku }}</v-col
      >
    </td>
    <td>{{ tableRow.itemName }}</td>
    <td>{{ tableRow.description }}</td>
    <td>{{ tableRow.summary }}</td>
    <td>
      <v-col class="table_buttons pa-0 d-flex align-center">
        <fill-button class="small-font-cta fixed-width ma-1 pa-3"
          ><img src="@/assets/ticket-it/images/del.svg"
        /></fill-button>
        <label class="switch_cta ma-1">
          <input type="checkbox" />
          <span class="switch-check"></span>
        </label>
      </v-col>
    </td>
  </tr>
  <!--eslint-disable-->
  <tr v-if="toggleStatus" :class="checkVal == true ? 'checked_row_child': ''">
    <td colspan="6" class="pa-0">
      <v-col class="sub-table-data">
        <v-row>
          <v-col cols="12" class="single-title pb-0">Ticket Quantities:</v-col>
          <v-col
            cols="4"
            sm="4"
            md="4"
            lg="3"
            class="single-sub-data pa-6"
            v-for="(quantityTicket, index) in ticketData"
            :key="index"
          >
            <v-row class="d-flex align-center">
              <v-col cols="12" sm="6" class="text-black">{{ quantityTicket.name }}</v-col>
              <v-col cols="12" sm="6">
                <v-col class="custom-field pa-0">
                  <v-col class="field-type pa-0">
                    <Field name="ticket" type="text" />
                  </v-col>
                </v-col>
              </v-col>
              <v-col cols="12" class="d-flex">
                <fill-button @click="ticketCustomiseModal()" class="small-font-cta fixed-width light-blue mr-2 pa-3"
                  ><img src="@/assets/ticket-it/images/pencil.svg"
                /></fill-button>
                <fill-button @click="ticketViewModal()" class="small-font-cta fixed-width mr-2 pa-3"
                  ><img src="@/assets/ticket-it/images/zoom-magnify.svg"
                /></fill-button>
                <fill-button class="small-font-cta dark-blue fixed-width mr-2 pa-3"
                  ><img src="@/assets/ticket-it/images/print.svg"
                /></fill-button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </td>
  </tr>
  <ticket-view v-if="ticketViewStatus" v-on:closeModal="ticketViewModal" />
  <customise-ticket v-if="ticketCustomiseStatus" v-on:closeModal="ticketCustomiseModal" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import { Field } from 'vee-validate'
import TicketView from '@/views/ticket-it/panel-view/batch-summary/ticket-view/TicketView.vue'
import CustomiseTicket from '@/views/ticket-it/panel-view/batch-summary/customise-ticket/CustomiseTicket.vue'

export default defineComponent({
  name: 'summary-table',
  components: {
    'fill-button': FillButton,
    'ticket-view': TicketView,
    'customise-ticket': CustomiseTicket,
    Field
  },
  props: {
    tableData: {
      type: Array,
      required: false
    },
    ticketQuantity: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    const tableRow = ref(props.tableData)
    const ticketData = ref(props.ticketQuantity)
    let checkVal = ref(false)
    let toggleStatus = ref(false)
    let ticketViewStatus = ref(false)
    let ticketCustomiseStatus = ref(false)

    const ticketViewModal = () => {
      ticketViewStatus.value = !ticketViewStatus.value
    }
    const ticketCustomiseModal = () => {
      ticketCustomiseStatus.value = !ticketCustomiseStatus.value
    }
    const toggleTable = () => {
      toggleStatus.value = !toggleStatus.value
    }

    const onChangeVal = () => {
      checkVal.value = !checkVal.value
    }

    return {
      tableRow,
      toggleTable,
      toggleStatus,
      ticketData,
      onChangeVal,
      checkVal,
      ticketViewModal,
      ticketCustomiseModal,
      ticketViewStatus,
      ticketCustomiseStatus
    }
  }
})
</script>
