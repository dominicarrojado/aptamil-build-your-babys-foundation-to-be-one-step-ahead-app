import { render } from '@testing-library/react';
import Upload, { getStaticProps } from '../upload.page';

describe('<Upload />', () => {
  it('should render without errors', () => {
    const { container } = render(<Upload />);

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
