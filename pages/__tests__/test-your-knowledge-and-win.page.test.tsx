import { render } from '@testing-library/react';
import TestYourKnowledge from '../test-your-knowledge-and-win.page';

describe('<TestYourKnowledge />', () => {
  it('should render without errors', () => {
    const { container } = render(<TestYourKnowledge />);

    expect(container).toBeInTheDocument();
  });
});
