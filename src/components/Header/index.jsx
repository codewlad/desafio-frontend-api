import { Brand, Container, Profile } from "./styles";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
                    <strong>{user.name}</strong>
                    <Link onClick={signOut}>sair</Link>
                </div>
                <Link to="/profile">
                    <img
                        src={avatarUrl}
                        alt="Foto do usuário"
                    />
                </Link>
            </Profile>
        </Container>
    );
}