import React from 'react';
import PaintingList from './PaintingList';
import paintings from '../data/artworks';

class PaintingContainer extends React.Component {
  // console.log('PaintingList props', props);
  constructor(props) {
    super(props);

    this.state = {
      paintings
    };
  }

  handleVote = id => {
    const updatedPaintings = this.state.paintings.map(p => {
      if (p.id === id) {
        return Object.assign(p, { votes: p.votes + 1 });
      } else {
        return p;
      }
    });
    this.setState({ paintings: updatedPaintings });
  };

  deletePainting = (myId) => {
    let newPaintings = this.state.paintings
    newPaintings = newPaintings.filter(p => p.id !== myId)
    this.setState({paintings: newPaintings})
  }

  render() {
    return (
      <PaintingList
        handleVote={this.handleVote}
        paintings={this.state.paintings}
        deletePainting={this.deletePainting}
      />
    );
  }
}

export default PaintingContainer;
