import { createBrowserRouter } from 'react-router-dom';
 import { Card } from '../components/HotelList/Card';
import { ErrorPage, HomePage, Hotels, About, HotelItem } from '../pages';

const routerConfig = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      {
        path: 'hotels',
        children: [
          { index: true, element: <Hotels /> },
          { path: ':id', element: <HotelItem/>},
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);