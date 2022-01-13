import React, { Component } from 'react';
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
      </header>
    );
  }
}

export default Header;
