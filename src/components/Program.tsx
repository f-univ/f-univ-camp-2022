import styled from '@emotion/styled';

const Program = () => {
  return (
    <Wrapper>
      <Year>2022</Year>
      <Title>F.univ Conf</Title>
      <img src="/icons/_3D_logo.svg" height={300} width="100%" alt="3d_logo" />
      <Scroll>
        Scroll Down<ScrollWhite> to see more</ScrollWhite>
      </Scroll>
      <img src="/icons/downArrow.svg" height={25} width="8%" alt="downarrow" />
      <ProgramDescription>
        <Bold>Front-end Developer</Bold>를
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
  padding-top: 6rem;
`;

const Year = styled.div`
  font-size: 1.2rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  font-family: 'Konexy Personal Use', sans-serif;
  padding-bottom: 4rem;
`;

const Scroll = styled.div`
  font-size: 1rem;
  font-family: 'Spline Sans Mono Light';
  opacity: 0.9;
  padding: 4rem 0;
`;

const ScrollWhite = styled.span`
  font-family: 'Spline Sans Mono Regular';
  opacity: 0.61;
`;

const ProgramDescription = styled.div`
  font-size: 1.4rem;
  text-align: center;
  padding: 4rem 0;
`;

const Bold = styled.span`
  font-weight: 500;
`;
