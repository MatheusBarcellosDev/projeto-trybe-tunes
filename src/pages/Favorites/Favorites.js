import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import MusicCard from '../../components/MusicCard/MusicCard';

import Container from './styled';

class Favorites extends Component {
  constructor() {
    super();

    this.state = ({
      favoriteSongs: [],
    });
  }

  componentDidMount() {
    this.updateFavorites();
  }

  updateFavorites = () => {
    getFavoriteSongs()
      .then((data) => {
        this.setState({ favoriteSongs: data });
      });
  }

  render() {
    const { favoriteSongs } = this.state;
    return (
      <Container data-testid="page-favorites">
        <Header />
        <div className="container-favorites">
          <div className="list-favorites">

            {favoriteSongs.map((music) => {
              if (music.previewUrl) {
                return (
                  <div className="card-favorites">
                    <img src={ music.artworkUrl100 } alt={ music.trackName } />
                    <MusicCard
                      data={ music }
                      key={ music.trackId }
                      setUpdateFavorites={ this.updateFavorites }
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

      </Container>
    );
  }
}

export default Favorites;
