import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../../components/MusicCard/MusicCard';

import Container from './styled';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameArtist: '',
      collectionName: '',
      imgAlbum: '',
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
      imgAlbum: musics[0].artworkUrl100,
    }, () => { this.setState({ musics }); });
  }

  render() {
    const { nameArtist, collectionName, musics, imgAlbum } = this.state;
    return (
      <Container data-testid="page-album">
        <Header />
        <div className="container-album">
          <div className="container-infos">
            <div className="img-album">
              <img src={ imgAlbum } alt="Capa album" />
            </div>
            <div className="title-album">
              <h3 data-testid="artist-name">{nameArtist}</h3>
              <span data-testid="album-name">{collectionName}</span>
            </div>

          </div>
          <div className="container-musics">
            {musics.map((music) => music.previewUrl
        && <MusicCard
          data={ music }
          key={ music.trackId }
        />)}
          </div>
        </div>

      </Container>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
