import { render } from '@testing-library/react';
import { StoreContextType } from '../../lib/types';
import { StoreContext } from '../../lib/store';
import { STORE_CONTEXT_DEFAULT_VALUES } from '../../lib/constants';
import Upload, { getStaticProps } from '../upload.page';

describe('<Upload />', () => {
  const renderComponent = (store = STORE_CONTEXT_DEFAULT_VALUES) =>
    render(
      <StoreContext.Provider value={store as StoreContextType}>
        <Upload />
      </StoreContext.Provider>
    );

  it('should render without errors', () => {
    const { container } = renderComponent({
      ...STORE_CONTEXT_DEFAULT_VALUES,
      formCompleted: true,
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
