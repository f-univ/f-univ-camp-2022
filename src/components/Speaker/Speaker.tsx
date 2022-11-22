import styled from '@emotion/styled';

interface Prop {
  speakInfo: SpeakInfo;
}

interface SpeakInfo {
  name: string;
  title: string;
  univ: string;
  subTitle: string;
  sessionNumber: number;
  time: string;
  imageUrl: string;
}

const Speaker = ({ speakInfo }: Prop) => {
  return (
    <Container>
      <SessionHeader>
        <InfoWrapper>
          <Session>Session 0{speakInfo.sessionNumber}</Session>
          <Time>{speakInfo.time}</Time>
        </InfoWrapper>
        <SpeakerImage
          width={191}
          height={170}
          src={speakInfo.imageUrl}
          alt="speaker"
        />
      </SessionHeader>
      <SessionBottom>
        <Title>{speakInfo.title}</Title>
        <Info>
          {speakInfo.univ} {speakInfo.name} · {speakInfo.subTitle}
        </Info>
      </SessionBottom>
    </Container>
  );
};

export default Speaker;

const Container = styled.section`
  width: 414px;
  padding: 1rem;
  margin: 0 auto;
`;

const SessionHeader = styled.div`
  border-radius: 5px 5px 0 0;
  display: flex;
  background-color: #749afe;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  width: 50%;
`;

const Session = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  width: 70%;
  background-color: #20232c;
`;

const Time = styled.div`
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  padding-left: 0.2rem;
`;

const SpeakerImage = styled.img`
  padding-right: 1rem;
  width: 50%;
`;

const SessionBottom = styled.div`
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  background-color: #20232c;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Info = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
`;
