export interface UserDetails {
    username: string;
    userId: number;
    authenticated: boolean;
    officeId: number;
    officeName: string;
    staffId: number;
    staffDisplayName: string;
    roles: any[];
    permissions: any[];
    shouldRenewPassword: boolean;
    firstname: string;
}