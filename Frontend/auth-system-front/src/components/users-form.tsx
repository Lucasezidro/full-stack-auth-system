import { User, Mail, Eye, EyeOff, Lock } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { CreateAccountResponse } from '../utils/create-account-schema'
import { FormErrorMessage } from './error/form-error-message'

interface UserFormProps {
  showUsernameField?: boolean
}

export function UsersForm({ showUsernameField }: UserFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateAccountResponse>()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section>
      <h1 className="mb-10 text-2xl mt-5 font-bold">User</h1>
      <div className="grid grid-cols-3 gap-3 mt-6 border-b-2 pb-8 border-b-zinc-800">
        {showUsernameField && (
          <div className="space-y-3">
            <label className="text-violet-500 font-semibold" htmlFor="username">
              Username
            </label>

            <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
              <User className="text-zinc-500" />
              <input
                className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
                type="text"
                placeholder="John Doe"
                {...register('username')}
              />
            </div>

            {errors.username && (
              <FormErrorMessage message={errors.username.message} />
            )}
          </div>
        )}

        <div className="space-y-3">
          <label className="text-violet-500 font-semibold" htmlFor="email">
            E-mail
          </label>
          <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
            <Mail className="text-zinc-500" />
            <input
              className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
              type="text"
              placeholder="johndoe@exemple.com"
              {...register('email')}
            />
          </div>

          {errors.email && <FormErrorMessage message={errors.email.message} />}
        </div>

        <div className="space-y-3">
          <label className="text-violet-500 font-semibold" htmlFor="password">
            Password
          </label>

          <div className="w-full border border-zinc-500 rounded-lg p-5 flex items-center gap-2 px-3 py-2 shadow-sm focus-within:border-violet-700 focus-within:ring-4 focus-within:ring-violet-500">
            <Lock className="text-zinc-500" />
            <input
              className="flex-1 border-0 bg-transparent p-0 text-zinc-200 placeholder:text-zinc-500 outline-none"
              type={showPassword ? 'text' : 'password'}
              placeholder="ex: 123456"
              {...register('password')}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <Eye className="h-4 w-4 text-zinc-500" />
              ) : (
                <EyeOff className="h-4 w-4 text-zinc-500" />
              )}
            </button>
          </div>

          {errors.password && (
            <FormErrorMessage message={errors.password.message} />
          )}
        </div>
      </div>
    </section>
  )
}
