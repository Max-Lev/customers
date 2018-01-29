import { ICustomer } from '../../models/customer.model';

export const Customer_Mock: ICustomer[] = [
    {
        Customer_ID: 1,
        Customer_Name: 'Nicky',
        Customer_Orders: [
            {
                order_name: 'Shoes',
                order_id: 1,
                is_deleted: false,
                is_selected: false
            },
            {
                order_name: 'TShirts',
                order_id: 2,
                is_deleted: false,
                is_selected: true
            },
            {
                order_name: 'Pens',
                order_id: 3,
                is_deleted: false,
                is_selected: false
            },
            {
                order_name: 'Socks',
                order_id: 4,
                is_deleted: false,
                is_selected: true
            }
        ]
    },
    {
        Customer_ID: 2,
        Customer_Name: 'Reebok',
        Customer_Orders: [
            {
                order_name: 'Pens',
                order_id: 1,
                is_deleted: false,
                is_selected: false
            }
        ]
    }
];