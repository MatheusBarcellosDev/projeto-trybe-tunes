import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import Container from './styled';

class Profile extends Component {
  constructor() {
    super();

    this.state = ({
      user: {},
      loading: true,
    });
  }

  componentDidMount() {
    this.getProfileUser();
  }

  getProfileUser() {
    getUser()
      .then((data) => {
        this.setState({
          user: data,
          loading: false,
        });
      });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <Container>
        <Header />
        {loading ? <Loading /> : (
          <div data-testid="page-profile" className="container-profile">
            <div className="container-infos">
              <div className="img-profile">
                <img data-testid="profile-image" src={ user.image } alt={ user.name } />
                <Link to="/profile/edit">Editar perfil</Link>
              </div>
              <div className="infos-profile">
                <span>
                  Nome
                  <p>{user.name}</p>
                </span>
                <span>
                  E-mail
                  <p>{user.email}</p>
                </span>
                <span>
                  Descrição
                  <p>{user.description}</p>
                </span>
              </div>

            </div>
          </div>
        )}
      </Container>
    );
  }
}

export default Profile;
