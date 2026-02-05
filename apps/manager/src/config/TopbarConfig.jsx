import { FiTruck, FiUser, FiInfo } from 'react-icons/fi';

export const TOPBAR_CONFIG = {
  leftActions: [
    {
      label: 'Active Orders',
      route: '/orders/active',
      className: 'active-oder-icon',
      icon: <FiTruck className='nav-icon' />
    },
  ],
  rightActions: [
    {
      label: 'Alerts',
      route: '',
      className: '',
      icon: <FiInfo className='nav-icon' />
    },
    {
      label: 'Profile',
      route: '/settings/profile',
      className: '',
      icon: <FiUser className='nav-icon' />
    },
  ]
};