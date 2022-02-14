import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #0076c3;
  border: 2px solid #0076c3;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  position: absolute;
  z-index: 2;
  width: 100%;
  margin: auto auto;
  right: 0;
  left: 0;
  top: 25px;
  bottom: 0;
`;

export const Label = styled.label`
  color: #fff;
  line-height: 1.5;
  font-weight: 700;
`;

export const TextArea = styled.textarea`
  height: 75%;
  margin: 10px 0;
`;

export const SubmitInput = styled.input`
  border-radius: 20px;
  border: 1px solid #0076c3;
  background-color: #0076c3;
  font-weight: 700;
  padding: 5px 25px;
  align-self: center;
  color: ${props => props.disabled ? 'gray' : '#fff'};
  pointer-events: ${props => props.disabled ? 'none' : 'initial'};
  margin-block-start: 5px;
  cursor: pointer;

  :hover {
    color: #9b247f;
  }
`;

export const CancelButton = styled.button`
  border-radius: 20px;
  border: 1px solid #0076c3;
  background-color: #0076c3;
  font-weight: 700;
  padding: 5px 25px;
  align-self: center;
  color: #fff;
  margin-block-start: 5px;
  cursor: pointer;

  :hover {
    color: #9b247f;
  }
`;

