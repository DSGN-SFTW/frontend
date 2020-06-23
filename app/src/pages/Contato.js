import React from "react";
import styled from "styled-components";
import { Input, TextField, FormLabel } from "@material-ui/core";

const ContactForm = styled.div`
  text-align: center;
  justify-content: center;
  width: 35%;
  height: 58%;
  padding-top: 5%;
  border-bottom: 1px solid #f0f0f0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px;
  border-radius: 10px;
`;

const Form = styled.form`
  padding-top: 10%;
`;

const MessageInput = styled.input`
  height: 200px;
  font-size: 14pt;
`;
const Title = styled.h1`
  font-size: 50px;
`;

function Contato() {
  return (
    <>
      <ContactForm>
        <Title>Contato</Title>
        <Form>
          <FormLabel>Email para contato: </FormLabel>
          <Input type="text" placeholder="Digite seu email"></Input>
          <br />
          <FormLabel>Seu nome: </FormLabel>
          <Input type="text" placeholder="Digite seu Nome"></Input>
          <br />
          <FormLabel>Mensagem: </FormLabel>
          <br />
          <MessageInput placeholder="Digite sua mensagem..."></MessageInput>
        </Form>
      </ContactForm>
    </>
  );
}

export default Contato;
