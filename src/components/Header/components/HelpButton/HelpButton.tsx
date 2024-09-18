import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { THelpButton } from './HelpButton.types'

export const HelpButton = ({
  tooltipText = 'Texto do tooltip',
}: THelpButton) => {
  const toolTipMillisecondsDelay = 200
  return (
    <TooltipProvider>
      <Tooltip delayDuration={toolTipMillisecondsDelay}>
        <TooltipTrigger>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-secondary text-xl font-semibold text-secondary">
            ?
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
