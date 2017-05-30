import { Invoice } from 'invoicing-core';
var InvoicingFrontEndLibrary = (function () {
    function InvoicingFrontEndLibrary() {
        this.invoices = [
            new Invoice(1, new Date(), '2017-05-0001')
        ];
    }
    return InvoicingFrontEndLibrary;
}());
export { InvoicingFrontEndLibrary };
