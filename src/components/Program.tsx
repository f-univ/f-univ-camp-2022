import styled from '@emotion/styled';

const Program = () => {
  return (
    <Wrapper>
      <Year>2022</Year>
      <Title>
        F -UNIV
        <br />
        Conference
      </Title>
      <img src="/icons/_3D_logo.svg" height={400} alt="3d_logo" />
      <ProgramArticle>
        <SubmitButton onClick={() => alert('서비스 준비 중!!')}>
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
  padding-bottom: 4rem;
  text-align: center;
  line-height: 2.5rem;
`;

const ProgramArticle = styled.article`
  padding: 4rem;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #4000fa;
  width: 320px;
  padding: 1rem;
  cursor: pointer;
`;

const ProgramDescription = styled.div`
  font-size: 1.4rem;
  text-align: center;
  padding: 4rem 0;
`;

const Bold = styled.span`
  font-weight: 500;
`;
