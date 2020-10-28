import { ProductsContainer } from '../../Components/index'

export const unauthorized = [
  {
    path: '/',
    component: ProductsContainer,
    exact: true,
  },
  {
    path: '/basket',
    component: ProductsContainer,
    exact: true,
  },
]
