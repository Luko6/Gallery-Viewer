import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  const limitLabel = screen.getByText(/Items per page/i);
  expect(limitLabel).toBeInTheDocument();

  expect((screen.getByTestId('limit-20') as HTMLOptionElement).selected).toBeTruthy();

  userEvent.selectOptions(screen.getByTestId('limit'), '10');

  expect((screen.getByTestId('limit-10') as HTMLOptionElement).selected).toBeTruthy();
  expect((screen.queryByTestId('limit-5') as HTMLOptionElement).selected).toBeFalsy();
  expect((screen.queryByTestId('limit-20') as HTMLOptionElement).selected).toBeFalsy();

  const queryInput = screen.getByTestId('query');

  userEvent.type(queryInput, 'IPA');
  expect(screen.getByTestId('query')).toHaveValue('IPA');
});
