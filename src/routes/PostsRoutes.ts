import PostIndex from '../pages/posts/PostIndex'
import { RouteType } from '../types/RouteType'

const PostsRoutes: RouteType[] = [
  {
    path: '/',
    exaxt: true,
    component: PostIndex,
  },
]

export default PostsRoutes
