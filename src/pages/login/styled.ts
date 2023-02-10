import styled from "styled-components";

export const DivMain = styled.div`
  width: auto;
  height: auto;
  padding: 32px;
  color: white;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.22);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.09);

  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
`;
