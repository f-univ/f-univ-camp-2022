import Footer from '@/components/Footer.js';
import Info from '@/components/Info';
import Program from '@/components/Program.jsx';
import ScrollTop from '@/components/ScrollTop.js';
import Speakers from '@/components/Speaker/Speakers.jsx';
import University from '@/components/University';

const App = () => {
  return (
    <>
      <Program />
      <Info />
      <Speakers />
      <University />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default App;
