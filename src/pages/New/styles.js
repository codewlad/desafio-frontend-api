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
        margin: 0 123px;
        max-width: 100%;
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

    .tags {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    padding-right: 8px;

    div, textarea {
        margin: 0;
    }

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    > div {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    button:first-child {
        background-color: #0D0C0F;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .tags {
        border-radius: 8px;
        padding: 16px;
        background-color: #0D0C0F;
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