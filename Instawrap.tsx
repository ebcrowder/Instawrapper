import React, { Fragment } from 'react';

export interface Props {
  number: number;
}

interface State {
  photos: Array<Object>;
}

export default class Instagram extends React.Component<Props, State> {
  state = {
    photos: []
  };

  componentDidMount() {
    // need instagram token

    const res = fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
        process.env.ACCESS_TOKEN
      }`
    )
      .then(res => res.json())
      .then(photos =>
        this.setState({
          photos: photos.data
        })
      );
  }

  render() {
    const { photos } = this.state;
    const { number } = this.props;

    return photos.slice(0, number).map(photo => (
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
