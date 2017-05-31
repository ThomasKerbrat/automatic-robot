import { Customer } from 'invoicing-core'

export interface ICustomersGateway {
    getCustomers(): Promise<Customer[]>
}
