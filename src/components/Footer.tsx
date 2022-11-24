import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Wrapper>
      <GitHub href="https://github.com/f-univ/f-univ-conf-2022" target="_blank">
        GitHub
      </GitHub>
      <Copy>© COPYRIGHT F - UNIV CONF | 2022</Copy>
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
  color: white;
  text-decoration: underline;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Copy = styled.div`
  opacity: 0.8;
  color: #bdbdbd;
`;

const Designer = styled.div`
  font-size: 0.7rem;
  opacity: 0.7;
  color: #bdbdbd;
  line-height: 0.5rem;
`;

const Email = styled.a`
  text-decoration: underline;
`;
