<template>
  <popup-area :sizeSM="`12`" :sizeMD="`10`" :sizeLG="`7`" class="modal-content-area-0">
    <template v-slot:modalTitle>
      <h3>Ticket Type To Print</h3>
      <button class="close" @click="$emit('closeModal')">
        <img src="@/assets/ticket-it/images/close-modal.svg" alt="close-modal" />
      </button>
    </template>
    <template v-slot:modalContent>
      <table-structure>
        <template v-slot:thead>
          <tr>
            <th>Ticket Name</th>
            <th>Ticket(s)</th>
            <th>Per Page</th>
            <th>Total Sheets</th>
            <th>Print</th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tbody class="text-grey">
            <tr v-for="(printData, i) in printList" :key="i">
              <td class="text-grey">{{ printData.ticketName }}</td>
              <td class="text-grey">{{ printData.tickets }}</td>
              <td class="text-grey">{{ printData.perPage }}</td>
              <td class="text-grey">{{ printData.totalSheets }}</td>
              <td>
                <fill-button class="small-font-cta light-blue">Print</fill-button>
              </td>
            </tr>
          </tbody>
        </template>
      </table-structure>
    </template>
  </popup-area>
</template>

<script>
import { defineComponent } from 'vue'
import Popover from '@/components/ticket-it/modals/AllModals.vue'
import TableStructure from '@/components/ticket-it/table/TableStructure.vue'
import { printList } from '@/core/ticket-it/data/printList'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'

export default defineComponent({
  name: 'ticket-print',
  components: {
    'popup-area': Popover,
    'table-structure': TableStructure,
    'fill-button': FillButton
  },
  setup() {
    return {
      printList
    }
  }
})
</script>
