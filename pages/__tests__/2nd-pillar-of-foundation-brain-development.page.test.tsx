import { render } from '@testing-library/react';
import BrainDevelopment from '../2nd-pillar-of-foundation-brain-development.page';

describe('<BrainDevelopment />', () => {
  it('should render without errors', () => {
    const { container } = render(<BrainDevelopment />);

    expect(container).toBeInTheDocument();
  });
});
