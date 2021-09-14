import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../button/index';

//props for this modal
interface modalProps {
	isShowing: boolean;
	minSize?: string;
	size: string;
	title: string;
	okText?: string;
	cancelText?: string;
	canSubmit?: boolean;
	onSubmit?: () => void;
	onClose?: () => void;
	footer?: boolean;
	children: React.ReactNode;
}

export const Modal = ({
	isShowing,
	minSize = '',
	size,
	title,
	okText = 'Submit',
	cancelText = 'Cancel',
	onSubmit,
	canSubmit = true,
	onClose,
	footer = true,
	children,
}: modalProps) => {
	//state for show/hide modal
	const [showModal, setShowModal] = React.useState(false);

	//reset show state
	React.useEffect(() => {
		setShowModal(isShowing);
	}, [isShowing]);

	//lock/unlock scroll bar
	React.useEffect(() => {
		showModal && (document.body.style.overflow = 'hidden');
		!showModal && (document.body.style.overflow = 'unset');
	}, [showModal]);

	//handler for modal
	const handleSubmit = () => {
		onSubmit();
		onClose();
		setShowModal(false);
	};

	return ReactDOM.createPortal(
		<>
			{showModal ? (
				<>
					<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
						<div
							className={`relative ${
								minSize === '' ? 'w-auto' : 'w-' + minSize
							} my-6 mx-auto max-w-${size} text-black dark:text-white`}
						>
							{/*content*/}
							<div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none slide-up dark:bg-secondBg focus:outline-none">
								{/*header / title*/}
								<div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-secondBg dark:border-white">
									<div className="flex justify-center w-full">
										<h3 className="text-3xl font-semibold font-title">{title}</h3>
									</div>
								</div>
								{/*body / input data*/}
								{/*footer / action button*/}
								{footer ? (
									<>
										<div className="relative flex-auto p-2 space-y-3">{children}</div>
										<div className="flex items-center justify-end gap-3 p-6 border-t border-solid rounded-b border-secondBg dark:border-white">
											<Button
												variant="danger"
												className="slide-down"
												onClick={() => {
													onClose();
													setShowModal(false);
												}}
												type="button"
											>
												{cancelText}
											</Button>
											<Button onClick={handleSubmit} disabled={!canSubmit}>
												{okText}
											</Button>
										</div>
									</>
								) : (
									<div>{children}</div>
								)}
							</div>
						</div>
					</div>
					<div className="fixed inset-0 z-40 bg-black opacity-60"></div>
				</>
			) : null}
		</>,
		document.getElementById('modal-root')
	);
};
