import { 
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'general',
  path: `${APP_PREFIX_PATH}/generals`,
  title: 'sidenav.generals',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/generals/dashboard`,
      title: 'sidenav.generals.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
    key: 'catalog',
    path: `${APP_PREFIX_PATH}/generals/catalog`,
    title: 'sidenav.generals.catalog',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'orders',
    path: `${APP_PREFIX_PATH}/generals/orders`,
    title: 'sidenav.generals.orders',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'clients',
    path: `${APP_PREFIX_PATH}/generals/clients`,
    title: 'sidenav.generals.clients',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'banners',
    path: `${APP_PREFIX_PATH}/generals/banners`,
    title: 'sidenav.generals.banners',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'promocodes',
    path: `${APP_PREFIX_PATH}/generals/promocodes`,
    title: 'sidenav.generals.promocodes',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'offline_places',
    path: `${APP_PREFIX_PATH}/generals/offline_places`,
    title: 'sidenav.generals.offline_places',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'employess',
    path: `${APP_PREFIX_PATH}/generals/employees`,
    title: 'sidenav.generals.employees',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'distribution',
    path: `${APP_PREFIX_PATH}/generals/distribution`,
    title: 'sidenav.generals.distribution',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  }]
},


]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
