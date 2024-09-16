import { useRouter, useRouterState } from '@tanstack/react-router'

export function useSideMenu() {
  const router = useRouterState()

  const checkIsActive = (url: string) => {
    const isSameUrl = router.location.pathname === url

    return isSameUrl
  }

  return { checkIsActive }
}
