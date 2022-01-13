import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nameArtist: '',
      btnSubmitDisabled: true,
    };
  }

  handleBtnSubmit() {
    const LIMIT_NUMBER_INPUT = 2;
    const { nameArtist } = this.state;

    if (nameArtist.length >= LIMIT_NUMBER_INPUT) {
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

  render() {
    const { btnSubmitDisabled, nameArtist } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search-artist">
            <input
              data-testid="search-artist-input"
              id="search-artist"
              type="text"
              placeholder="Nome do Artista"
              name="nameArtist"
              onChange={ this.handleChange }
              value={ nameArtist }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ btnSubmitDisabled }
            onChange={ this.handleChange }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
