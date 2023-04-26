<template>
  <v-col class="pa-0">
    <v-col class="mt-2 table-data">
      <table-structure>
        <template v-slot:thead>
          <tr>
            <th v-for="(title, i) in regionalTitle" :key="i">{{ title.name }}</th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tbody v-for="(tableData, i) in regionalData" :key="i">
            <franchisees-table :tableData="tableData" />
          </tbody>
        </template>
      </table-structure>
    </v-col>

    <pagination-list />
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'
import TableStructure from '@/components/ticket-it/table/TableStructure.vue'
import { regionalTitle } from '@/core/ticket-it/data/regionalTitle.js'
import { regionalData } from '@/core/ticket-it/data/regionalData.js'
import FranchiseesTable from '@/views/ticket-it/panel-view/user-administrator/franchisees/FranchiseesTable.vue'
import PaginationList from '@/components/ticket-it/pagination/paginationList.vue'

export default defineComponent({
  name: 'franchisees-tab',
  components: {
    'table-structure': TableStructure,
    'franchisees-table': FranchiseesTable,
    'pagination-list': PaginationList
  },
  setup() {
    return {
      regionalTitle,
      regionalData
    }
  }
})
</script>
