import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

import Container from './styled';

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
      <Container data-testid="page-search">
        <Header />
        <div className="input-artist">
          <form>
            <label htmlFor="search-artist">
              <input
                data-testid="search-artist-input"
                id="search-artist"
                type="text"
                placeholder="Artista"
                name="nameArtist"
                onChange={ this.handleChange }
                value={ nameArtist }
                autoComplete="off"
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
        </div>
        <div className="container-albums">
          <h2>{`Resultado de álbuns de: ${searchArtist}`}</h2>
          {albumNotFound && <span>Nenhum álbum foi encontrado</span>}
          <div className="container-album-result">
            {albumArtist.map(
              ({ artistName, collectionId, collectionName, artworkUrl100 }) => (
                <div className="card-album" key={ collectionId }>
                  <NavLink to={ `/album/${collectionId}` }>
                    <div className="img-card">
                      <img src={ artworkUrl100 } alt={ collectionName } />
                    </div>
                    <div className="info-card">
                      <Link
                        to={ `/album/${collectionId}` }
                        data-testid={ `link-to-album-${collectionId}` }
                      >
                        <h3>{collectionName}</h3>
                      </Link>
                      <p>{artistName}</p>
                    </div>
                  </NavLink>

                </div>
              ),
            )}

          </div>

        </div>
      </Container>
    );
  }
}

export default Search;
