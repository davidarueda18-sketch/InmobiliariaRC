import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;