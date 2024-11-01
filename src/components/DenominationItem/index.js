import './index.css'

const DenominationItem = props => {
  const {updateBalance, denominations} = props
  const {value} = denominations
  const amountWithdrawal = () => {
    updateBalance(value)
  }
  return (
    <li className="list-container">
      <button onClick={amountWithdrawal} className="btn" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
