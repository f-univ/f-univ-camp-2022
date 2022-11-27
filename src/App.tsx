import Footer from '@/components/Footer.js';
import Program from '@/components/Program.jsx';
import ScrollTop from '@/components/ScrollTop.js';
import Speakers from '@/components/Speaker/Speakers.jsx';
import Info from './components/Info';
// import University from '@/components/University';

const App = () => {
  return (
    <>
      <Program />
      <Info />
      <Speakers />
      {/* <University /> */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default App;
