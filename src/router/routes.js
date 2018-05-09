import docRoutes from './routes.doc';

const Layout = () => import('@/views/Layout');
const Doc = () => import('@/views/Doc');

const routes = [
  {
    path: '/',
    redirect: {
      path: '/doc',
    },
  },
  {
    path: '/doc',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: {
          path: '/doc/dialog',
        },
      },
      {
        path: '/doc/:component',
        component: Doc,
      },
    ],
  },
];

Array.prototype.push.apply(routes, docRoutes);

export default routes;
