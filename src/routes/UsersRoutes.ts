import UserIndex from '../components/pages/users/UserIndex'
import UserShow from '../components/pages/users/UserShow'
import UserAvatarIndex from '../components/pages/users/UserAvatarIndex'
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
