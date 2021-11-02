import React, { Component } from 'react'
import BuyForm from './BuyForm'
//import SellForm from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    }

    return (
      <div id="content" className="mt-3">
        <div>
          <br></br>
          <h1 className="text-white text-center">KyotoSwap</h1>
          <br></br>
          <br></br>
        </div>
        <div className="card mb-4" >
          <div className="card-body">
            {content}
          </div>
        </div>
        <div className="card mb-4" >
          <div className="card-body">
            *PLEASE READ BEFORE DOING THE SWAP* <br/><br/>
            This KyotoSwap App is a decentralized application or DApp. <br/><br/> Desktop and Laptop user can connect to this DApp using your Metamask wallet. Mobile user (non IOS) can connect using your Trust Wallet or Metamask mobile app.<br/><br/>Please make sure that you change your wallet network to 'Smart Chain' and the public address shown beside the identicon matches your wallet address before you make the swap<br/><br/>User can only swap BUSD (Binance-Peg BUSD Token, token address: 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56) for Kyotocoin (KYO, token address: 0xaEBC9EbDd1CD6808b632aA675eA571EEddD0C5b4).<br/><br/>User who does not have BUSD can purchase it by using your credit/debit card on Moonpay.com, please make sure to select 'BUSD - Binance USD (BEP-20)'.
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
