import { api } from '../lib/axios'

interface RegisterUseCaseRequest {
  username: string
  email: string
  password: string
  zipCode: string
  street: string
  addressNumber: string
  neighborhood: string
  complement?: string
  city: string
  state: string
  card: 'CREDIT' | 'DEBIT'
  cardNumber: string
  expirationDate: string
  securityCode: string
  responsibleName: string
  installment?: string
}

export async function createAccount({
  username,
  email,
  password,
  zipCode,
  street,
  addressNumber,
  neighborhood,
  complement,
  city,
  state,
  card,
  cardNumber,
  expirationDate,
  securityCode,
  responsibleName,
  installment,
}: RegisterUseCaseRequest) {
  await api.post('/create-users', {
    username,
    email,
    password,
    zipCode,
    street,
    addressNumber,
    neighborhood,
    complement,
    city,
    state,
    card,
    cardNumber,
    expirationDate,
    securityCode,
    responsibleName,
    installment,
  })
}
