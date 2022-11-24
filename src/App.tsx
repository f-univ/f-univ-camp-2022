import Footer from '@/components/Footer.js';
import Program from '@/components/Program.jsx';
import ScrollTop from '@/components/ScrollTop.js';
import Speakers from '@/components/Speaker/Speakers.jsx';
// import University from '@/components/University';

const App = () => {
  return (
    <>
      <Program />
      <Speakers />
      {/* <University /> */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default App;
