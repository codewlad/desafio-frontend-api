import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Back, Content } from './styles';
import { useParams } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';

import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { MoviePreview } from '../../components/MoviePreview';

export function Details() {
  const [data, setData] = useState(null);  

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir o filme?");

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return(
    <Container>

      <Header />

      <Back>
        <Link onClick={handleBack}>
            <FiArrowLeft /> Voltar
        </Link>
      </Back>

      {
        data &&
        <main>
          <Content>
            <MoviePreview data={data} />
            <Button
              title="Excluir Filme"
              onClick={handleRemove}
            />
          </Content>
        </main>        
      }

      

    </Container>
  )
}