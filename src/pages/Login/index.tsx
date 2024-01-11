import { Link } from "react-router-dom";
import { Container, Form, Content, Logo, Links } from "./styles";
import { TextField, Button } from "@mui/material";
import logoImage from "../../assets/images/logo.png";

const Page = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Logo src={logoImage} alt="Logo" />
          <TextField
            label="Email"
            variant="outlined"
            placeholder="Digite seu e-mail"
            fullWidth
          />
          <TextField
            label="Senha"
            variant="outlined"
            placeholder="Digite sua senha"
            type="password"
            fullWidth
          />
          <Links>
            <Link to="/register">Criar uma conta</Link>
            <Link to="/rewrite-password">Esqueci minha senha</Link>
          </Links>
          <Button variant="contained">Fazer Login</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Page;
