import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        description: animal.description,
        breed: animal.breeds.primary,
        animal: animal.type,
        media: animal.photos,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { name, description, breed, animal, location } = this.state;

    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
