import { universities } from '@/resources/index.js';
import styled from '@emotion/styled';
import UnivCard from './UnivCard.jsx';

const University = () => {
  return (
    <Wrapper>
      <Title>
        F - UNIV CAMP에 <br />
        현재 <b>{universities.length}</b>개의 대학이 신청했어요.
      </Title>
      <CardWrapper>
        {universities.map((v) => (
          <UnivCard key={v.name} name={v.name} logo={v.logo} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default University;

const Wrapper = styled.section`
  width: 85%;
  padding: 5rem 0 3rem 0;
  margin: 0 auto;
  @media screen and (min-width: 576px) {
    width: 414px;
  }
`;

const Title = styled.h1`
  font-family: 'Sportsball Regular', 'Pretendard-Medium';
  color: #406bee;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  padding-bottom: 2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
