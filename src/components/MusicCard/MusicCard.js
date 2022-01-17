import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Loading from '../../pages/Loading/Loading';

import Container from './styled';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      favorite: false,
      favoriteSongs: [],
    };
  }

  componentDidMount() {
    getFavoriteSongs()
      .then((data) => {
        this.setState(
          { loading: false, favoriteSongs: data },
          this.updateFavorites,
        );
      });
  }

  handleClick = ({ target: { checked } }) => {
    this.setState({ favorite: checked, loading: true },
      () => {
        const { favorite } = this.state;
        const { data, setUpdateFavorites } = this.props;

        if (favorite) {
          addSong(data)
            .then(() => this.setState({ loading: false }));
        } else {
          removeSong(data)
            .then(() => this.setState({ loading: false }));
        }
        if (setUpdateFavorites) {
          setUpdateFavorites();
        }
      });
  }

  updateFavorites = () => {
    const { favoriteSongs } = this.state;
    const { data } = this.props;

    const isFavorite = favoriteSongs.some((song) => song.trackId === data.trackId);

    if (isFavorite) {
      this.setState({
        favorite: true,
      });
    }
  }

  render() {
    const { data } = this.props;
    const { favorite, loading } = this.state;

    return (
      <Container>
        {loading && <Loading />}
        <div className="players-music-group">
          <div className="title-music">
            <p>{data.trackName}</p>
          </div>
          <div className="player-music">
            <audio data-testid="audio-component" src={ data.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
          </div>
          <div className="favorite-music">
            <label htmlFor="favorite">
              <input
                id="favorite"
                data-testid={ `checkbox-music-${data.trackId}` }
                onChange={ this.handleClick }
                checked={ favorite }
                type="checkbox"
              />
              Favorita
            </label>
          </div>
        </div>
      </Container>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  setUpdateFavorites: PropTypes.func.isRequired,
};

export default MusicCard;
