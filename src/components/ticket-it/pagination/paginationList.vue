<template>
  <v-col class="pa-0">
    <VeeForm id="pagination-form">
      <v-col class="paginations">
        <v-row class="justify-center d-flex justify-sm-end">
          <v-col-auto class="d-flex align-center pa-3">
            Row Per Page:
            <v-col class="select-pagination pa-0">
              <Field name="rowPerPage" as="select">
                <option value="">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
              </Field>
            </v-col>
          </v-col-auto>

          <v-col-auto class="d-flex align-center prev-next pa-3"
            ><span>1-25 of 500</span>
            <button type="button" class="prev" disabled>
              <img src="@/assets/ticket-it/images/prev.svg" /></button
            ><button type="button" class="next">
              <img src="@/assets/ticket-it/images/next.svg" /></button
          ></v-col-auto>
        </v-row>
      </v-col>
    </VeeForm>
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'

export default defineComponent({
  name: 'pagination-list',
  components: {
    VeeForm,
    Field
  },
  setup() {
    return {}
  }
})
</script>
