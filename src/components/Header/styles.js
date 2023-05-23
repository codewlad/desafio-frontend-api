import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    gap: 64px;

    padding: 24px 123px;
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    min-width: 218px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 9px;
        line-height: 18px;

        strong {
            font-size: 14px;
            line-height: 18px;
            text-align: right;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        a {
            font-size: 14px;
            line-height: 18px;
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
    };

    img {
        margin-left: 8px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;