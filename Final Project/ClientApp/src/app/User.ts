export interface User {
    id?: number;
    first_Name?: string;
    last_Name?: string;
    email?: string;
    user_Name?: string;
    password?: string;
    home_state_code?: string;
    isLoggedIn?: boolean;
}

export class Convert {
    public static toUser(json: string): User {
        return JSON.parse(json);
    }

    public static userToJson(value: User): string {
        return JSON.stringify(value);
    }
    public static toUserArray(json: string): User[] {
        return JSON.parse(json);
    }
    public static userArrayToJson(value: User[]): string {
        return JSON.stringify(value);
    }
}