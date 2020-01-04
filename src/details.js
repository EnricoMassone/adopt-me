import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./carousel";
import ErrorBoundary from "./errorBoundary";
import Modal from "./modal";
import { navigate } from "@reach/router";
import { connect } from "react-redux";

class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
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

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });
  adoptPet = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      name,
      description,
      breed,
      animal,
      location,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>

          <button
            style={{ backgroundColor: this.props.theme }}
            onClick={this.openModal}
          >
            Adopt {name}
          </button>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adoptPet}>Yes</button>
                  <button onClick={this.closeModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

const WrappedDetails = connect(mapStateToProps)(Details);

const DetailsWithErrorBoundary = props => (
  <ErrorBoundary>
    <WrappedDetails {...props} />
  </ErrorBoundary>
);

export default DetailsWithErrorBoundary;
