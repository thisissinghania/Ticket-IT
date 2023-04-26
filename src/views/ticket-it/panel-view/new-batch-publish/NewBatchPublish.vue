<template>
  <v-col class="pa-0">
    <navigation-bar :navigationBar="navigationBar" />

    <v-col class="pt-6 pb-6 single-title">Send Notification</v-col>

    <!-- batch listing start -->
    <v-col class="pt-0 pending-publish">
      <v-col
        class="single_batch_list pa-0 mb-5 mb-sm-7"
        v-for="(batchList, i) in newBatchPublish"
        :key="i"
      >
        <new-batch-data :batchList="batchList" />
      </v-col>
    </v-col>
    <!-- batch listing end -->

    <v-col class="pt-0 pb-0">
      <v-col class="shadow-block pa-1">
        <VeeForm id="publish-batch-form" @submit="submit" :validation-schema="validationSchema">
          <v-row>
            <v-col cols="12" sm="6">
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Regions</label></v-col>
                <v-col class="field-type field-stype-select pa-0">
                  <Field name="regions" as="select">
                    <option value="" disabled>Select Regions</option>
                    <option value="all-regions">All Regions</option>
                    <option value="specific-user">Specific Users</option>
                  </Field>
                </v-col>
                <ErrorMessage name="regions" />
              </v-col>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Subject</label></v-col>
                <v-col class="field-type pa-0">
                  <Field name="subject" type="text" placeholder="Subject" />
                </v-col>
                <ErrorMessage name="subject" />
              </v-col>
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Publish Date</label></v-col>
                <v-col class="field-type pa-0">
                  <Field name="publishDate" type="date" placeholder="Select Date" />
                </v-col>
                <ErrorMessage name="publishDate" />
              </v-col>
            </v-col>

            <v-col cols="12" sm="6">
              <v-col class="custom-field" cols="12">
                <v-col class="pa-0 mb-1 field-label bold-label"><label>Message</label></v-col>
                <v-col class="field-type pa-0">
                  <Field v-slot="{ field }" name="message">
                    <textarea v-bind="field" rows="8" />
                  </Field>
                </v-col>
                <ErrorMessage name="message" />
              </v-col>
            </v-col>

            <v-col cols="12" class="pt-0">
              <v-col class="pt-0 d-flex">
                <button-with-icon type="button" class="dark-primary mr-3"
                  ><span><img src="@/assets/ticket-it/images/del.svg" /></span>
                  <p>Delete</p></button-with-icon
                >
                <button-with-icon class="green-bg"
                  ><span><img src="@/assets/ticket-it/images/check-cta.svg" /></span>
                  <p>Publish</p></button-with-icon
                >
              </v-col>
            </v-col>
          </v-row>
        </VeeForm>
      </v-col>
    </v-col>
  </v-col>
</template>

<script>
import { defineComponent } from 'vue'
import { ErrorMessage, Form as VeeForm, Field } from 'vee-validate'
import NavigationBar from '@/components/ticket-it/navigations/NavigationBar.vue'
import { navigationBar } from '@/core/ticket-it/data/navigationBar'
import { newBatchPublish } from '@/core/ticket-it/data/newBatchPublish'
import ButtonWithIcon from '@/components/ticket-it/buttons/ButtonWithIcon.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import { validationSchema } from '@/core/ticket-it/validations/NewBatch.js'
import NewBatchData from '@/views/ticket-it/panel-view/new-batch-publish/NewBatchData.vue'

export default defineComponent({
  name: 'new-batch-publish',
  components: {
    'navigation-bar': NavigationBar,
    'button-with-icon': ButtonWithIcon,
    'new-batch-data': NewBatchData,
    VeeForm,
    Field,
    ErrorMessage
  },
  setup() {
    const submit = (values) => {
      console.log(JSON.stringify(values, 10))
    }

    return {
      navigationBar,
      newBatchPublish,
      validationSchema,
      submit,
      TICKET_IT
    }
  }
})
</script>
