import { render } from '@testing-library/react';
import { StoreContext } from '../../lib/store';
import { STORE_CONTEXT_DEFAULT_VALUES } from '../../lib/constants';
import Win, { getStaticProps } from '../win.page';

describe('<Win />', () => {
  const renderComponent = (store = STORE_CONTEXT_DEFAULT_VALUES) =>
    render(
      <StoreContext.Provider value={store}>
        <Win />
      </StoreContext.Provider>
    );

  it('should render without errors', () => {
    const { container } = renderComponent({
      ...STORE_CONTEXT_DEFAULT_VALUES,
      testCompleted: true,
    });

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
