
export interface Roles {
    enfermera?: boolean;
    doctores?: boolean;
    admin?: boolean
}

export interface User{
    uid?: string;
    email?: string;
    roles?: Roles;

}