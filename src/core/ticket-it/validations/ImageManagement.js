import * as yup from 'yup'

export const validationSchema = yup.object({
  file: yup.string().required('File is required')
})
