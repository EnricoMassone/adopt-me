import React from "react";

class Carousel extends React.Component {
  state = { photos: [], active: 0 };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media && media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  selectPhoto = event => {
    const index = +event.target.dataset.index;
    this.setState({
      active: index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img alt="animal" src={photos[active]} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              // eslint-disable-next-line
              <img
                key={photo}
                src={photo}
                alt="animal thumbnail"
                data-index={index}
                className={index === active ? "active" : ""}
                onClick={this.selectPhoto}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
