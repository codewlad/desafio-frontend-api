import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: transparent;

    text-align: left;

    border: none;
    border-radius: 10px;

    margin-bottom: 16px;

    div:first-child {
        display: flex;
        align-items: center;
        gap: 19px;
        margin-bottom: 24px;
    }

    div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    img {
        width: 16px;
        height: 16px;
    }

    > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
        margin-top: 40px;
        white-space: pre-line;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 40px;
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