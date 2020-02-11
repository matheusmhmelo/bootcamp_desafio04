import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <h1 className="header-title">facebook</h1>
        <div className="profile">
          <span>
            <b>Meu Perfil</b>
          </span>
          <i className="material-icons">account_circle</i>
        </div>
      </header>
    )
  }
}

export default Header;
