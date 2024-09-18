import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const Profile = () => {
  return (
    <Avatar className='rounded-none w-8 h-8'>
      <AvatarImage src="/image.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
