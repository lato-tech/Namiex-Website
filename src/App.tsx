import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>;
}