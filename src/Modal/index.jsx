import { any, bool, func, oneOf } from 'prop-types';
import Modal from 'rodal';
import styled, { createGlobalStyle } from 'styled-components';
const Styles = createGlobalStyle`
	html,
	body {
		overflow-y: hidden !important;
	}
`;
const StyledElement = styled.div`
	& * {
		box-sizing: border-box;
	}
	& .rodal {
		align-items: center;
		backdrop-filter: blur(2px);
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		padding: 0 calc(50% - 400px);
		z-index: 99999;
		@media screen and (max-width: 576px) {
			padding: 0 10px;
		}
	}
	& .rodal-mask {
		background: transparent;
	}
	& .rodal-dialog {
		border-radius: 16px;
		max-height: 450px;
		padding: 16px;
		height: initial !important;
		position: relative;
		& .rodal-inner-dialog {
			max-height: 100%;
			overflow-y: scroll;
			&::-webkit-scrollbar {
				width: 7px;
				height: 7px;
			}
			&::-webkit-scrollbar-track {
				background: transparent;
			}
			&::-webkit-scrollbar-thumb {
				-moz-border-radius: 3px;
				-ms-border-radius: 3px;
				-o-border-radius: 3px;
				-webkit-border-radius: 4px;
				background: rgba(105, 111, 133, 0.8);
				border-radius: 4px;
			}
		}
		& .rodal-close {
			background-color: #f7f8fc;
			border-radius: 10px;
			height: 32px;
			width: 32px;
			&:before,
			&:after {
				background: black;
				left: 6px;
				transition: 400ms;
				width: 60%;
				border-radius: 0;
			}
			&:hover {
				&:before,
				&:after {
					background: black;
				}
			}
		}
	}
`;
const Component = ({ animation, children, onClose, visible }) => (
	<StyledElement>
		<Modal
			animation={animation}
			closeOnEsc={true}
			customStyles={{ height: 'auto', width: '100%' }}
			onClose={onClose}
			visible={visible}>
			<div className='rodal-inner-dialog'>{children}</div>
		</Modal>
		{visible && <Styles />}
	</StyledElement>
);
Component.defaultProps = {
	animation: 'slideDown',
	visible: false,
};
Component.propTypes = {
	animation: oneOf([
		'door',
		'fade',
		'flip',
		'rotate',
		'slideDown',
		'slideLeft',
		'slideRight',
		'slideUp',
		'zoom',
	]),
	children: any,
	onClose: func.isRequired,
	visible: bool.isRequired,
};
export default Component;
