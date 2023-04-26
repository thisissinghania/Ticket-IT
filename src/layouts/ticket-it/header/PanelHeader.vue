<template>
  <v-col class="panel-header w-100">
    <v-row>
      <v-col class="pa-0 left-header">
        <v-col-auto class="switch-panel">
          <v-col class="switch-panel-click" @click="showSidebar()">
            <img src="@/assets/ticket-it/images/panel.svg" alt="panel" />
            <p>Switch Panel</p>
          </v-col>
          <sidebar-panels v-if="sidebarStatus" v-on:showSidebar="showSidebar" />
        </v-col-auto>
        <v-col-auto class="home-icon"
          ><router-link :to="`${TICKET_IT}/latest-batches`"
            ><img src="@/assets/ticket-it/images/home.svg" alt="home" /></router-link
        ></v-col-auto>
      </v-col>
      <v-col class="pa-0 center-header"
        ><img src="@/assets/ticket-it/images/h-logo.png" alt="h-logo"
      /></v-col>
      <v-col class="right-header">
        <button class="settings" @click="statusChange()">
          <img src="@/assets/ticket-it/images/setting.svg" alt="settings" />
          <v-col class="all-settings pa-0" v-if="currentStatus">
            <router-link :to="`${TICKET_IT}/user-administrator`"
              ><span><img src="@/assets/ticket-it/images/user.svg" alt="user" /></span> User
              Administration</router-link
            >
            <router-link :to="`${TICKET_IT}/image-management`"
              ><span><img src="@/assets/ticket-it/images/image.svg" alt="image" /></span> Image
              Management</router-link
            >
            <router-link :to="`${TICKET_IT}/ticket-setup`"
              ><span><img src="@/assets/ticket-it/images/tickets.svg" alt="ticket" /></span> Ticket
              Setup</router-link
            >
          </v-col>
        </button>
        <button @click="logout()" class="ml-2 ml-md-3 logout">
          <img src="@/assets/ticket-it/images/logout.svg" alt="logout" />
        </button>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SidebarPanels from '@/layouts/ticket-it/sidebar/SidebarPanels.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'
import router from '@/router'

export default defineComponent({
  name: 'panel-header',
  components: {
    'sidebar-panels': SidebarPanels
  },
  setup() {
    let currentStatus = ref(false)
    let sidebarStatus = ref(false)

    const statusChange = () => {
      currentStatus.value = !currentStatus.value
    }
    const showSidebar = () => {
      sidebarStatus.value = !sidebarStatus.value
    }

    const logout = () => {
      router.push(`${TICKET_IT}/login`)
    }

    return {
      statusChange,
      showSidebar,
      currentStatus,
      sidebarStatus,
      TICKET_IT,
      logout
    }
  }
})
</script>
