import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import App from './App';
import ConfirmationModal from './components/ConfirmationModal';
import store from './redux/store';

test('Test1', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // screen.debug();

  const linkElement1 = screen.getByText(/List is empty.../i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/List of Favourite Currencies/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText(/List of Available Currencies/i);
  expect(linkElement3).toBeInTheDocument();

  expect(screen.getByText(/Reset Favourites/i).closest('button')).toBeDisabled();

  setTimeout(() => {
    const linkElement4 = screen.getByText(/dolar amerykański/i);
    expect(linkElement4).toBeInTheDocument();
    const linkElement5 = screen.getByText(/euro/i);
    expect(linkElement5).toBeInTheDocument();
  }, 1000);
});

test('Test2', async () => {
  render(
    <Provider store={store}>
      <ConfirmationModal favouriteNumber={1} />
    </Provider>
  );

  //* Only when button is not disabled
  const button = screen.getByRole('button', {name: 'Reset Favourites'});
  fireEvent.click(button);
  await screen.findByText('Yes');
  await screen.findByText('No');
});
