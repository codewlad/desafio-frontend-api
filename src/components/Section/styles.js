import styled from 'styled-components';

export const Container = styled.section`
    margin: 28px 0 28px;

    > h2 {
        margin-bottom: 24px;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 20px;
        line-height: 26px;
        font-weight: 400;
    }
`;

