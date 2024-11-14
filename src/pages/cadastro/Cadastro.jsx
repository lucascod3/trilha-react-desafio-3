import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent, FormWrapper, InputField, LabelText } from './styles';

const Register = () => {

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        // Lógica de registro
        console.log("Registro realizado");
        navigate('/login'); // Navega para a página de login após o registro
    }

    return (
        <>
            <Header />
            <Container>
                <FormWrapper>
                    <Title>
                        <TitleHighlight>Registre-se </TitleHighlight>
                        agora e inicie sua jornada!
                    </Title>
                    <TextContent>
                        Preencha os campos abaixo para criar sua conta e acessar as melhores oportunidades.
                    </TextContent>
                    <form onSubmit={handleRegister}>
                        <LabelText>Nome Completo</LabelText>
                        <InputField type="text" placeholder="Digite seu nome completo" required />
                        
                        <LabelText>Email</LabelText>
                        <InputField type="email" placeholder="Digite seu e-mail" required />

                        <LabelText>Senha</LabelText>
                        <InputField type="password" placeholder="Digite sua senha" required />
                        
                        <Button title="Criar conta" variant="primary" />
                    </form>
                </FormWrapper>
            </Container>
        </>
    );
}

export { Register };
