// App.tsx
// Index is ROOT, App is REDUX Wrapper.
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Index from './index'; // Import Page component

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
