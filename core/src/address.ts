export class Address {
    constructor (
        public readonly id: number,
        public lines: string,
        public zipCode: string,
        public city: string,
        public country?: string,
    ) { }
}
