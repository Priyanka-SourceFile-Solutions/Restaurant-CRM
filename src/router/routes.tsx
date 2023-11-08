import { lazy } from 'react';
import ForgotPassword from '../auth/ForgotPassword';
const Index = lazy(() => import('../pages/Index'));
//Auth
const Login = lazy(() => import('../auth/Login'));

//Location
const Location = lazy(() => import('../saloon/Location'));

//Category
const Category = lazy(() => import('../saloon/Category'));

//Product
const Product = lazy(() => import('../saloon/Product'));

//Service
const Service = lazy(() => import('../saloon/Service'));

//Coupon
const Coupon = lazy(() => import('../saloon/Coupon'));

//Employee
const Employee = lazy(() => import('../saloon/Employee'));

//Customer
const Customer = lazy(() => import('../saloon/Customer'));

//Booking
const Booking = lazy(() => import('../saloon/Booking'));

const BookingCalender = lazy(() => import('../saloon/BookingCalender'));

//Setting
const Settings = lazy(() => import('../setting/GeneralSettings'));

const routes = [
    //Authentication
    {
        path: '/',
        element: <Login />,
        layout: 'blank',
    },

    {
        path: '/forgot-password',
        element: <ForgotPassword />,
        layout: 'blank',
    },

    //dashboard
    {
        path: '/home',
        element: <Index />,
        layout: 'default',
    },

    {
        path: '/location',
        element: <Location />,
        layout: 'default',
    },

    {
        path: '/categories',
        element: <Category />,
        layout: 'default',
    },

    {
        path: '/products',
        element: <Product />,
        layout: 'default',
    },
    {
        path: '/services',
        element: <Service />,
        layout: 'default',
    },
    {
        path: '/coupon',
        element: <Coupon />,
        layout: 'default',
    },
    {
        path: '/employee',
        element: <Employee />,
        layout: 'default',
    },
    {
        path: '/customer',
        element: <Customer />,
        layout: 'default',
    },
    {
        path: '/bookings',
        element: <Booking />,
        layout: 'default',
    },
    {
        path: '/bookingcalender',
        element: <BookingCalender />,
        layout: 'default',
    },

    {
        path: '/settings',
        element: <Settings />,
        layout: 'default',
    },
];

export { routes };
