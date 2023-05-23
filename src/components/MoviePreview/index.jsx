import { Container, Stars } from './styles';
import { Tag } from '../Tag';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai'

export function MoviePreview({ data, ...rest}) {
    
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
                    src="https://github.com/codewlad.png"
                    alt="Foto do usuário"
                />
                <span>Por: Wladimir Gonçalves</span>
                <AiOutlineClockCircle />
                <span>23/05/22 às 08:00</span>
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