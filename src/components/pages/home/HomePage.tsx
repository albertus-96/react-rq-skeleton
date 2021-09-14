import showToast from 'app/services/toast.services';
import { Button } from 'components/common';

export const Main = () => {
	return (
		<div className="py-5 text-center bg-black font-main">
			<div className="container mx-auto">
				<h1 className="mb-2 text-white text-8xl">Kerja in</h1>
				<p className="mb-3 text-lg text-white">Ciye yang dikerjain</p>
				<Button onClick={() => showToast('Hi, me!')}> Alert me!</Button>
				<Button onClick={() => showToast('Info, me!', 'info')}> Info me!</Button>
				<Button onClick={() => showToast('Success, me!', 'success')}> Success me!</Button>
				<Button onClick={() => showToast('Warn, me!', 'warn')}> Warn me!</Button>
				<Button onClick={() => showToast('Error, bro!', 'error')}> Error me!</Button>
			</div>
		</div>
	);
};
