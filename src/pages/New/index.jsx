import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import { Container, Form, Back } from './styles';

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Digite o título do filme.")
        }

        if(!rating) {
            return alert("Digite a nota do filme de 0 a 5")
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags,
        });

        alert("Filme adicionado com sucesso!");
        navigate("/");
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <Back>
                <Link onClick={handleBack}>
                    <FiArrowLeft /> Voltar
                </Link>
            </Back>

            <main>
                <Form>
                    <header>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                                $isNew
                                placeholder="Novo marcador"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div>
                        <Button
                            title="Salvar"
                            onClick={handleNewNote}
                        />
                    </div>                    
                </Form>
            </main>
        </Container>
    );
}