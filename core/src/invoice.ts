import { Customer } from './customer'

export class Invoice {
    constructor(
        public readonly id: number,
        public issueDate: Date,
        public serialNumber: string,
        public saleDate?: Date,
        public customer?: Customer,
    ) { }
}
