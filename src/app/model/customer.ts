import { Address } from "src/app/model/address";

export class Customer {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    zip: Address["zip"] = 0;
    country: Address["country"] = '';
    city: Address["city"] = '';
    street: Address["street"] = '';
    active: boolean = true;
}
