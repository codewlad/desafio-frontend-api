import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 130px auto;
    grid-template-areas:
    "header"
    "mymovies"
    "content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px 8px ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Content = styled.div`
    grid-area: content;

    margin: 0 123px;
    overflow-y: auto;
    padding-right: 8px;

    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px 8px ${({ theme }) => theme.COLORS.PINK};
    }

    
`;

export const Movies = styled.div`
    grid-area: mymovies;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 40px 123px 40px 123px;
    width: 100%;
`;

export const NewMovie = styled(Link)`
    height: 48px;
    font-size: 16px;
    line-height: 21px;

    padding: 14px 32px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.PINK };
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`;