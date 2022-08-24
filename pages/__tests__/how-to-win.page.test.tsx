import { render } from '@testing-library/react';
import HowToWin from '../how-to-win.page';

describe('<HowToWin />', () => {
  it('should render without errors', () => {
    const { container } = render(<HowToWin />);

    expect(container).toBeInTheDocument();
  });
});
