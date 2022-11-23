import styled from '@emotion/styled';

const ScrollTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper onClick={handleScroll}>
      <Text>
        Participate in
        <br /> F - UNIV CONFERENCE
      </Text>
      <svg
        width="25"
        height="25"
        viewBox="0 0 51 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5002 0.464355L50.768 25.7321L47.2324 29.2677L28.0002 10.0354V52.9999H23.0002V10.0354L3.76796 29.2677L0.232422 25.7321L25.5002 0.464355Z"
          fill="white"
        />
      </svg>
    </Wrapper>
  );
};

export default ScrollTop;

const Wrapper = styled.button`
  width: 414px;
  height: 6rem;
  background-color: #4000fa;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  gap: 4rem;
  margin-top: 4rem;
`;

const Text = styled.div`
  text-align: start;
  font-weight: 500;
`;
