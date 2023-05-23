import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-rows: 116px 85px auto;
    grid-template-areas:
    "header"
    "back"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

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

export const Back = styled.div`
    max-width: 100%;
    margin: 0 123px;
    display: flex;
    align-items: center;

    > a {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.PINK};
        gap: 8px;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 0 123px;

    display: flex;
    flex-direction: column;
`;