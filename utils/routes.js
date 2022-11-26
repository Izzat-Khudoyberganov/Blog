import Reviews from "../pages/Reviews"
import News from "../pages/News"
import PageNotFound from "../pages/PageNotFound"

export const routes = [
  {
    id: 1,
    path: "/reviews",
    component: Reviews,
  },
  {
    id: 2,
    path: "/news",
    component: News,
  },
  {
    id: 3,
    path: "*",
    component: PageNotFound,
  },
]
