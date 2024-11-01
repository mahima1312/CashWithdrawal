import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="withdrawal-container">
          <div className="name-container">
            <p className="name-icon">{initial}</p>
            <p className="name">{name}</p>
          </div>

          <div className="balance-withdrawal-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="values-container">
            {denominationsList.map(eachvalue => (
              <DenominationItem
                updateBalance={this.updateBalance}
                denominations={eachvalue}
                key={eachvalue.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
