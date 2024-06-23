interface FormErrorMessageProps {
  message?: string
}

export function FormErrorMessage({ message }: FormErrorMessageProps) {
  return <span className="text-red-400 text-sm mt-3">{message}</span>
}
