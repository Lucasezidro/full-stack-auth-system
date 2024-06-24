import { z } from 'zod'

export const createAccountSchema = z.object({
  username: z.string().min(1, { message: 'User name is required.' }),
  email: z.string().email({ message: 'Invalid e-mail.' }),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters long.' }),
  zipCode: z.string().min(1, { message: 'Zip code is required.' }),
  street: z.string().min(1, { message: 'Street is required.' }),
  addressNumber: z.string().min(1, { message: 'Address number is required.' }),
  neighborhood: z.string().min(1, { message: 'Neighborhood is required' }),
  complement: z.string().optional(),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  card: z.enum(['DEBIT', 'CREDIT']),
  cardNumber: z.string().min(16, {
    message: 'The card number must be at least 16 characters long',
  }),
  expirationDate: z
    .string()
    .min(1, { message: 'Expiration date is required.' }),
  securityCode: z.string().min(3, { message: 'Invalid security code.' }),
  installment: z.enum(['1', '2', '3', '4', '5', '6']),
  responsibleName: z
    .string()
    .min(1, { message: 'Responsible name is required.' }),
})

export type CreateAccountResponse = z.infer<typeof createAccountSchema>
