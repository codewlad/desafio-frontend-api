import { FiPlus } from 'react-icons/fi'
import { Container, NewMovie, Content, Movies} from './styles';
import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";

import { Movie } from '../../components/Movie'
import { Header } from '../../components/Header'

export const searchContext = createContext([]);

export function Home() {
    const [notes, setNotes] = useState([]);
    let page = true;

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function loadNotes() {
            const response = await api.get("/notes");
            setNotes(response.data);
        }

        loadNotes()
    }, [])

    return (
        
        <Container>
            <searchContext.Provider value={[notes, setNotes, page]}>
                <Header />
            </searchContext.Provider>

            <Movies>
                <h1>Meus filmes</h1>
                <NewMovie to="/new" onClick={page=false}>
                    <FiPlus />Adicionar filme
                </NewMovie>
            </Movies>

            <Content>
                {
                    notes && notes.map(note => (
                        <Movie
                            key={note.id}
                            data={note}
                            onClick={page=false}
                        />    
                    ))
                }
            </Content>                
        </Container>
    )
}