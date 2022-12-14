import styled from '@emotion/styled';

const Program = () => {
  return (
    <Wrapper>
      <Year>2022</Year>
      <Title>F - UNIV CAMP</Title>
      <Date>
        <span>12월 18일</span> | <span>13:00</span> | <span>온라인 ZOOM</span>
      </Date>
      <Img_3D
        src="/icons/_3D_logo.svg"
        width={336}
        height={300}
        alt="3d_logo"
      />
      <ProgramArticle>
        <SubmitButton onClick={() => alert('종료되었어요')}>종료!</SubmitButton>
      </ProgramArticle>
      <Arrow>
        <img
          src="/icons/downArrow.svg"
          width="100%"
          height={14}
          alt="downarrow"
        />
      </Arrow>
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
  color: #406bee;
  font-size: 1rem;
  font-family: 'Sportsball Regular';
`;

const Title = styled.h1`
  color: #406bee;
  font-size: 1.4rem;
  font-family: 'Sportsball Regular';
  text-align: center;
  line-height: 3.5rem;
`;

const Date = styled.p`
  padding-bottom: 1rem;
  font-family: 'Pretendard-Medium';
  font-weight: bold;
  font-size: 1.1rem;
  color: #406bee;
  display: flex;
  gap: 1.2rem;
  text-align: center;
  justify-content: center;
`;

const ProgramArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0 4rem 0;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #406bee;
  font-weight: bold;
  color: white;
  width: 340px;
  padding: 1rem;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    width: 385px;
  }

  transition: 0.3s all ease;
  :hover {
    background-color: #7646ff;
  }

  :disabled {
    background-color: #999999;
    cursor: default;
  }
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

const Arrow = styled.div`
  padding: 1rem 4rem 4rem 4rem;
`;
