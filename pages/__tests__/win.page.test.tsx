import { render } from '@testing-library/react';
import Win, { getStaticProps } from '../win.page';

describe('<Win />', () => {
  it('should render without errors', () => {
    const { container } = render(<Win />);

    expect(container).toBeInTheDocument();
  });
});

describe('getStaticProps()', () => {
  it('should return expected props', async () => {
    const staticProps = await getStaticProps();

    expect(staticProps).toEqual({
      props: { withMenu: false },
    });
  });
});
