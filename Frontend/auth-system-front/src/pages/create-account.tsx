import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreateAccountResponse,
  createAccountSchema,
} from '../utils/create-account-schema'
import { UsersForm } from '../components/users-form'
import { AddressForm } from '../components/address-form'
import { PaymentForm } from '../components/payment-form'
import { useMutation } from '@tanstack/react-query'
import { createAccount } from '../queries/create-account'
import { toast } from 'sonner'

export function CreateAccount() {
  const methods = useForm<CreateAccountResponse>({
    resolver: zodResolver(createAccountSchema),
  })

  const { mutateAsync: createUser } = useMutation({
    mutationFn: createAccount,
  })

  function handleCreateAccount(data: CreateAccountResponse) {
    try {
      createUser({
        addressNumber: data.addressNumber,
        card: data.card,
        cardNumber: data.cardNumber,
        city: data.city,
        email: data.email,
        expirationDate: data.expirationDate,
        neighborhood: data.neighborhood,
        password: data.password,
        responsibleName: data.responsibleName,
        securityCode: data.securityCode,
        state: data.state,
        street: data.street,
        username: data.username,
        zipCode: data.zipCode,
        complement: data.complement,
        installment: data.installment,
      })

      toast.success('User registered successfully!')
    } catch (err) {
      toast.error('There was an error registering the user.')
      console.error(err)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleCreateAccount)}
        className="w-screen flex flex-col items-center justify-center"
      >
        <div>
          <UsersForm showUsernameField />
          <AddressForm />
          <PaymentForm />
        </div>

        <button
          disabled={methods.formState.isSubmitting}
          className="bg-violet-700 p-4 mt-10 rounded-lg hover:bg-violet-600"
          type="submit"
        >
          Register now
        </button>
      </form>
    </FormProvider>
  )
}
