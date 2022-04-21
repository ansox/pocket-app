import styled from 'styled-components'

const ButtonStyled = styled.button`
  margin-top: ${(props) => props.marginTop || '0'};
  width: 150px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  background: rgb(53, 108, 243);
  color: #fff;
  font-weight: bold;
  margin-right: 15px;
`

function Button(props) {
  return <ButtonStyled {...props} />
}

export default Button
