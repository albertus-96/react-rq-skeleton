import { render } from 'test';

import { Footer } from '../../../components/common/footer/index';

describe('Footer component testing with testing-library', () => {
	it('renders without crashing', () => {
		const component = render(<Footer />);

		expect(component).toBeTruthy();
	});
});
