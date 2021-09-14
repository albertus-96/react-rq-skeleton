import { IUser } from 'interfaces/User';

interface CardProps {
	users: IUser[];
}

export const UserCards = ({ users }: CardProps) => {
	return (
		<div className="container flex-1 max-w-screen-lg p-5 mx-auto my-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{(users ?? []).map((user, idx) => (
					<div key={idx} className="col-span-1 p-5 text-white border border-white rounded-md" data-testid="container">
						{user.name}
					</div>
				))}
			</div>
		</div>
	);
};
