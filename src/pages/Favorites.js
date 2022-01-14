import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';

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
      <div>
        <Header />
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
    );
  }
}

export default Favorites;
