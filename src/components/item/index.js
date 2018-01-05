import { h, Component } from 'preact'
import style from './style'

export default ({ icon, name, short_name, value, increase_1, increase_7 }) => (
      <div class={style.item}>
        <div class={style.upper}>
          <img src={icon} class={style.image} />
          <span class={style.short_name}>{short_name}</span>
          <span class={style.seperator}>|</span>
          <span class={style.name}>{name}</span>
          <span class={style.value}>
            {value}
          </span>
        </div>
        <div class={style.lower}>
          <span class={style.increase_1}>24h:
            <span class={increase_1 < 0 ? style.negative : style.positive}>{increase_1}%</span>
          </span>
          <span class={style.increase_7}>7d:
            <span class={increase_7 < 0 ? style.negative : style.positive}>{increase_7}%</span>
          </span>
        </div>
      </div>
    )
