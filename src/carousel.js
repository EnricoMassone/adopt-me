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

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img alt="animal" src={photos[active]} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              <img
                key={photo}
                src={photo}
                alt="animal thumbnail"
                data-index={index}
                className={index === active ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
