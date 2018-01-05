import { h, Component } from 'preact'

import { connect } from 'preact-redux'

import style from './style'
import Item from '../../components/item'

import icons from '../../util/icons.js'
import action from '../../util/action.js'

class CurrencyPage extends Component {
	componentWillMount() {
		this.props.action()
	}

	render() {
		return (
			<div class={style.profile}>
				{this.props.crypto.isFetching
					? <div>Loading...</div>
					:	this.props.crypto.data
						.filter(x => x.symbol === this.props.currency)
						.map(({symbol, name, price_usd, price_eur, percent_change_24h, percent_change_7d}) => (
							<Item
								icon={icons(symbol)}
								name={name}
								short_name={symbol}
								value={price_eur ? price_eur + '€' : '$' + price_usd}
								increase_1={percent_change_24h}
								increase_7={percent_change_7d} />
					))
				}
			</div>
		)
	}
}


export default connect(state => ({ crypto: state }), { action })(CurrencyPage)
