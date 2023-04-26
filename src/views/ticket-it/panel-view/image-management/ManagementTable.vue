<template>
  <tr>
    <td>
      <v-col class="product_img pa-0"><img src="@/assets/ticket-it/images/product1.png" /></v-col>
    </td>
    <td>
      <v-col class="d-flex justify-end pa-0">
        <fill-button class="light-blue small-font-cta ml-2">Original</fill-button>
        <fill-button class="small-font-cta ml-2">PNG</fill-button>
        <fill-button class="dark-blue small-font-cta ml-2" @click="addToCart()"
          >Add To Cart</fill-button
        >
      </v-col>
    </td>
  </tr>
  <!--eslint-disable-->
  <view-cart v-if="cartStatus" v-on:showCart="addToCart" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import ViewCart from '@/views/ticket-it/panel-view/image-management/cart/ViewCart.vue'

export default defineComponent({
  name: 'management-table',
  components: {
    'fill-button': FillButton,
    'view-cart': ViewCart
  },
  props: {
    tableData: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    const tableRow = ref(props.tableData)
    const cartStatus = ref(false)

    const addToCart = () => {
      cartStatus.value = !cartStatus.value
    }

    return {
      tableRow,
      addToCart,
      cartStatus
    }
  }
})
</script>
