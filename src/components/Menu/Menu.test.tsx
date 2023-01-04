import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Menu from './Menu';

const TestMenu = () => {
  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  );
};

test('Render menu', () => {
  render(<TestMenu />);

  // eslint-disable-next-line testing-library/no-node-access
  const queryInput = screen.getByTestId('query').querySelector('input');
  expect(queryInput).toBeInTheDocument();

  fireEvent.change(queryInput as Element, { target: { value: 'IPA' } });
  expect(queryInput?.value).toBe('IPA');

  fireEvent.click(screen.getByTestId('resetbutton'));

  expect(queryInput?.value).toBe('');
});
