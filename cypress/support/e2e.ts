import './commands'
// import 'cypress-wait-until'
// import 'cypress-plugin-stripe-elements'

Cypress.on('uncaught:exception', (err, runnable) => {
	expect(err.message).to.include(
		'The following error originated from your application code, not from Cypress'
	)

	return false
})
