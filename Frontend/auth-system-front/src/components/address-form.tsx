import * as Collapsible from '@radix-ui/react-collapsible'
import {
  ChevronUp,
  ChevronDown,
  Asterisk,
  MapPin,
  Binary,
  MapPinned,
  Plus,
  Navigation,
  Navigation2,
} from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CreateAccountResponse } from '../utils/create-account-schema'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateAccountResponse>()
  const [openAddressSection, setOpenAddressSection] = useState(false)

  return (
    <Collapsible.Root
      open={openAddressSection}
      onOpenChange={setOpenAddressSection}
    >
      <div className="mt-10 flex items-center gap-4">
        <span className="text-lg font-semibold">Fill in address details</span>
        <Collapsible.Trigger>
          {openAddressSection ? <ChevronUp /> : <ChevronDown />}
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className="data-[state=open]:animate-slideDownAndFade data-[state=closed]:animate-slideUpAndFade">
        <section className="mt-10">
          <h1 className="mb-10 text-2xl mt-5 font-bold">Address</h1>
          <div className="grid grid-cols-1">
            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="zipcode"
              >
                Zip Code
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <Asterisk className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="postal code"
                  {...register('zipCode')}
                />
              </div>

              {errors.zipCode && (
                <span className="">{errors.zipCode.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6 pb-4">
            <div className="space-y-3">
              <label className="text-violet-500 font-semibold" htmlFor="street">
                Street
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <MapPin className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="Street"
                  {...register('street')}
                />
              </div>

              {errors.street && (
                <span className="">{errors.street.message}</span>
              )}
            </div>

            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="addressNumber"
              >
                Number
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <Binary className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="Address Number"
                  {...register('addressNumber')}
                />
              </div>

              {errors.addressNumber && (
                <span className="">{errors.addressNumber.message}</span>
              )}
            </div>

            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="neighborhood"
              >
                Neighborhood
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <MapPinned className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="Neighborhood"
                  {...register('neighborhood')}
                />
              </div>

              {errors.neighborhood && (
                <span className="">{errors.neighborhood.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6 border-b-2 pb-8 border-b-zinc-800">
            <div className="space-y-3">
              <label
                className="text-violet-500 font-semibold"
                htmlFor="complement"
              >
                Complement (optional)
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <Plus className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="ex: apto 4"
                  {...register('complement')}
                />
              </div>

              {errors.complement && (
                <span className="">{errors.complement.message}</span>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-violet-500 font-semibold" htmlFor="city">
                City
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <Navigation className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="City"
                  {...register('city')}
                />
              </div>

              {errors.city && <span className="">{errors.city.message}</span>}
            </div>

            <div className="space-y-3">
              <label className="text-violet-500 font-semibold" htmlFor="state">
                State
              </label>
              <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
                <Navigation2 className="text-zinc-500" />
                <input
                  className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                  type="text"
                  placeholder="State"
                  {...register('state')}
                />
              </div>

              {errors.state && <span className="">{errors.state.message}</span>}
            </div>
          </div>
        </section>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
