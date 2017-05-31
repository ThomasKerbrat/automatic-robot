import {
    ICustomersGateway,
    ICustomersController,
    CustomersInteractor,
} from './customers'

export class InvoiceFrontEndLibrary {
    public constructor(
        private customersGateway: ICustomersGateway,
        private customersController: ICustomersController,
    ) { }

    private _customersInteractor: CustomersInteractor = null
    public get CustomersInteractor(): CustomersInteractor {
        if (this._customersInteractor === null) {
            this._customersInteractor = new CustomersInteractor(
                this.customersGateway,
                this.customersController,
            )
        }
        return this._customersInteractor
    }
}
