<template>
  <v-col class="pa-0">
    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12" sm="6" md="6">
          <v-col class="pa-0 subpage-title">Image Management</v-col>
        </v-col>
        <v-col cols="12" sm="6" md="6" class="d-flex flex-wrap justify-sm-end">
          <fill-button class="green-bg small-font-cta" @click="uploadNewAsset()"
            >Upload Assets</fill-button
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col class="mt-2 table-data">
      <table-structure>
        <template v-slot:thead>
          <tr>
            <th>Product</th>
            <th style="text-align: left; width: 290px">Action</th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tbody v-for="(tableData, i) in imageManagementData" :key="i">
            <management-table :tableData="tableData" />
          </tbody>
        </template>
      </table-structure>
    </v-col>

    <pagination-list />
    <upload-assets v-if="uploadAssetsStatus" v-on:closeModal="uploadNewAsset" />
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import TableStructure from '@/components/ticket-it/table/TableStructure.vue'
import ManagementTable from '@/views/ticket-it/panel-view/image-management/ManagementTable.vue'
import PaginationList from '@/components/ticket-it/pagination/paginationList.vue'
import { imageManagementData } from '@/core/ticket-it/data/imageManagementData.js'
import UploadAssets from '@/views/ticket-it/panel-view/image-management/upload-assets/UploadAssets.vue'

export default defineComponent({
  name: 'image-management',
  components: {
    'fill-button': FillButton,
    'table-structure': TableStructure,
    'management-table': ManagementTable,
    'pagination-list': PaginationList,
    'upload-assets': UploadAssets
  },
  setup() {
    let uploadAssetsStatus = ref(false)

    const uploadNewAsset = () => {
      uploadAssetsStatus.value = !uploadAssetsStatus.value
    }

    return {
      imageManagementData,
      uploadAssetsStatus,
      uploadNewAsset
    }
  }
})
</script>
