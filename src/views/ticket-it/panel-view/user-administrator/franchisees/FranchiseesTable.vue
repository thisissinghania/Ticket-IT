<template>
  <tr>
    <td>{{ tableRow.username }}</td>
    <td>{{ tableRow.email }}</td>
    <td>{{ tableRow.name }}</td>
    <td>{{ tableRow.region }}</td>
    <td>{{ tableRow.category }}</td>
    <td>{{ tableRow.group }}</td>
    <td>
      <v-col cols="12 pa-0" class="d-flex">
        <fill-button @click="editModal()" class="small-font-cta light-blue fixed-width ma-1 pa-3"
          ><img src="@/assets/ticket-it/images/pencil.svg"
        /></fill-button>
        <fill-button class="small-font-cta fixed-width ma-1 pa-3"
          ><img src="@/assets/ticket-it/images/del.svg"
        /></fill-button>
      </v-col>
    </td>
  </tr>

  <!--eslint-disable-->
    <edit-franchisees v-if="editModalStatus" v-on:closeModal="editModal" />
  </template>

<script>
import { defineComponent, ref } from 'vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import EditFranchisees from '@/views/ticket-it/panel-view/user-administrator/franchisees/edit-franchisees/EditFranchisees.vue'

export default defineComponent({
  name: 'franchisees-table',
  components: {
    'fill-button': FillButton,
    'edit-franchisees': EditFranchisees
  },
  props: {
    tableData: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    const tableRow = ref(props.tableData)
    let editModalStatus = ref(false)

    const editModal = () => {
      editModalStatus.value = !editModalStatus.value
    }

    return {
      tableRow,
      editModal,
      editModalStatus
    }
  }
})
</script>
