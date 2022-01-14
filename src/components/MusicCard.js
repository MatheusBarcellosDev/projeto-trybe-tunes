import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      favorite: false,
    };
  }

  componentDidMount() {
    const {
      data: { trackId },
    } = this.props;
    getFavoriteSongs().then((response) => {
      console.log(response);
      response.forEach((song) => {
        if (song.trackId === trackId) {
          this.setState({
            favorite: true,
          });
        }
      });
    });
  }

  handleClick = ({ target: { checked } }) => {
    const { data } = this.props;

    this.setState({ loading: true });

    if (checked) {
      addSong(data).then(() => {
        this.setState({
          loading: false,
          favorite: true,
        });
      });
    } else {
      removeSong(data).then(() => {
        this.setState({
          loading: false,
          favorite: false,
        });
      });
    }
  };

  render() {
    const { data } = this.props;
    const { favorite, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <p>{data.trackName}</p>

            <audio data-testid="audio-component" src={ data.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor="favorite">
              Favorita
              <input
                id="favorite"
                data-testid={ `checkbox-music-${data.trackId}` }
                onChange={ this.handleClick }
                checked={ favorite }
                type="checkbox"
              />
            </label>
          </>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCard;
