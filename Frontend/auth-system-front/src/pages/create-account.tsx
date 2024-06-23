import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreateAccountResponse,
  createAccountSchema,
} from '../utils/create-account-schema'
import { UsersForm } from '../components/users-form'
import { AddressForm } from '../components/address-form'
import { PaymentForm } from '../components/payment-form'

export function CreateAccount() {
  const methods = useForm<CreateAccountResponse>({
    resolver: zodResolver(createAccountSchema),
  })

  function handleCreateAccount(data: CreateAccountResponse) {
    console.log(data)
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
          className="bg-violet-700 p-4 mt-10 rounded-lg hover:bg-violet-600"
          type="submit"
        >
          Register now
        </button>
      </form>
    </FormProvider>
  )
}
