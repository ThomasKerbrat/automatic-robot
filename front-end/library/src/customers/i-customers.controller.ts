import { Customer } from 'invoicing-core'

export interface ICustomersController {
    setCustomersCollection(customers: Customer[]): void
}
