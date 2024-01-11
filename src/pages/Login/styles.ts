import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  border: 1px solid #fcfc;
  border-radius: 5px;
  padding: 16px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
