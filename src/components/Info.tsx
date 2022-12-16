import styled from '@emotion/styled';

const Info = () => {
  return (
    <Wrapper>
      <Title>
        F - UNIV CAMP
        <TitleSVG>
          어떤건가요?
          <svg
            width="23"
            height="23"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="61" height="61" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_322_955" transform="scale(0.0138889)" />
              </pattern>
              <image
                id="image0_322_955"
                width="72"
                height="72"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAADAFBMVEUAAAC4aB7qnyT3xSuhSxuzXRzceguoTxziiBD1uSrMdg2kTRzrsyehThyrThvedyThgAX+40P91j7+1kTZdw3qmxj8zDf+4kTflhPGZhzLahTytCOEOhfggQzqoiHvpyDUcQrBdyW9ahXifwLXciH1wCmfTh74wyr+5EP+2ET+20T8wyqmVhrxkhnObRzphhauWhn90DLpghejVR3BZRrnlBDegQrjhAemVRzjgAmxWhzvsiSxVBn+2kbHbRHxuSe4XR380DXopSH/1kbYehHlnx3kmh2XSRzBZhbrpBv6zDGnWBf/2UacTR7BYRn8yC7/2FCiUhqzURrnmhjZfw3ifgf1ohrRaiWyViHBWhfwsyP+0DrKag96MRSHORrLbxClVhr5mxt8NhHifgH+9WT84ETmgQH+8Vz+8l/971n97VXqhAH850v740j73UDDcBHnlQrtjAX94j381znjlg7jjwnmnBHqlAi1ZxbynAr/9V/woBLtmwv//6j68mT//6H6zC35tRb6qhL//4z671z/71L6xCTVgAz2oQrmkAn561j961L6wSP3uR/4vh7//4X+9mf+6Uvjkwv//3776VH3yjL60THtqxnooRXmkgn//5L35FD+40T91i+qXRjQewztlgjshwH//5z//5f//Xbv2FD+6Eb13Eb72zv0sxzxrhr5uRnwpxT2rxH1qA3dhQz//6306WD/81f32Tz00TXxyzDiign//G//60z92zXzwzD4ySnuwin7yijwsxvsoRDZhQr/+mr70zU0MzP0wyP2nSDqpxzx4VdaWVb03038zivvvSP15lVHRkbtyjzrwDL0qynzvCijUCfytiTdiQzv00NbWTirVyfeiwr97nTrzEby1D730zqUSSHnhgXV02v/+GTBv2Dq31amo07djwxzcnHl43Dd2Fu8tk3VkjMmJiebTR3NghyGPxuNjY/y725ralT3yUZHRjPEfRzr6+ucm52Ih4ZlZGLFwE2WlEqCfkj2uDzboCTbdQ2mpqnsih63lU7rAAAAY3RSTlMABwv+Ev4/NVYS/iL+V0f+vJ4/KiopHOn+9cWKc21iORz9/fPp2c+9i3xwTP7+/Pn38/Dt5uHf0KSPgG9lXPHt18u7uqikgmJi8Ovb2b61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"
              />
            </defs>
          </svg>
        </TitleSVG>
        <svg
          width="86"
          height="2"
          viewBox="0 0 86 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.75" x2="86" y2="1.75" stroke="white" strokeWidth="2.5" />
        </svg>
      </Title>
      <ProgramDescription>
        <Bold>프론트엔드</Bold>를 궁금해하고
        <br />
        사랑하는 대학생님들아 모여!!!
      </ProgramDescription>
      <TextWrapper>
        <Memoji src="/images/memoji.png" alt="memoji" />
      </TextWrapper>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.article`
  width: 85%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #406bee;
  @media screen and (min-width: 576px) {
    width: 414px;
  }
`;

const Title = styled.h1`
  padding: 3rem 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 400;
  font-family: 'Sportsball Regular', 'Pretendard-Medium';
  text-align: center;
  line-height: 2.2rem;
  color: white;
`;

const TitleSVG = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 1.4rem;
`;

const ProgramDescription = styled.div`
  padding-bottom: 2rem;
  font-size: 1.2rem;
  text-align: center;
  color: white;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const TextWrapper = styled.div`
  padding: 2rem 2rem 3rem 2rem;
`;

const Memoji = styled.img`
  width: 100%;
  aspect-ratio: 644/383;
`;
