import 'mocha'
import { assert } from 'chai'

import { Customer } from 'invoicing-core'

import { ICustomersGateway } from './i-customers.gateway'
import { ICustomersController } from './i-customers.controller'
import { CustomersInteractor } from './customers.interactor'

let sut: CustomersInteractor, gateway: ICustomersGateway, controller: ICustomersController

const customers: Customer[] = [
    new Customer(1, 'client1', null),
    new Customer(2, 'client2', null),
    new Customer(3, 'client3', null),
]

describe('CustomersInteractor', function () {
    beforeEach(function () {
        gateway = {
            getCustomers: function () { return Promise.resolve(customers) }
        }

        controller = {
            setCustomersCollection: function () { }
        }

        sut = new CustomersInteractor(gateway, controller)
    })

    describe('onPageLoad', function () {
        it('should retrieve all the customers from the gateway', function (done) {
            gateway.getCustomers = getCustomers

            sut.onPageLoad()

            function getCustomers() {
                done()
                return null
            }
        })

        it('should set the customers collection in the controller', function (done) {
            controller.setCustomersCollection = setCustomersCollection

            sut.onPageLoad()

            function setCustomersCollection(_customers: Customer[]) {
                assert.isArray(_customers)
                assert.lengthOf(_customers, customers.length)
                customers.forEach(customer => assert.isTrue(_customers.indexOf(customer) !== -1))
                done()
            }
        })
    })

    describe('onNewCustomerClick', function () {
        it('should redirect to the customer creation form')
    })

    describe('onCustomerClick', function () {
        it('should redirect to the customer details page')
    })
})
