import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import { getUser, updateUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';
import Container from './styled';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
        email: '',
        description: '',
        image: '',
      },
      loading: true,
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateProfileUser = this.updateProfileUser.bind(this);
  }

  componentDidMount() {
    this.getProfileUser();
  }

  handleValidation() {
    const { user } = this.state;
    const { name, email, description, image } = user;
    const isValid = name !== '' && email !== '' && description !== '' && image !== '';
    this.setState({
      disabled: !isValid,
    });
  }

  handleChange({ target }) {
    const { user } = this.state;
    const { name, value } = target;
    this.setState(
      {
        user: {
          ...user,
          [name]: value,
        },
      },
      this.handleValidation,
    );
  }

  getProfileUser() {
    getUser().then((data) => {
      this.setState({
        user: data,
        loading: false,
      });
    });
  }

  updateProfileUser() {
    this.setState({
      loading: true,
    });
    const { user } = this.state;
    const { history } = this.props;
    updateUser(user).then(() => {
      history.push('/profile');
    });
  }

  render() {
    const { user, loading, disabled } = this.state;
    return (
      <Container data-testid="page-profile-edit">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <div className="container-profile-edit">
            <h1> Editar perfil</h1>
            <form>
              <label htmlFor="perfilImage" className="avatar">
                <span><FaUserCircle /></span>
                <input
                  placeholder="URL da imagem de perfil"
                  data-testid="edit-input-image"
                  value={ user.image }
                  type="text"
                  id="perfilImage"
                  name="image"
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="perfilName" className="inputs">
                Nome
                <span>Fique à vontade para usar seu nome social</span>
                <input
                  data-testid="edit-input-name"
                  value={ user.name }
                  type="text"
                  id="perfilName"
                  name="name"
                  onChange={ this.handleChange }
                  maxLength="15"
                  placeholder="Nome"
                />
              </label>
              <label htmlFor="perfilEmail" className="inputs">
                Email
                <span>Escolha um e-mail que consulte diariamente</span>
                <input
                  data-testid="edit-input-email"
                  value={ user.email }
                  type="text"
                  id="perfilEmail"
                  name="email"
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="perfilDescription" className="inputs">
                Descrição
                <textarea
                  data-testid="edit-input-description"
                  value={ user.description }
                  type="textArea"
                  id="perfilDescription"
                  name="description"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                data-testid="edit-button-save"
                disabled={ disabled }
                onClick={ this.updateProfileUser }
              >
                salvar
              </button>
              {/* {redirect && <Redirect to="/profile" />} */}
            </form>
          </div>
        )}
      </Container>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileEdit;
