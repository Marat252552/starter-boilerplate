import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const generalsNavTree = [{
  key: 'generals',
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
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [{
        key: 'items',
        path: `${APP_PREFIX_PATH}/generals/catalog/items`,
        title: 'sidenav.generals.catalog.items',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'categories',
        path: `${APP_PREFIX_PATH}/generals/catalog/categories`,
        title: 'sidenav.generals.catalog.categories',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'collections',
        path: `${APP_PREFIX_PATH}/generals/catalog/collections`,
        title: 'sidenav.generals.catalog.collections',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'combo',
        path: `${APP_PREFIX_PATH}/generals/catalog/combo`,
        title: 'sidenav.generals.catalog.combo',
        icon: '',
        breadcrumb: false,
        submenu: []
      }
    ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/generals/orders`,
      title: 'sidenav.generals.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/generals/clients`,
      title: 'sidenav.generals.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'clients_list',
          path: `${APP_PREFIX_PATH}/generals/clients/clients_list`,
          title: 'sidenav.generals.clients.clients_list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'clients_groups',
          path: `${APP_PREFIX_PATH}/generals/clients/clients_groups`,
          title: 'sidenav.generals.clients.clients_groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/generals/banners`,
      title: 'sidenav.generals.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/generals/promocodes`,
      title: 'sidenav.generals.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline_places',
      path: `${APP_PREFIX_PATH}/generals/offline_places`,
      title: 'sidenav.generals.offline_places',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'adresses',
          path: `${APP_PREFIX_PATH}/generals/offline_places/adresses`,
          title: 'sidenav.generals.offline_places.adresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'geozones',
          path: `${APP_PREFIX_PATH}/generals/offline_places/geozones`,
          title: 'sidenav.generals.offline_places.geozones',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'employess',
      path: `${APP_PREFIX_PATH}/generals/employees`,
      title: 'sidenav.generals.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'distribution',
      path: `${APP_PREFIX_PATH}/generals/distribution`,
      title: 'sidenav.generals.distribution',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }]
},


]
const systemsNavTree = [{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'sidenav.systems',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/systems/settings`,
      title: 'sidenav.systems.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobile_app',
      path: `${APP_PREFIX_PATH}/systems/mobile_app`,
      title: 'sidenav.systems.mobile_app',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/systems/logs`,
      title: 'sidenav.systems.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
    ]
},
]

const navigationConfig = [
  ...generalsNavTree,
  ...systemsNavTree
]


export default navigationConfig;
