import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form, Back } from './styles';

export function New() {
    return (
        <Container>
            <Header />

            <Back>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>
            </Back>

            <main>
                <Form>
                    <header>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />
                    
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem $isNew placeholder="Novo marcador" />
                        </div>
                    </Section>

                    <div>
                        <Button title="Excluir Filme" />
                        <Button title="Salvar" />
                    </div>                    
                </Form>
            </main>
        </Container>
    );
}