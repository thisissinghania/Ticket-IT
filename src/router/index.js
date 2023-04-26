import { createRouter, createWebHistory } from 'vue-router'
import AllPanel from '@/views/AllPanel.vue'
import { TICKET_IT } from '@/core/ticket-it/global/globalVariables.js'

const routes = [
  {
    path: '/',
    name: 'all-panels',
    component: AllPanel
  },
  {
    path: `${TICKET_IT}`,
    name: 'auth-layout',
    component: () => import('@/layouts/ticket-it/AuthLayout.vue'),
    children: [
      {
        path: `${TICKET_IT}/login`,
        name: 'login-page',
        component: () => import('@/views/ticket-it/auth-view/login/LoginPage.vue')
      },
      {
        path: `${TICKET_IT}/register`,
        name: 'register-page',
        component: () => import('@/views/ticket-it/auth-view/register/RegisterPage.vue')
      }
    ]
  },
  {
    path: `${TICKET_IT}`,
    name: 'main-layout',
    component: () => import('@/layouts/ticket-it/MainLayout.vue'),
    children: [
      {
        path: `${TICKET_IT}/latest-batches`,
        name: 'latest-batches',
        component: () => import('@/views/ticket-it/panel-view/latest-batches/LatestBatches.vue')
      },
      {
        path: `${TICKET_IT}/latest-batches/batch-summary`,
        name: 'batch-summary',
        component: () => import('@/views/ticket-it/panel-view/batch-summary/BatchSummary.vue')
      },
      {
        path: `${TICKET_IT}/latest-batches/batch-summary/preview-all-ticket`,
        name: 'batch-summary-all-ticket',
        component: () =>
          import('@/views/ticket-it/panel-view/batch-summary-all-ticket/BatchSummaryAllTicket.vue')
      },
      {
        path: `${TICKET_IT}/latest-batches/new-batch-publish`,
        name: 'new-batch-publish',
        component: () =>
          import('@/views/ticket-it/panel-view/new-batch-publish/NewBatchPublish.vue')
      },
      {
        path: `${TICKET_IT}/latest-batches/create-inventory`,
        name: 'create-inventory',
        component: () =>
          import('@/views/ticket-it/panel-view/latest-batches/create-inventory/CreateInventory.vue')
      },
      {
        path: `${TICKET_IT}/latest-batches/create-pos-promotion`,
        name: 'create-pos-promotion',
        component: () =>
          import(
            '@/views/ticket-it/panel-view/latest-batches/create-pos-promotion/CreatePOSPromotion.vue'
          )
      },
      {
        path: `${TICKET_IT}/latest-batches/create-pos-purchase-order`,
        name: 'create-pos-purchase-order',
        component: () =>
          import(
            '@/views/ticket-it/panel-view/latest-batches/create-pos-purchase-order/CreatePOSPurchaseOrder.vue'
          )
      },
      {
        path: `${TICKET_IT}/adhoc-tickets`,
        name: 'adhoc-tickets',
        component: () => import('@/views/ticket-it/panel-view/adhoc-tickets/AdhocTickets.vue')
      },
      {
        path: `${TICKET_IT}/adhoc-tickets/preview-all-ticket`,
        name: 'adhoc-all-ticket',
        component: () => import('@/views/ticket-it/panel-view/adhoc-all-ticket/AdhocAllTicket.vue')
      },
      {
        path: `${TICKET_IT}/reports`,
        name: 'batches-report',
        component: () => import('@/views/ticket-it/panel-view/reports/BatchesReport.vue')
      },
      {
        path: `${TICKET_IT}/reports/change-report`,
        name: 'change-report',
        component: () =>
          import('@/views/ticket-it/panel-view/reports/change-report/ChangeReport.vue')
      },
      {
        path: `${TICKET_IT}/image-management`,
        name: 'image-management',
        component: () => import('@/views/ticket-it/panel-view/image-management/ImageManagement.vue')
      },
      {
        path: `${TICKET_IT}/user-administrator`,
        name: 'user-administrator',
        component: () =>
          import('@/views/ticket-it/panel-view/user-administrator/UserAdministrator.vue')
      },
      {
        path: `${TICKET_IT}/core-master`,
        name: 'core-master',
        component: () => import('@/views/ticket-it/panel-view/core-master/CoreMaster.vue')
      },
      {
        path: `${TICKET_IT}/ticket-setup`,
        name: 'ticket-setup',
        component: () => import('@/views/ticket-it/panel-view/ticket-setup/TicketSetup.vue')
      },
      {
        path: `${TICKET_IT}/ticket-setup/add-ticket`,
        name: 'add-ticket',
        component: () => import('@/views/ticket-it/panel-view/add-ticket/AddTicket.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // base: `/ticket-it-vue`
})

export default router
