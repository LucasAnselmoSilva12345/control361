import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <main className="px-[26px] lg:px-11">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
