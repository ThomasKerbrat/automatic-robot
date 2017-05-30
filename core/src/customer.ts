import { Address } from './address'

export class Customer {
    constructor(
        public readonly id: number,
        public name: string,
        public address: Address,
    ) { }
}
