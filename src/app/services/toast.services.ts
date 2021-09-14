import { toast, ToastOptions } from 'react-toastify';

const showToast = (message: string, type: 'info' | 'success' | 'warn' | 'error' | 'default' = 'default') => {
	const toastOption: ToastOptions = {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};

	return type === 'default'
		? toast(message, toastOption)
		: type === 'info'
		? toast.info(message, toastOption)
		: type === 'success'
		? toast.success(message, toastOption)
		: type === 'warn'
		? toast.warn(message, toastOption)
		: type === 'error'
		? toast.error(message, toastOption)
		: toast(message, toastOption);
};

export default showToast;
