// To parse this data:
//
//   import { Convert, Post } from "./file";
//
//   const post = Convert.toPost(json);

export interface Park {
    total?: string;
    limit?: string;
    start?: string;
    data?: Datum[];
}

export interface Datum {
    id?: string;
    url?: string;
    fullName?: string;
    parkCode?: string;
    description?: string;
    latitude?: string;
    longitude?: string;
    latLong?: string;
    activities?: Activity[];
    topics?: Activity[];
    states?: string;
    contacts?: Contacts;
    entranceFees?: Entrance[];
    entrancePasses?: Entrance[];
    fees?: any[];
    directionsInfo?: string;
    directionsUrl?: string;
    operatingHours?: OperatingHour[];
    addresses?: Address[];
    images?: Image[];
    weatherInfo?: string;
    name?: string;
    designation?: string;
}

export interface Activity {
    id?: string;
    name?: string;
}

export interface Address {
    postalCode?: string;
    city?: string;
    stateCode?: string;
    line1?: string;
    type?: string;
    line3?: string;
    line2?: string;
}

export interface Contacts {
    phoneNumbers?: PhoneNumber[];
    emailAddresses?: EmailAddress[];
}

export interface EmailAddress {
    description?: string;
    emailAddress?: string;
}

export interface PhoneNumber {
    phoneNumber?: string;
    description?: string;
    extension?: string;
    type?: string;
}

export interface Entrance {
    cost?: string;
    description?: string;
    title?: string;
}

export interface Image {
    credit?: string;
    title?: string;
    altText?: string;
    caption?: string;
    url?: string;
}

export interface OperatingHour {
    exceptions?: Exception[];
    description?: string;
    standardHours?: Hours;
    name?: string;
}

export interface Exception {
    exceptionHours?: Hours;
    startDate?: Date;
    name?: string;
    endDate?: Date;
}

export interface Hours {
    wednesday?: Day;
    monday?: Day;
    thursday?: Day;
    sunday?: Day;
    tuesday?: Day;
    friday?: Day;
    saturday?: Day;
}

export enum Day {
    AllDay = "All Day",
    Closed = "Closed",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPost(json: string): Park {
        return JSON.parse(json);
    }

    public static postToJson(value: Park): string {
        return JSON.stringify(value);
    }
}
