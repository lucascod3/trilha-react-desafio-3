import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    background-color: #1C1C1C;
    padding: 40px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    line-height: 44px;

    color: #FFFFFF;
`;

export const TitleHighlight = styled.span`
    color: #E4105D;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    color: #FFFFFF;
`;

export const Label = styled.label`
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 8px;
    align-self: flex-start;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    background-color: #333333;
    color: #FFFFFF;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #E4105D;
    }
`;

