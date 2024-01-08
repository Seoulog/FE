import Landing from '../pages/landing';
import Login from '../pages/login';
import Redirect from '../pages/login/Redirect';
import Register from '../pages/register';
import RegisterRedirect from '../pages/register/RegisterRedirect';
import FindPassword from '../pages/help/password';
import Home from '../pages/home';

const router = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/login/redirect/*',
    element: <Redirect />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/register/redirect/*',
    element: <RegisterRedirect />
  },
  {
    path: '/help/password',
    element: <FindPassword />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
];

export default router;
