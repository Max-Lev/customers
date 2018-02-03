export interface ICustomer {
    customerID: number;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerOrders?: [Order];
};

export class Customer implements ICustomer {

    customerID: number;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerOrders: [{ id: number; product: string; }];
    constructor(customer: ICustomer) {
        this.customerID = customer.customerID;
        this.customerName = customer.customerName;
        this.customerPhone = customer.customerPhone;
        this.customerEmail = customer.customerEmail;
        this.customerOrders = customer.customerOrders;
    };
};

export interface IOrder {
    id?: number;
    product?: string;
};

export class Order implements IOrder {
    id: number;
    product: string;
    constructor(order: IOrder) {
        this.id = order.id;
        this.product = order.product;
    }
};