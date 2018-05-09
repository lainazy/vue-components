const Button = () => import('@/components/Button/docs');
const Dialog = () => import('@/components/Dialog/docs');
const IconText = () => import('@/components/IconText/docs');

const docRoutes = [
  {
    path: '/button',
    name: 'Button',
    component: Button,
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog,
  },
  {
    path: '/iconText',
    name: 'IconText',
    component: IconText,
  },
];

export default docRoutes;
