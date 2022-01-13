import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

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

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{user.name}</p>
        <li>
          <ul>
            <Link
              data-testid="link-to-search"
              to="/search"
            >
              Pesquisa

            </Link>
          </ul>
          <ul>
            <Link
              to="/favorites"
              data-testid="link-to-favorites"
            >
              Favoritas

            </Link>
          </ul>
          <ul>
            <Link
              to="/profile"
              data-testid="link-to-profile"
            >
              Perfil

            </Link>
          </ul>
        </li>
      </header>
    );
  }
}

export default Header;
