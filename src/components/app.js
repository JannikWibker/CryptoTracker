import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Provider, connect } from 'preact-redux'

import store from '../util/store.js'

import Header from './header'
import Home from '../routes/home'
import CurrencyPage from 'async!../routes/currencypage'

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<CurrencyPage path="/currency/:currency" />
					</Router>
				</div>
			</Provider>
		)
	}
}
