import styled from '@emotion/styled';

const Program = () => {
  return (
    <Wrapper>
      <Year>2022</Year>
      <Title>F.univ Conf</Title>
      <img
        src="/public/icons/_3D_logo.svg"
        height={300}
        width="80%"
        alt="3d_logo"
      />
      <Scroll>
        Scroll Down<ScrollWhite> to see more</ScrollWhite>
      </Scroll>
      <img
        src="/public/icons/downArrow.svg"
        height={25}
        width="10%"
        alt="downarrow"
      />
      <ProgramDescription>
        Front-end Developer를
        <br />
        꿈꾸는 대학생들이
        <br />
        한층 더 성장하는 기회!
      </ProgramDescription>
    </Wrapper>
  );
};

export default Program;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`;

const Year = styled.div`
  font-size: 2rem;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;

const Title = styled.div`
  font-size: 3rem;
  font-family: 'Konexy Personal Use', sans-serif;
  padding-bottom: 4rem;
`;

const Scroll = styled.div`
  font-size: 1rem;
  font-family: 'Spline Sans', sans-serif;
  opacity: 0.9;
  padding: 4rem 0;
`;

const ScrollWhite = styled.span`
  opacity: 0.3;
`;

const ProgramDescription = styled.div`
  font-size: 1.4rem;
  text-align: center;
  padding: 4rem 0;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;
