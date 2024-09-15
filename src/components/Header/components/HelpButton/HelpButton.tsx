import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const HelpButton = () => {
  const toolTipMilisecondsDelay = 200
  return (
    <TooltipProvider>
      <Tooltip delayDuration={toolTipMilisecondsDelay}>
        <TooltipTrigger>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-4 text-2xl font-bold text-secondary">
            ?
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip para ajuda</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
