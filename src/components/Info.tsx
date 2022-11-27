import styled from '@emotion/styled';

const Info = () => {
  return (
    <Wrapper>
      <Title>
        F - UNIV Conf는
        <br />
        어떤건가요?
      </Title>
      <svg
        width="100%"
        height="7"
        viewBox="0 0 174 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="3.5"
          x2="174"
          y2="3.5"
          stroke="url(#paint0_linear_250_832)"
          strokeWidth="5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_250_832"
            x1="0"
            y1="7"
            x2="174"
            y2="7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4000FA" />
            <stop offset="1" stopColor="#9772FF" />
          </linearGradient>
        </defs>
      </svg>
      <ProgramDescription>
        <Bold>Front-end Developer</Bold>를 꿈꾸는
        <br />
        대학생들이 한층 더 성장하는 기회!
      </ProgramDescription>
      <TextWrapper>
        <img src="/images/memoji.png" width="100%" height={252} alt="memoji" />
      </TextWrapper>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.article`
  width: 80%;
  margin: 0 auto;
  border: 2px solid transparent;
  border-radius: 5px;
  background-image: linear-gradient(#0c0d40, #0c0d40),
    linear-gradient(to right, #4000fa, #9772ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  @media screen and (min-width: 576px) {
    width: 414px;
  }
`;

const Title = styled.h1`
  padding: 3rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Konexy Personal Use', 'Spoqa Han Sans Neo', 'sans-serif';
  text-align: center;
  line-height: 2rem;
`;

const ProgramDescription = styled.div`
  padding: 2rem 0;
  font-size: 1.2rem;
  text-align: center;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const TextWrapper = styled.div`
  padding: 2rem 2rem 3rem 2rem;
`;
