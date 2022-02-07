export interface User {
    id?: number;
    First_Name?: string;
    Last_Name?: string;
    Email?: string;
    User_Name?: string;
    Password?: string;
    Home_state_code?: string;
    IsLoggedIn?: boolean;
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