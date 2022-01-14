import React, { Component } from 'react';
import Header from '../../components/Header';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import MusicCard from '../../components/MusicCard';

class Favorites extends Component {
  constructor() {
    super();

    this.state = ({
      favoriteSongs: [],
    });
  }

  componentDidMount() {
    getFavoriteSongs().then((favorite) => {
      this.setState({
        favoriteSongs: [...favorite],
      });
    });
  }

  render() {
    const { favoriteSongs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <div>
          {favoriteSongs.map((music) => {
            if (music.previewUrl) {
              return (
                <MusicCard
                  data={ music }
                  key={ music.trackId }
                />
              );
            }
            return null;
          })}
        </div>

      </div>
    );
  }
}

export default Favorites;
