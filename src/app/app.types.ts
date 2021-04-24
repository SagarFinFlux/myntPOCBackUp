import { TopNavigationItem } from '@treo/components/navigation';
import { Message } from 'app/layout/common/messages/messages.types';
import { Notification } from 'app/layout/common/notifications/notifications.types';
import { Shortcut } from 'app/layout/common/shortcuts/shortcuts.types';
import { User } from 'app/core/user/user.model';

export interface InitialData
{
    messages: Message[];
    navigation: {
        compact: TopNavigationItem[],
        default: TopNavigationItem[],
        futuristic: TopNavigationItem[],
        horizontal: TopNavigationItem[]
    };
    notifications: Notification[];
    shortcuts: Shortcut[];
    user: User;
}
