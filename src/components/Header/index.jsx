import { Brand, Container, Profile } from "./styles";
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            <Input
                placeholder="Pesquisar pelo título"
            />
            <Profile>
                <div>
                    <strong>Wladimir Gonçalves</strong>
                    <Link to="#">sair</Link>
                </div>
                <Link to="/profile">
                    <img
                        src="https://github.com/codewlad.png"
                        alt="Foto do usuário"
                    />
                </Link>
            </Profile>
        </Container>
    );
}