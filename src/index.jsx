import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Providers
import { AuthProvider, NoteProvider } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('evernote__clone')
);

serviceWorker.register();
