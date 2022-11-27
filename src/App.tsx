import Footer from '@/components/Footer.js';
import Info from '@/components/Info';
import Program from '@/components/Program.jsx';
import ScrollTop from '@/components/ScrollTop.js';
import Speakers from '@/components/Speaker/Speakers.jsx';
import { lazy, Suspense } from 'react';

const University = lazy(() => import('@/components/University'));

const App = () => {
  return (
    <>
      <Program />
      <Info />
      <Speakers />
      <Suspense fallback={<div>Loading...</div>}>
        <University />
      </Suspense>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default App;
