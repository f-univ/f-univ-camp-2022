import { speakers } from '@/resources/index.js';
import Speaker from './Speaker.jsx';

const Speakers = () => {
  return (
    <>
      {speakers.map((speaker) => (
        <Speaker key={speaker.name} speakInfo={speaker} />
      ))}
    </>
  );
};

export default Speakers;
