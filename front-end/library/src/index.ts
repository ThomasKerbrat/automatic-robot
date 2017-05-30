import { Invoice } from 'invoicing-core'

export class InvoicingFrontEndLibrary {
    public invoices: Invoice[] = [
        new Invoice(1, new Date(), '2017-05-0001')
    ]
}
