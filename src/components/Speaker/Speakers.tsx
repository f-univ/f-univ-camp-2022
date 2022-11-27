import { speakers } from '@/resources/index.js';
import styled from '@emotion/styled';
import Speaker from './Speaker.jsx';

const Speakers = () => {
  return (
    <>
      <Title>
        Speaker는
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
  font-weight: 400;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  text-align: center;
  line-height: 2rem;
`;
