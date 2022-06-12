import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import {delFavourites} from '../redux/actions';

const ConfirmationModal = ({favouriteNumber}: {favouriteNumber: number}): JSX.Element => {
  // console.log(favouriteNumber);

  const dispatch: Dispatch = useDispatch();
  const [show, setShow] = React.useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const resetFavourites = () => {
    setShow(false);
    dispatch(delFavourites(false));
  };

  const disabled: boolean = favouriteNumber > 0 ? false : true;

  return (
    <React.Fragment>
      <Button onClick={handleShow} variant="danger" disabled={disabled}>
        Reset Favourites
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Favourites</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to reset favourite currencies?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={() => resetFavourites()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ConfirmationModal;
