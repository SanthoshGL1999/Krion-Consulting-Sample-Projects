export declare class Users {
    id: number;
    username: string;
    password: string;
    validatePassword(password: string): Promise<boolean>;
}
