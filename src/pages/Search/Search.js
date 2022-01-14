import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      albumArtist: [],
      albumNotFound: false,
      nameArtist: '',
      searchArtist: '',
      btnSubmitDisabled: true,
    };
  }

  handleClick = async (e) => {
    e.preventDefault();
    const { nameArtist } = this.state;

    const response = await searchAlbumsAPI(nameArtist);

    this.setState({
      nameArtist: '',
      albumArtist: response,
      searchArtist: nameArtist,
      albumNotFound: response.length === 0,
    });
  };

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

    this.setState(
      {
        [name]: target.value,
      },
      this.handleBtnSubmit,
    );
  }

  render() {
    const {
      btnSubmitDisabled,
      nameArtist,
      albumArtist,
      searchArtist,
      albumNotFound,
    } = this.state;

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
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
        <div>
          <h2>{`Resultado de álbuns de: ${searchArtist}`}</h2>
          {albumNotFound && <span>Nenhum álbum foi encontrado</span>}
          {albumArtist.map(
            ({ artistName, collectionId, collectionName, artworkUrl100 }) => (
              <div key={ collectionId }>
                <img src={ artworkUrl100 } alt={ collectionName } />
                <Link
                  to={ `/album/${collectionId}` }
                  data-testid={ `link-to-album-${collectionId}` }
                >
                  <strong>{collectionName}</strong>
                </Link>
                <p>{artistName}</p>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }
}

export default Search;
