import styled from 'styled-components'

export const MenuLateral = styled.div`
  position: absolute;
  background-color: var(--color-azul-escuro);
  height: 100vh;
  width: 250px;
`;

export const Itens = styled.div`
  /* box-sizing: border-box; */
  /* position: absolute; */
  padding: 5px;
  width: 100%;
  margin-top: 5px;

  a{
    display: block;
    text-decoration: none;   
    color: white;
  }  

  :hover{
    background-color: var(--color-azul-claro);
  }
`  

export const Sair = styled.div`
  /* box-sizing: border-box; */
  /* position: absolute; */
  padding: 5px;
  width: 100%;
  margin-top: 5px;
  
  a{
    display: block;
    text-decoration: none;   
    color: white;
  }  

  :hover{
    background-color: var(--color-azul-claro);
  }
`  