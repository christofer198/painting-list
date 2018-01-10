import React from 'react'
import DeleteConfirmation from './deleteconfirmation'
import PaintingCard from './PaintingCard'

class DeleteablePainting extends React.Component{
  constructor(){
    super()

    this.state = {
      showPainting: true
    }
  }

  showDeleteConfirmation = () => {
    this.setState({showPainting: false})
  }

  showPaintingCard = () => {
    this.setState({showPainting: true})
  }

  render(){
    return(
      <div>{this.state.showPainting ? <PaintingCard showDeleteConfirmation={this.showDeleteConfirmation} handleVote={this.props.handleVote} painting={this.props.painting} key={this.props.key}/> : <DeleteConfirmation showPaintingCard={this.showPaintingCard} painting={this.props.painting} deletePainting={this.props.deletePainting}/>}</div>
    )
  }
}

export default DeleteablePainting
