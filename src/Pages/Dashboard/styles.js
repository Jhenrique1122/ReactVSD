import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;

`

export const Content = styled.div`
width: 40%;
margin-top: 64px;

display:flex;
justify-content: center;
align-items:center;

label{
  display:flex;
  flex-direction: column;
  font-size: 10px;
  width: 100%;
}
`

export const Button = styled.button`
  width: 120px;
      height: 32px;
      margin-top: 28px;
      background: ${({theme}) => theme.primary};
      border: 0;
      border-radius: 4px;
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 8px;

      svg {
        margin-left: 8px;
        background: transparent;

      }

      transition: all 0.3s;

      &:hover {
        transform: scale(1.13);

      }
`

export const Input = styled.input`
    margin-top: 4px;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.primary};
    background: ${({theme}) => theme.primary_light};
    border-radius: 4px;


    &::placeholder{
      color: ${({theme}) => theme.gray};
    }
`