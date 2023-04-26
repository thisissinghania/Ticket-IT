<template>
  <v-col class="pa-0">
    <batch-listing
      :heading="batchListData?.heading"
      :status="batchListData?.status"
      :date="batchListData?.date"
      :products="batchListData?.products"
      :type="batchListData?.type"
      :lastEdit="batchListData?.lastEdit"
      :notes="batchListData?.notes"
    />
    <v-col class="batch_buttons">
      <v-row>
        <v-col cols="12" sm="3"
          ><button-with-icon class="dark-primary"
            ><span><img src="@/assets/ticket-it/images/del.svg" /></span>
            <p>Delete</p></button-with-icon
          ></v-col
        >
        <v-col
          v-if="saveProductStatus == false"
          cols="12"
          sm="9"
          class="d-flex flex-wrap justify-sm-end pt-0 pt-sm-3"
        >
          <button-with-icon @click="addProduct()" class="dark-blue mr-2 mt-2 mt-sm-0"
            ><span><img src="@/assets/ticket-it/images/add.svg" /></span>
            <p>Add Product</p></button-with-icon
          >
          <fill-button class="small-font-cta grey-bg-cta">Preview & Print</fill-button>
        </v-col>

        <v-col
          v-if="saveProductStatus == true"
          cols="12"
          sm="9"
          class="d-flex flex-wrap justify-sm-end pt-0 pt-sm-3"
        >
          <button-with-icon class="light-blue mr-2 mt-2 mt-sm-0"
            ><span><img src="@/assets/ticket-it/images/send.svg" /></span>
            <p>Send</p></button-with-icon
          >
          <router-link to="#" class="cta_with_icon dark-blue mr-2 mt-2 mt-sm-0"
            ><span><img src="@/assets/ticket-it/images/view.svg" /></span>
            <p>View Ticket</p></router-link
          >
          <button-with-icon class="dark-yellow mt-2 mt-sm-0"
            ><span><img src="@/assets/ticket-it/images/export.svg" /></span>
            <p>Export</p></button-with-icon
          >
        </v-col>
      </v-row>
    </v-col>

    <add-product
      v-if="addProductStatus"
      v-on:closeModal="addProduct"
      v-on:saveProduct="saveProduct"
    />
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BatchListing from '@/components/ticket-it/batch/BatchListing.vue'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import AddProduct from '@/views/ticket-it/panel-view/add-ticket/add-product/AddProduct.vue'

export default defineComponent({
  name: 'add-ticket-data',
  components: {
    'batch-listing': BatchListing,
    'button-with-icon': ButtonWithIcon,
    'fill-button': FillButton,
    'add-product': AddProduct
  },
  props: {
    batchList: {
      type: Object,
      required: false
    }
  },
  setup(props) {
    const batchListData = ref(props.batchList)
    let addProductStatus = ref(false)
    let saveProductStatus = ref(false)

    const addProduct = () => {
      addProductStatus.value = !addProductStatus.value
    }
    const saveProduct = () => {
      saveProductStatus.value = !saveProductStatus.value
    }

    return {
      addProductStatus,
      addProduct,
      batchListData,
      saveProductStatus,
      saveProduct
    }
  }
})
</script>
