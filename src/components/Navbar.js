import React, { Component } from 'react'
import Identicon from 'react-identicons';
import kyotoNetwork from '../carbondex.png';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-grey flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.carbondex.exchange"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kyotoNetwork} height='48' alt=""/>
        </a>
        <ul className="navbar-nav px-3 text-white">
            { ! this.props.account
              ? <div className="row text-center text-monospace">    
                  <button
                    type="submit"
                    onClick={(e) => this.props.on(e)}
                    className="btn btn-success btn-sm"
                    style={{ width: '125px', fontSize: '17px'}}
                    ><b>Connect</b>
                  </button>&nbsp;
                </div>
              : 
              <div className="row text-center text-monospace">
                    <span style={{fontSize: '12px', margin: 'auto', color: 'black'}}>
                      {this.props.account}&emsp;
                    </span>
                    <Identicon string={this.props.account} size="30" className='align-text-bottom' bg='#343A40'/>&nbsp;
                </div>
            }
          </ul>
      </nav>
    );
  }
}

export default Navbar;
