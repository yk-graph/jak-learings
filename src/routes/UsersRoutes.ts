import UserIndex from '../pages/users/UserIndex'
import UserShow from '../pages/users/UserShow'
import UserAvatarIndex from '../pages/users/UserAvatarIndex'
import { RouteType } from '../types/RouteType'

const UsersRoutes: RouteType[] = [
  {
    path: '/',
    exaxt: true,
    component: UserIndex,
  },
  {
    path: '/:id',
    exaxt: false,
    component: UserShow,
  },
  {
    path: '/avatars',
    exaxt: true,
    component: UserAvatarIndex,
  },
]

export default UsersRoutes
