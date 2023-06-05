import { Container, Stars } from './styles';
import { Tag } from '../Tag';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai'
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";

export function MoviePreview({ data, ...rest}) {
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    return (
        <Container {...rest}>
            <div>
                <h1>{data.title}</h1>
                <span>
                    {
                        Stars(data.rating).map((star, index) => star === 1 ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />)        
                    }            
                </span>
            </div>

            <div>
                <img
                    src={avatarUrl}
                    alt="Foto do usuário"
                />
                <span>Por: {user.name}</span>
                <AiOutlineClockCircle />
                <span>{data.created_at}</span>
            </div>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }       
            
            <p>{data.description}</p>            
        </Container>
    )
}