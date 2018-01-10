import React from 'react';
import PaintingCard from './PaintingCard';
import DeleteablePainting from './deleteablepainting.js'

class PaintingList extends React.Component {


  render() {
    const paintingCards = this.props.paintings.map(painting => {
      return (
        <DeleteablePainting
          handleVote={this.props.handleVote}
          painting={painting}
          key={painting.id}
          deletePainting={this.props.deletePainting}
        />
      );
    });

    return (
      <div>
        <h1>All the Paintings</h1>
        <div className="ui items">{paintingCards}</div>
      </div>
    );
  }
}

export default PaintingList;
