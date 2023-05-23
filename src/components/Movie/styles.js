import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    text-align: left;

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h2 {
        margin-bottom: 8px;
        flex: 1;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        margin-top: 15px;
        height: 60px;
        padding-right: 12px;
        overflow-y: auto;
        overflow-wrap: break-word;
        word-wrap: break-word;
        text-align: justify;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export function Stars(star) {
    const movieStars = []
    for(let cont = 0; cont < 5; cont++) {
        if(cont < star) {
            movieStars.push(1)
        } else {
            movieStars.push(0)
        }
    }
    return movieStars
}