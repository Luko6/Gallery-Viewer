import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import FavoriteToggle from './FavoriteToggle';

const TestToggle = () => {
  return (
    <Provider store={store}>
      <FavoriteToggle id={42} name={'Test name'} image_url={'example.com'} />
    </Provider>
  );
};

test('Render Favorite Toggle', () => {
  render(<TestToggle />);

  expect(screen.getByText(`Favorite`)).toBeInTheDocument();

  userEvent.click(screen.getByTestId('favbutton'));

  expect(screen.getByText(`Remove Favorite`)).toBeInTheDocument();
});
