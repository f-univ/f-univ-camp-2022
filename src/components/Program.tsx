import styled from '@emotion/styled';

const Program = () => {
  return (
    <Wrapper>
      <Year>2022</Year>
      <Title>
        F - UNIV
        <br />
        Conference
      </Title>
      <Date>12.18 | 13:00</Date>
      <Img_3D
        src="/icons/_3D_logo.svg"
        width={336}
        height={300}
        alt="3d_logo"
      />
      <ProgramArticle>
        <SubmitButton
          onClick={() => window.open('https://forms.gle/bJQfBroLFCMAaUXu8')}
        >
          지금 신청하기
        </SubmitButton>
      </ProgramArticle>
      <img src="/icons/downArrow.svg" height={14} alt="downarrow" />
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
  font-family: 'Konexy Personal Use', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  font-family: 'Konexy Personal Use', sans-serif;
  padding-bottom: 1rem;
  text-align: center;
  line-height: 2.5rem;
`;

const Date = styled.p`
  padding-bottom: 1rem;
  font-weight: 500;
`;

const ProgramArticle = styled.article`
  padding: 4rem;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #4000fa;
  width: 340px;
  padding: 1rem;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    width: 385px;
  }

  transition: 0.3s all ease;
  :hover {
    background-color: #9772ff;
  }
`;

const ProgramDescription = styled.div`
  font-size: 1.4rem;
  text-align: center;
  padding: 4rem 0;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const Img_3D = styled.img`
  animation: shake 3s infinite linear;

  @keyframes shake {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 25px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
`;
