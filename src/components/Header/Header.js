import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { getUser } from '../../services/userAPI';
import Loading from '../../pages/Loading/Loading';

import Container from './styled';

import Group1 from './assets/Group1.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: false,
    };

    this.getNameUser = this.getNameUser.bind(this);
  }

  componentDidMount() {
    this.getNameUser();
  }

  async getNameUser() {
    this.setState({ isLoading: true });

    const user = await getUser();
    this.setState({
      user,
      isLoading: false,
    });
  }

  isActive() {
    document.querySelectorAll('.link').forEach((link) => {
      link.classList.add('active');
    });
  }

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <Container data-testid="header-component">

        <div className="header-top">

          <div className="logo">
            <img src={ Group1 } alt="logo" />
          </div>

          <div className="user">
            <span className="icon"><VscAccount /></span>
            <p className="nameUser" data-testid="header-user-name">{user.name}</p>
          </div>

        </div>
        <div className="links-navigation">
          <li>
            <ul>
              <NavLink
                className={ ({ isActive }) => (isActive ? 'active' : '') }
                data-testid="link-to-search"
                to="/search"
              >
                Pesquisa

              </NavLink>
            </ul>
            <ul>
              <NavLink
                className={ ({ isActive }) => (isActive ? 'active' : '') }
                to="/favorites"
                data-testid="link-to-favorites"
                onClick={ () => this.isActive() }
              >
                Favoritas

              </NavLink>
            </ul>
            <ul>
              <NavLink
                className="link"
                to="/profile"
                data-testid="link-to-profile"
                onClick={ () => this.isActive() }
              >
                Perfil

              </NavLink>
            </ul>
          </li>

        </div>

      </Container>
    );
  }
}

export default Header;
