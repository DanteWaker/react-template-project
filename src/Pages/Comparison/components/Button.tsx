import { PiDownloadFill } from 'react-icons/pi'
import { TButton } from '../Comparison.types'

export const Button = ({ type, action }: TButton) => {
  return (
    <button
      onClick={action}
      className="flex items-center justify-center gap-2 rounded-sm border-2 bg-white px-4 py-2 font-semibold text-secondary-foreground"
    >
      <PiDownloadFill />
      <span className="capitalize">{type}</span>
    </button>
  )
}
