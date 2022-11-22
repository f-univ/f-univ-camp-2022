import Program from '@/components/Program.jsx';
import Speakers from '@/components/Speaker/Speakers.jsx';
import styled from '@emotion/styled';

const App = () => {
  return (
    <Wrapper>
      <Program />
      <Speakers />
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