import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameArtist: '',
      collectionName: '',
      musics: [],
    };
  }

  componentDidMount() {
    this.getSong();
  }

  getSong = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id).then((response) => response);

    this.setState({
      nameArtist: musics[0].artistName,
      collectionName: musics[0].collectionName,
    }, () => { this.setState({ musics }); });
  }

  render() {
    const { nameArtist, collectionName, musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name">{nameArtist}</p>
        <p data-testid="album-name">{collectionName}</p>
        {musics.map((music) => music.previewUrl
        && <MusicCard
          data={ music }
          key={ music.trackId }

        />)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
