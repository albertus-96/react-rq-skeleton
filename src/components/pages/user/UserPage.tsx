import { getAllUser } from 'api/user/userApi';
import { Button, Modal } from 'components/common';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { UserCards } from './UserCard';

export const Main = () => {
	//query for get all user
	const { data: user, isSuccess, isLoading } = useQuery('user', getAllUser);

	//modal state
	const [showModal, setShowModal] = useState(false);

	if (isLoading) {
		console.log('still loading');
	}

	if (isSuccess) {
		console.log('finish loading');
		console.log(user);
	}

	const showHideModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="py-5 text-center bg-black font-main">
			<div className="container mx-auto">
				<h1 className="mb-2 text-white text-8xl">This is User Page</h1>
				{isLoading ? <div>Loading...</div> : <UserCards users={user} />}
			</div>
			<Button onClick={() => showHideModal()}> Click me! </Button>
			<Modal
				isShowing={showModal}
				minSize="xl"
				size="2xl"
				title="This is Modal"
				onClose={showHideModal}
				onSubmit={showHideModal}
			>
				<div>Isi Modal aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
				<div>Isi Modal</div>
				<div>Isi Modal</div>
				<div>Isi Modal</div>
				<div>Isi Modal</div>
				<div>Isi Modal</div>
				<div>Isi Modal</div>
				<div>Isi Modal</div>
			</Modal>
		</div>
	);
};
