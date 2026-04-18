// components/shared/LoadingState.tsx
function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-2">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
      <p className="text-gray-500 mt-4">Loading country data...</p>
    </div>
  )
}

export default LoadingState