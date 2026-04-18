// components/shared/ErrorState.tsx
type ErrorStateProps = {
  message: string
}

function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-2">
      <h2 className="text-2xl font-serif italic">Something went wrong</h2>
      <p className="text-gray-500">{message}</p>
    </div>
  )
}

export default ErrorState