import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <p>{ data.trackName }</p>

        <audio data-testid="audio-component" src={ data.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCard;
