import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
	//two arguments: 
	//1)JSX of what we want to render,
	//2)a reference to the element that i want to render this portal into
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="ui dimmer modals visible active">
			<div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
				<div className="header">{props.title}</div>
				<div className="content">
					{props.content}
				</div>
				<div className="actions">
					{props.actions}
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;