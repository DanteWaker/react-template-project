import { AiOutlineLoading } from 'react-icons/ai'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-secondary-foreground">
      <AiOutlineLoading className="animate-spin" />
      <span>Loading...</span>
    </div>
  )
}
