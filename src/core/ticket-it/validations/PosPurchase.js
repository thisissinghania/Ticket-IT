import * as yup from 'yup'

export const validationSchema = yup.object({
  supplierInvoice: yup.string().required('Supplier invoice is required'),
  dateFrom: yup.string().required('Date is required'),
  dateTo: yup.string().required('Date is required'),
  purchaseOrder: yup.string().required('Purchase order is required')
})
