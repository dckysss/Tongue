import React, { useState } from 'react';
import { EyeProvider } from './context/EyeContext';
import { Layout } from './components/Layout';
import { LandingPage } from './components/landingPage';
import { EyeAnatomy } from './components/EyeAnatomy';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <EyeProvider>
      {started ? (
        <Layout>
          <EyeAnatomy />
        </Layout>
      ) : (
        <LandingPage onStart={() => setStarted(true)} />
      )}
    </EyeProvider>
  );
}

export default App;
