import { useState, useEffect, useContext } from 'react';
import { Brand, Container, Profile } from "./styles";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { searchContext } from '../../pages/Home';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [search, setSearch] = useState("");

    const [notes, setNotes, page] = useContext(searchContext);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            if(page){
                setNotes(response.data);
            }
        }

        fetchNotes()
    }, [search]);

    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            <Input
                placeholder="Pesquisar pelo título"
                onChange={e => setSearch(e.target.value)}
                disabled={page ? false : true}
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