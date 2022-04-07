import PostIndex from '../components/pages/posts/PostIndex'
import PostShow from '../components/pages/posts/PostShow'
import { RouteType } from '../types/RouteType'

const PostsRoutes: RouteType[] = [
  {
    path: '/',
    exaxt: true,
    component: PostIndex,
  },
  {
    path: '/:id',
    exaxt: false,
    component: PostShow,
  },
]

export default PostsRoutes
