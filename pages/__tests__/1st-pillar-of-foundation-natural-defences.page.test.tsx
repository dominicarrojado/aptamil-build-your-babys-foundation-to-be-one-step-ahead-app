import { render } from '@testing-library/react';
import NaturalDefences from '../1st-pillar-of-foundation-natural-defences.page';

describe('<NaturalDefences />', () => {
  it('should render without errors', () => {
    const { container } = render(<NaturalDefences />);

    expect(container).toBeInTheDocument();
  });
});
