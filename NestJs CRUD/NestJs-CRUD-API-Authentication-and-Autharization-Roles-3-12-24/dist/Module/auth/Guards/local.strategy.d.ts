import { Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
declare const localStratagy_base: new (...args: any[]) => Strategy;
export declare class localStratagy extends localStratagy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
