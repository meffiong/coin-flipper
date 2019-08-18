import React, { Component } from 'react'
import {choice} from './helpers'
import './CoinContainer.css'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgUrl:'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', imgUrl:'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    }

    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    
    flipCoin(){
        const newCoin = choice(this.props.coins)
        console.log(newCoin)
        this.setState(st => {
            return{
                nFlips: st.nFlips + 1,
                currCoin: newCoin,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0 ),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0 )
            }
        });
    }

    handleClick(){
        this.flipCoin()
    }

    render() {
        return (
            <div className="coinContainer">
                <h1>Flip a coin!</h1>
                {this.state.currCoin && <p>It's a {this.state.currCoin.side}, Flip again!</p>}
                {this.state.currCoin && <img src={this.state.currCoin.imgUrl} />}
                <p>{this.state.nFlips} total flips, {this.state.nHeads} heads and {this.state.nTails} tails.</p>
                <button onClick={this.handleClick}>Flip Coin!</button>
            </div>
        )
    }
}

export default CoinContainer;