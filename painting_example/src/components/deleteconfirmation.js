import React from 'react';

const DeleteConfirmation = (props) => {
  return(
    <div>
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <p>Are you sure you want to remove {props.painting.title}?</p>
        <button type="button" id="yes" onClick={() => props.deletePainting(props.painting.id)}>Yes</button>
        <button type="button" id="no" onClick={props.showPaintingCard}>No</button>
      </div>
    </div>
  )
}

export default DeleteConfirmation
