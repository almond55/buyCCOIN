import React, { Component } from 'react'
import ethLogo from '../USDC.png'
import tokenLogo from '../CCOIN.png'
//import Web3 from 'web3'

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let tokenAmount
          tokenAmount = this.input.value.toString()
          this.props.buyTokens(tokenAmount)
        }}>
        <div className="input-group mb-4">
          <input
            type="text"
            onChange={(event) => { 
              const tokenAmount = this.input.value.toString()
              this.setState({
                output: tokenAmount * 20
              })
            }}
            ref={(input) => { this.input = input }}
            className="form-control form-control-lg"
            placeholder="0"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={ethLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; USDC
            </div>
          </div>
        </div>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            value={this.state.output}
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={tokenLogo} height='32' alt=""/>
              &nbsp; CCOIN
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">1 USDC = 20 CCOIN</span>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg" span style={{backgroundColor: "black"}}>
          SWAP!
          </button>
        <div>
          <br></br>
          Your token balance: {this.props.balance} CCOIN
        </div>
      </form>
    );
  }
}



export default BuyForm;
