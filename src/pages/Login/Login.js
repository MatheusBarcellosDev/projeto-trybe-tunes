import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading/Loading';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
      redirect: false,
      btnSubmitDisabled: true,
      nameUser: '',
    };
  }

  handleBtnSubmit() {
    const LIMIT_NUMBER_INPUT = 3;
    const { nameUser } = this.state;
    if (nameUser.length >= LIMIT_NUMBER_INPUT) {
      this.setState({
        btnSubmitDisabled: false,
      });
    } else {
      this.setState({
        btnSubmitDisabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    }, this.handleBtnSubmit);
  }

  handleClick() {
    const { nameUser } = this.state;

    this.setState({ isLoading: true });

    createUser({ name: nameUser }).then(() => {
      this.setState({
        isLoading: false,
        redirect: true,
      });
    });
  }

  render() {
    const { btnSubmitDisabled, nameUser, isLoading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        { redirect && <Redirect to="/search" />}
        { isLoading ? <Loading /> : (
          <form>
            <label htmlFor="idUser">
              <input
                id="idUser"
                data-testid="login-name-input"
                type="text"
                placeholder="Digite seu usuário"
                value={ nameUser }
                name="nameUser"
                onChange={ this.handleChange }
              />
            </label>

            <button
              id="btnSubmit"
              type="submit"
              data-testid="login-submit-button"
              disabled={ btnSubmitDisabled }
              onClick={ this.handleClick }
            >
              Entrar

            </button>

          </form>
        ) }

      </div>
    );
  }
}

export default Login;
