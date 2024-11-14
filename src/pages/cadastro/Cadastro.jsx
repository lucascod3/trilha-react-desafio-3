import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent, FormContainer, Input, Label } from './styles';

const Cadastro = () => {

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        // Lógica de cadastro
        console.log("Cadastro realizado");
        navigate('/login'); // Navega para a página de login após o cadastro
    }

    return (
        <>
            <Header />
            <Container>
                <FormContainer>
                    <Title>
                        <TitleHighlight>Cadastre-se </TitleHighlight>
                        agora e comece sua jornada!
                    </Title>
                    <TextContent>
                        Preencha os campos abaixo para criar sua conta e acessar as melhores oportunidades.
                    </TextContent>
                    <form onSubmit={handleSignUp}>
                        <Label>Nome Completo</Label>
                        <Input type="text" placeholder="Digite seu nome completo" required />
                        
                        <Label>Email</Label>
                        <Input type="email" placeholder="Digite seu e-mail" required />

                        <Label>Senha</Label>
                        <Input type="password" placeholder="Digite sua senha" required />
                        
                        <Button title="Criar conta" variant="primary" />
                    </form>
                </FormContainer>
            </Container>
        </>
    );
}

export { Cadastro };
