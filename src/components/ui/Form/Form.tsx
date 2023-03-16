import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import Button from '../Button';
import Input from './components/Input';
import Row from './components/Row';
import Subheading from './components/Subheading';

interface Props
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export default function Form({ children, ...formProps }: Props) {
  return <form {...formProps}>{children}</form>;
}

Form.Subheading = Subheading;
Form.Input = Input;
Form.Row = Row;
