import React from 'react';
import Loader from '../components/Loader';
const HomePage = React.lazy(() => import('../components/Home'))
const TheMovie = React.lazy(() => import('../components/TheMovie'))
const ThePerson = React.lazy(() => import('../components/ThePerson'))
const SearchMovie = React.lazy(() => import('../components/SearchMovie'))

// Logo
// import logo from "../assets/logo.png";
// export const LogoImg = logo;

export const navbar = [
  {
    id: 1,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <HomePage/>
      </React.Suspense>
    ),
    title: 'Home',
    path: '/en',
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <TheMovie/>
      </React.Suspense>
    ),
    title: 'Movie',
    path: '/m/:id',
    private: false,
    hidden: true,
  },
  {
    id: 3,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <SearchMovie/>
      </React.Suspense>
    ),
    title: 'All movies',
    path: '/movies',
    private: false,
    hidden: false,
  },
  {
    id: 4,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <ThePerson/>
      </React.Suspense>
    ),
    title: 'Person',
    path: '/p/:id',
    private: false,
    hidden: true,
  }
];