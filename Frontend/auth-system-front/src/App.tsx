import { CreateAccount } from './pages/create-account'

export function App() {
  return (
    <main className="h-screen w-screen bg-zinc-950 text-zinc-100 flex justify-center p-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <span className="text-zinc-400">
          create an account for access the portal!
        </span>

        <CreateAccount />
      </div>
    </main>
  )
}
