export interface ICustomer {
    Customer_ID: number;
    Customer_Name: string;
    Customer_Orders: IOrder[];
};

export class Customer implements ICustomer {
    Customer_ID: number;
    Customer_Name: string;
    Customer_Orders: IOrder[];
    constructor(customer: ICustomer) {
        this.Customer_ID = customer.Customer_ID;
        this.Customer_Name = customer.Customer_Name;
        this.Customer_Orders = customer.Customer_Orders;
    };
};

export interface IOrder {
    order_id: number;
    order_name: string;
    is_selected: boolean;
    is_deleted: boolean;
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