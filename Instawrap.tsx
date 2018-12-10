import React, { Fragment, Component } from 'react';

export default class Instagram extends Component {
  state = {
    width: this.windowGlobal,
    photos: []
  };

  componentDidMount() {
    // need instagram token

    const res = fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=1084132.d703c80.678e50a84eae49918707739832ac003c`
    )
      .then(res => res.json())
      .then(photos =>
        this.setState({
          photos: photos.data
        })
      );
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const windowGlobal = typeof window !== 'undefined' && window.innerWidth;
    this.setState({ width: windowGlobal });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;

    const { photos } = this.state;

    if (isMobile) {
      return photos.slice(0, 6).map(photo => (
        <Fragment key={photo.caption.id}>
          <a href={photo.link} target="_blank">
            <img
              className="insta-image"
              src={photo.images.standard_resolution.url}
              alt="insta-image"
            />
          </a>
        </Fragment>
      ));
    } else {
      return photos.slice(0, 8).map(photo => (
        <Fragment key={photo.caption.id}>
          <a href={photo.link} target="_blank">
            <img
              className="insta-image"
              src={photo.images.standard_resolution.url}
              alt="insta-image"
            />
          </a>
        </Fragment>
      ));
    }
  }
}
