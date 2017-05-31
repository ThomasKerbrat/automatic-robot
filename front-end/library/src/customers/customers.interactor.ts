// import { Customer } from 'invoicing-core'
import { ICustomersGateway } from './i-customers.gateway'
import { ICustomersController } from './i-customers.controller'

export class CustomersInteractor {
    public constructor(
        private gateway: ICustomersGateway,
        private controller: ICustomersController,
    ) { }

    public onPageLoad() {
        this.gateway.getCustomers()
            .then(customers => {
                this.controller.setCustomersCollection(customers)
            })
    }
}
