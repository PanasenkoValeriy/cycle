import { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  state = {};
  render() {
    return (
      <Backdrop>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Backdrop>
    );
  }
}
