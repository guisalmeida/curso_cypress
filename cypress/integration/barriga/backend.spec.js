/// <reference types="cypress" />

describe('Should test at backend level', () => {
    let token

    before(() => {
        cy.getToken("guisalmeida.dev@gmail.com", "guidev")
            .then(responseToken => {
                token = responseToken
            })
    })

    beforeEach(() => {
        // cy.resetApp()
    })

    it('Should get token with login', () => {
        cy.getToken("guisalmeida.dev@gmail.com", "guidev")
    })

    it('Should add account', () => {
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta via rest'
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
    })

    it('Update an account', () => {
    })

    it('Should not create an account with the same name', () => {
    })

    it('Should create a transaction', () => {
    })

    it('Should get balance', () => {
    })

    it('Should remove a transaction', () => {
    })
})