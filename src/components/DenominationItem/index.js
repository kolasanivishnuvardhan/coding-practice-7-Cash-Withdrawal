import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {eachDenomination, onClickDenomination} = this.props
    const {value, id} = eachDenomination
        
    const availableBalance = () => {
      onClickDenomination(id)
    }
    return (
      <li>
        <button className="btn" type="button" onClick={availableBalance}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
