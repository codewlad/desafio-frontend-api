import { Container, Stars } from './styles';
import { Tag } from '../Tag';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Movie({ data, ...rest}) {
    
    return (
        <Container {...rest} to={`/details/${data.id}`}>
            <h2>{data.title}</h2>
            <span>{
                Stars(data.rating).map((star, index) => star === 1 ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />)        
            }            
            </span>
            
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}