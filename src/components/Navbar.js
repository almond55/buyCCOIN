import React, { Component } from 'react'
import Identicon from 'identicon.js';
import kyotoNetwork from '../KyotoSwapHeader.png';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.kyotocoin.io/private-sale/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kyotoNetwork} height='48' alt=""/>
        </a>

        <ul className="navbar-nav px-3 text-white">
            { ! this.props.account && ! this.props.loading
              ? <div className="row text-center text-monospace">
                  <button
                    type="submit"
                    onClick={(e) => this.props.on(e)}
                    className="btn btn-outline-success btn-sm"
                    style={{ width: '125px', fontSize: '17px'}}
                    ><b>Connect</b>
                  </button>&nbsp;
                </div>
              : ! this.props.account && this.props.loading
                ? <div className="row text-center text-monospace">
                    <button
                      type="submit"
                      className="btn btn-outline-success btn-sm"
                      style={{ width: '125px', fontSize: '17px'}}
                      disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="sr-only">Loading...</span>
                    </button>&nbsp;
                  </div>
                : <div className="row text-center text-monospace">
                    <button
                      type="submit"
                      onClick={(e) => this.props.off(e)}
                      className="btn btn-outline-danger btn-sm"
                      style={{ width: '125px', fontSize: '17px'}}
                      >Disconnect
                    </button>&nbsp;
                  </div>
            }
          </ul>
      </nav>
    );
  }
}

export default Navbar;
