<template>
  <v-col class="pa-0">
    <v-col class="detail-page-topbar pt-5 pb-5">
      <v-row class="align-center">
        <v-col cols="12">
          <v-col class="pa-0 subpage-title">Users</v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="pa-0 navigation-bar tabs_navigation">
      <v-tabs v-model="tab">
        <v-tab value="regional">regional managers</v-tab>
        <v-tab value="franchise">franchisees</v-tab>
      </v-tabs>
    </v-col>
    <v-window v-model="tab">
      <v-window-item value="regional">
        <regional-manager />
      </v-window-item>
      <v-window-item value="franchise">
        <franchisees-tab />
      </v-window-item>
    </v-window>
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import RegionalManager from '@/views/ticket-it/panel-view/user-administrator/regional/RegionalManager.vue'
import Franchisees from '@/views/ticket-it/panel-view/user-administrator/franchisees/Franchisees.vue'

export default defineComponent({
  name: 'user-administrator',
  components: {
    'regional-manager': RegionalManager,
    'franchisees-tab': Franchisees
  },
  setup() {
    const tab = ref(null)
    return {
      tab
    }
  }
})
</script>
