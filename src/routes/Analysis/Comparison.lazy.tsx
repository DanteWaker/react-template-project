import { Comparison } from '@/Pages/Comparison'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Analysis/Comparison')({
  component: Comparison,
})
