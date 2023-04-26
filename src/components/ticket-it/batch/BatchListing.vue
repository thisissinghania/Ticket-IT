<template>
  <v-col class="pa-0">
    <v-col class="title_and_status">
      <v-row>
        <v-col class="title" cols="12" sm="8">{{ heading }}</v-col>
        <v-col
          class="status pt-0 pt-sm-3 d-flex justify-sm-end"
          :class="
            status === 'sent'
              ? 'blue-color'
              : '' || status === 'unsend'
              ? 'yellow-text'
              : '' || status === 'active'
              ? 'blue-color'
              : ''
          "
          cols="12"
          sm="4"
          >{{ status }} <span></span
        ></v-col>
      </v-row>
    </v-col>
    <v-col class="date_and_types">
      <v-row>
        <v-col class="data_type" cols="12" md="7" lg="8">
          <h4>date</h4>
          <p>{{ date }}</p>
        </v-col>
        <v-col cols="12" md="5" lg="4">
          <v-row>
            <v-col class="data_type" cols="12" sm="4">
              <h4>products</h4>
              <p>{{ products }}</p>
            </v-col>
            <v-col class="data_type" cols="12" sm="4">
              <h4>type</h4>
              <p>{{ type }}</p>
            </v-col>
            <v-col class="data_type" cols="12" sm="4">
              <h4>last edit</h4>
              <p>{{ lastEdit }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="notes">
      <h4>notes</h4>
      <p>
        {{ notes }}
      </p>
    </v-col>
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'single-batch-list',
  props: {
    navigationBar: {
      type: Array,
      required: false
    },
    heading: {
      type: String,
      required: false
    },
    status: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    products: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    lastEdit: {
      type: String,
      required: false
    },
    notes: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const navData = ref(props.navigationBar)
    return {
      navData
    }
  }
})
</script>
