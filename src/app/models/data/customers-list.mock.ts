import { ICustomer } from '../../models/customer.model';

export const Customer_Mock: ICustomer[] = [
    {
        customerID: 1,
        customerName: 'Max',
        customerEmail: 'max@gmai.com',
        customerPhone: '0545969609',
        customerOrders: [
            {
                id: 1,
                product: 'Pens'
            },
            {
                id: 2,
                product: 'Shoes'
            }
        ]
    },
    {
        customerID: 2,
        customerName: 'Lev',
        customerEmail: 'max@gmai.com',
        customerPhone: '0545969609',
        customerOrders: [
            {
                id: 1,
                product: 'Pens'
            }
        ]
    }
];