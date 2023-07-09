import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
    state = {count: 0}

    randomInc = () => Math.ceil(Math.random() * 100)

    onIncrement = () => {
        const randomNo = this.randomInc()
        this.setState({count: randomNo})
    }

    render() {
        const {count} = this.state
        const countText = count % 2 === 0 ? "Even" : "Odd"
        return (
            <div className="container">
                <h1 className="heading">Count {count}</h1>
                <p className="count-text">Count is {countText}</p>
                <button className="button" type="button" onClick={this.onIncrement}>Increment</button>
                <p className="note">*Increase By Random Number Between 0 to 100</p>
            </div>
        )
    }
}

export default EvenOddApp