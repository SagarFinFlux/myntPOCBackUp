/* tslint:disable:max-line-length */
import { TopNavigationItem } from '@treo/components/navigation';

export const defaultNavigation: TopNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        subtitle: 'Treo Starter Kit',
        type    : 'group',
        icon    : 'apps',
        children: [
            {
                id   : 'starter.example',
                title: 'Example component',
                type : 'basic',
                link : '/example'
            },
            {
                id   : 'starter.dummy.1',
                title: 'Dummy menu item #1',
                type : 'basic'
            },
            {
                id   : 'starter.dummy.2',
                title: 'Dummy menu item #1',
                type : 'basic'
            }
        ]
    }
];
export const compactNavigation: TopNavigationItem[] = [
    {
        id      : 'starter',
        title   : 'Starter',
        type    : 'aside',
        icon    : 'apps',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: TopNavigationItem[] = [
    {
        id   : 'starter.example',
        title: 'Example component',
        type : 'basic',
        icon : 'heroicons:chart-pie',
        link : '/example'
    },
    {
        id   : 'starter.dummy.1',
        title: 'Dummy menu item #1',
        icon : 'heroicons:calendar',
        type : 'basic'
    },
    {
        id   : 'starter.dummy.2',
        title: 'Dummy menu item #1',
        icon : 'heroicons:user-group',
        type : 'basic'
    }
];
export const horizontalNavigation: TopNavigationItem[] = [
    {
        id      : 'dashboard',
        title   : 'Dashboard',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link : '/example'
    },
    {
        id      : 'security',
        title   : 'Security',
        type    : 'basic',
        icon    : 'heroicons_outline:lock-closed'
    },
    {
        id      : 'directory',
        title   : 'Directory',
        type    : 'group',
        icon    : 'iconsmind:box_withfolders',
        children: [
            {
                id   : 'userss',
                title: 'Users',
                type : 'basic',
                icon : 'iconsmind:checked_user',
                link : '/directory'
            },
            {
                id   : 'offices',
                title: 'Offices',
                icon : 'iconsmind:office',
                type : 'basic'
            }
        ]
    },
    {
        id      : 'loanProducts',
        title   : 'Loan Products',
        type    : 'basic',
        icon    : 'iconsmind:box_full'
    },
    {
        id      : 'configuration',
        title   : 'Configuration',
        type    : 'basic',
        icon    : 'iconsmind:settings_window'
    },
    {
        id      : 'dataMigration',
        title   : 'Data Migration',
        type    : 'basic',
        icon    : 'iconsmind:share_oncloud'
    },
    {
        id      : 'monitoring',
        title   : 'Monitoring',
        type    : 'basic',
        icon    : 'iconsmind:monitoring'
    }
];
