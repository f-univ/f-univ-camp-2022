import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Wrapper>
      <GitHub href="https://github.com/f-univ/f-univ-camp-2022" target="_blank">
        GitHub 보러가기
      </GitHub>
      <Copy>© COPYRIGHT F - UNIV CAMP | 2022</Copy>
      <Designer>
        Designed by <Email href="mailto:ichexmin@gmail.com">CHEMIN</Email>
      </Designer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 5rem 0 3rem 0;
  text-align: center;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const GitHub = styled.a`
  color: #969696;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
`;

const Copy = styled.div`
  opacity: 0.8;
  color: #969696;
`;

const Designer = styled.div`
  font-size: 0.7rem;
  opacity: 0.7;
  color: #969696;
  line-height: 0.5rem;
`;

const Email = styled.a`
  text-decoration: underline;
  color: #969696;
`;
