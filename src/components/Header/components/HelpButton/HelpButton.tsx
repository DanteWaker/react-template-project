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
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-secondary text-2xl font-bold text-secondary">
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
