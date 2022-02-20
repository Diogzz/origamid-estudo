import React from 'react';
import Button from './Button';
import Input from './Input';

function Form() {
  return (
    <>
      <form action="">
        <Input id="nome" label="nome" inputName="nome" required>
          Nome
        </Input>
        <Input id="email" label="email" type="email" inputName="email" required>
          Email
        </Input>
        <Input
          id="senha"
          label="senha"
          inputName="senha"
          type="password"
          required
        >
          Senha
        </Input>
        <Button fundo="green" cor="white">
          Enviar
        </Button>
      </form>
    </>
  );
}

export default Form;
