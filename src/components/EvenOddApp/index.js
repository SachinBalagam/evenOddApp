// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    const number = Math.round(Math.random() * 100)
    if (number % 2 === 0) {
      this.setState({count: number, isEven: true})
    } else {
      this.setState({count: number, isEven: false})
    }
  }

  render() {
    const {count, isEven} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="description">Count is {isEven ? 'Even' : 'Odd'}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="tag">* Increase By Random Number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
