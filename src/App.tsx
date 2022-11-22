import Program from '@/components/Program.jsx';
import Speakers from '@/components/Speaker/Speakers.jsx';
import styled from '@emotion/styled';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <Wrapper>
      <Program />
      <Speakers />
      <Footer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  @media screen and (min-width: 576px) {
    width: 576px;

    margin: 0 auto;
  }
`;
