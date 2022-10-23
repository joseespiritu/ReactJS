const { configureStore } = require('@reduxjs/toolkit');
const { render, screen } = require('@testing-library/react');
const { Provider } = require('react-redux');
const { MemoryRouter } = require('react-router-dom');

const { LoginPage } = require('../../../src/auth/pages/LoginPage');
const { authSlice } = require('../../../src/store/auth');

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  //   preloadedState: {
  //     }
});

describe('Pruebas en <LoginPage />', () => {
  test('debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });
});
