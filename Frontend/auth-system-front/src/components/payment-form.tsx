import * as Collapsible from '@radix-ui/react-collapsible'
import {
  ChevronUp,
  ChevronDown,
  HandCoins,
  TimerIcon,
  Coins,
  UserCheck,
} from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CreateAccountResponse } from '../utils/create-account-schema'

export function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateAccountResponse>()
  const [openPaymentSection, setOpenPaymentSection] = useState(false)

  return (
    <Collapsible.Root
      open={openPaymentSection}
      onOpenChange={setOpenPaymentSection}
    >
      <div className="mt-10 flex items-center gap-4">
        <span className="text-lg font-semibold">Fill in payment details</span>
        <Collapsible.Trigger>
          {openPaymentSection ? <ChevronUp /> : <ChevronDown />}
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className="data-[state=open]:animate-slideDownAndFade data-[state=closed]:animate-slideUpAndFade">
        <section className="mt-10">
          <h1 className="mb-10 text-2xl mt-5 font-bold">Payment</h1>
          <div className="grid grid-cols-3 gap-3 mt-6 pb-4">
            <div className="space-y-3">
              <label className="text-violet-500 font-semibold" htmlFor="card">
                Payment method
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <select
                  className="flex-1 border-0 w-full bg-zinc-950 p-0.5 text-zinc-400 placeholder:text-zinc-500 outline-none rounded-lg"
                  {...register('card')}
                >
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value=""
                    disabled
                  >
                    Select a payment method
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="DEBIT"
                  >
                    Debit card
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="CREDIT"
                  >
                    Credit card
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="cardNumber"
              >
                Card Number
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <HandCoins className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="ex: 4444 4444 4444 4444"
                  {...register('cardNumber')}
                />
              </div>

              {errors.cardNumber && (
                <span className="">{errors.cardNumber.message}</span>
              )}
            </div>

            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="expirationDate"
              >
                Expiration Date
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <TimerIcon className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="ex: 12/2030"
                  {...register('expirationDate')}
                />
              </div>

              {errors.expirationDate && (
                <span className="">{errors.expirationDate.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6 border-b-2 pb-8 border-b-zinc-800">
            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="securityCode"
              >
                Security Code
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <Coins className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="CVV"
                  {...register('securityCode')}
                />
              </div>

              {errors.securityCode && (
                <span className="">{errors.securityCode.message}</span>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-violet-500 font-semibold" htmlFor="city">
                Installment
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <select
                  className="flex-1 border-0 w-full bg-zinc-950 p-0.5 text-zinc-400 placeholder:text-zinc-500 outline-none rounded-lg"
                  {...register('installment')}
                >
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value=""
                    disabled
                  >
                    Select the number of installments
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="1"
                  >
                    1x
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="2"
                  >
                    2x
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="3"
                  >
                    3x
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="4"
                  >
                    4x
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="5"
                  >
                    5x
                  </option>
                  <option
                    className="z-10 bg-transparent border border-zinc-400"
                    value="6"
                  >
                    6x
                  </option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="responsibleName"
              >
                Responsible Name
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <UserCheck className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="John Doe"
                  {...register('responsibleName')}
                />
              </div>

              {errors.responsibleName && (
                <span className="">{errors.responsibleName.message}</span>
              )}
            </div>
          </div>
        </section>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
