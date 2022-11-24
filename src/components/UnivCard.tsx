import styled from '@emotion/styled';

interface Props {
  name: string;
  logo: string;
}

const UnivCard = ({ name, logo }: Props) => {
  return (
    <Wrapper>
      <img src={logo} width={50} height={50} alt={name} />
      {name}
    </Wrapper>
  );
};

export default UnivCard;

const Wrapper = styled.section`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;
