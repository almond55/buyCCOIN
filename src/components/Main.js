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
        balance={this.props.balance}
        buyTokens={this.props.buyTokens}
        loading={this.props.loading}
      />
    }

    return (
      <div id="content" className="mt-3">
        <div>
          <br></br>
          <h1 className="text-black text-center">Buy CCOIN</h1>
          <br></br>
          <br></br>
        </div>
        <div className="card mb-4" >
          <div className="card-body">
            {content}
          </div>
        </div>
        
      </div>
    );
  }
}

export default Main;
