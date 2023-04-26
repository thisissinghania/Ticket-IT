<template>
  <v-col-auto class="sidebar-panel cart-sidebar-panel">
    <v-col class="backdrop" @click="$emit('showCart')"></v-col>
    <v-col-auto class="sidebar-inside">
      <v-col class="sidebar-top">
        <v-col class="pa-0 switch-title">
          <p>Cart</p>
        </v-col>
        <button class="close" @click="$emit('showCart')">
          <img src="@/assets/ticket-it/images/close.svg" alt="close" />
        </button>
      </v-col>
      <v-col class="cart_clear d-flex justify-end"
        ><fill-button class="small-font-cta">Clear Cart</fill-button></v-col
      >
      <v-col class="panels-listing pa-0">
        <ul>
          <li class="pa-3" v-for="(cartList, i) in cartData" :key="i">
            <v-col>
              <v-row class="d-flex align-center">
                <v-col-auto class="image">
                  <img src="@/assets/ticket-it/images/product1.png" alt="product1"
                /></v-col-auto>
                <v-col class="data">
                  <h4>{{ cartList.size }}</h4>
                  <h4>{{ cartList.name }}</h4>
                  <button class="mt-1">Remove</button>
                </v-col>
              </v-row>
            </v-col>
          </li>
        </ul>
      </v-col>
      <v-col class="cart_footer d-flex justify-center">
        <fill-button class="small-font-cta light-blue">Download Cart</fill-button>
        <fill-button class="small-font-cta dark-blue ml-3">Share Cart</fill-button>
      </v-col>
    </v-col-auto>
  </v-col-auto>
</template>

<script>
import { defineComponent } from 'vue'
import FillButton from '@/components/ticket-it/buttons/FillButton.vue'
import { cartData } from '@/core/ticket-it/data/cartData.js'

export default defineComponent({
  name: 'view-cart',
  components: {
    'fill-button': FillButton
  },
  setup() {
    return {
      cartData
    }
  }
})
</script>
