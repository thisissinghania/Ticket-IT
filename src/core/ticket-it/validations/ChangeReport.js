import * as yup from 'yup'

export const validationSchema = yup.object({
  selectReport: yup.string().required('Report is required'),
  dateFrom: yup.string().required('Date is required'),
  timeFrom: yup.string().required('Time is required'),
  dateTo: yup.string().required('Date is required'),
  timeTo: yup.string().required('Time is required'),
  selectBrand: yup.string().required('Brand is required'),
  season: yup.string().required('Season is required'),
  supplier: yup.string().required('Supplier is required'),
  colour: yup.string().required('Colour is required')
})
