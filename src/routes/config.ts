import Home from '@/pages/Home';

export const RoutesConstants = {
  HOME: '/',
}

export const PublicRoutes = [
  {
    path : RoutesConstants.HOME,
    Component: Home
  }
]
