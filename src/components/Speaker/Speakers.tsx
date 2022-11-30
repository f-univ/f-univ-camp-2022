import { speakers } from '@/resources/index.js';
import styled from '@emotion/styled';
import Speaker from './Speaker.jsx';

const Speakers = () => {
  return (
    <>
      <Title>
        대학생 스피커들은
        <br />
        어떤 내용을 공유하나요?
      </Title>
      {speakers.map((speaker) => (
        <Speaker key={speaker.name} speakInfo={speaker} />
      ))}
    </>
  );
};

export default Speakers;

const Title = styled.h1`
  padding: 5rem 0 1rem 0;
  font-size: 1.5rem;
  color: #406bee;
  font-family: 'Pretendard-Medium';
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
