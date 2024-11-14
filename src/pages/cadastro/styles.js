import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormWrapper = styled.div`
    background-color: #1A1A1A;
    padding: 35px;
    border-radius: 10px;
    width: 100%;
    max-width: 480px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 30px;
    width: 100%;
    margin-bottom: 18px;
    text-align: center;
    line-height: 42px;

    color: #FFFFFF;
`;

export const TitleHighlight = styled.span`
    color: #E4105D;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 18px;
    color: #FFFFFF;
`;

export const LabelText = styled.label`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 10px;
    align-self: flex-start;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 18px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    background-color: #2E2E2E;
    color: #FFFFFF;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #E4105D;
    }
`;
