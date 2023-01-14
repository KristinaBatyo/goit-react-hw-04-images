import { Component } from "react"
import {Overlay, ModalItem} from "./Modal.styled"
import PropTypes from 'prop-types';

export class Modal extends Component {
  state = {
    status: 'idle',
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  };

  handleBackdrop = e => {
    const {onClick} = this.props;
    if (e.currentTarget === e.target) {
      onClick();
    } 
  };

  handleEscape = e => {
    const {onClick} = this.props;
    if (e.code === "Escape") onClick();
  };


  render() {
    const {onClick, src} = this.props;
    console.log(onClick, src)
    return(
      <Overlay onClick={this.handleBackdrop}>
      <ModalItem>
        <img src={src} alt="" />
      </ModalItem>
    </Overlay>
    )
  }
}

Modal.propTypes ={
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,   
}