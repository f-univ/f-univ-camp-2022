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
  width: 90px;
  padding: 10px 0;
  background-color: white;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 0.8rem;
`;
