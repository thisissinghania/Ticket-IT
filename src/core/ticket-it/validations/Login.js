import * as yup from 'yup'

export const validationSchema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required')
})
