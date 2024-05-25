import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}
  onDenomination = uniqueId => {
    console.log(uniqueId)
    if (uniqueId === 1) {
      this.setState(prevState => ({balance: prevState.balance - 50}))
    }
    if (uniqueId === 2) {
      this.setState(prevState => ({balance: prevState.balance - 100}))
    }
    if (uniqueId === 3) {
      this.setState(prevState => ({balance: prevState.balance - 200}))
    }
    if (uniqueId === 4) {
      this.setState(prevState => ({balance: prevState.balance - 500}))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="cash-withdrawl-container">
          <div className="user-name-container">
            <p className="user-initial">s</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-container">
              <p className="rupees">{balance}</p>
              <h1 className="rupees-description">In Rupees</h1>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ul">
              {denominationsList.map(eachRupee => (
                <DenominationItem
                  eachDenomination={eachRupee}
                  key={eachRupee.id}
                  onClickDenomination={this.onDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
