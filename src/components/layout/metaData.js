import { icons } from '../../Constant'
export const footerMenu = [

    {
        label: 'Home',
        iconOutline: icons?.homeOutLine,
        iconFilled: icons?.homeFilled,
        access: 'user',
        route: '/home'
    },
    // {
    //     label: 'Group',
    //     iconOutline: icons?.groupOutline,
    //     iconFilled: icons?.groupFilled,
    //     access: 'user',
    //     route: '/group'
    // },
    {
        label: 'Favourite',
        iconOutline: icons?.heartOutline,
        iconFilled: icons?.heartFilled,
        access: 'user',
        route: '/favourite'
    },
    {
        label: 'Profile',
        iconOutline: icons?.profileOutline,
        iconFilled: icons?.profileFilled,
        access: 'user',
        route: '/profile'
    },
    {
        label: 'Profile',
        iconOutline: icons?.profileOutline,
        iconFilled: icons?.profileFilled,
        access: 'admin',
        route: '/profil'
    },

]