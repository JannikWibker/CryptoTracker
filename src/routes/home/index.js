import { h, Component } from 'preact'

import { connect } from 'preact-redux'
import { Link } from 'preact-router/match';

import style from './style'
import Item from '../../components/item'

import icons from '../../util/icons.js'
import action from '../../util/action.js'

class Home extends Component {
	componentWillMount() {
		this.props.action()
	}

	render() {
		console.log(this.props.crypto)
		return (
			<div class={style.home}>
				{this.props.crypto.isFetching
					? <div>Loading...</div>
					: this.props.crypto.data.map(({symbol, name, price_usd, price_eur, percent_change_24h, percent_change_7d}) => (
						<Link class={style.link} href={'/currency/' + symbol}>
							<Item
							icon={icons(symbol)}
							name={name}
							short_name={symbol}
							value={price_eur ? price_eur + '€' : '$' + price_usd}
							increase_1={percent_change_24h}
							increase_7={percent_change_7d} />
						</Link>
					))
				}
			</div>
		)
	}
}

export default connect(state => ({ crypto: state }), { action })(Home)
