import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;
    line-height: 14px;
    padding: 5px 16px;
    border-radius: 5px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`