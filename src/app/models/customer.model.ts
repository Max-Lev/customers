export interface ICustomer {
    customerID: number;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    customerOrders?: [{
        id: number,
        product: string
    }];
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
    order_id?: number;
    order_name?: string;
    is_selected?: boolean;
    is_deleted?: boolean;
};

export class Order implements IOrder {
    order_id: number;
    order_name: string;
    is_selected: any;
    is_deleted: boolean;
    constructor(order: IOrder) {
        this.order_id = order.order_id;
        this.order_name = order.order_name;
        this.is_selected = order.is_selected;
        this.is_deleted = order.is_deleted;
    }
};