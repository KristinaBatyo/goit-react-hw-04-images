
import {Overlay, ModalItem} from "./Modal.styled"
import PropTypes from 'prop-types';
import {useEffect } from "react";

export const Modal =({onClick, src}) => {


  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        return onClick();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return() => {
      window.removeEventListener('keydown', handleEscape);
    }
  }, [onClick])
  

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClick();
    } 
  };

  
    return(
      <Overlay onClick={handleBackdrop}>
      <ModalItem>
        <img src={src} alt="" />
      </ModalItem>
    </Overlay>
    )
  }


Modal.propTypes ={
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,   
}
