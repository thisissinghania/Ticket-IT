import * as yup from 'yup'

export const validationSchema = yup.object({
  regions: yup.string().required('Regions is required'),
  subject: yup.string().required('Subject is required'),
  publishDate: yup.string().required('Publish date is required'),
  message: yup.string().required('Message is required')
})
