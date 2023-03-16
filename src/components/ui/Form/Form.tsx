import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import Input from './components/Input';
import Row from './components/Row';
import SectionHeading from './components/SectionHeading';

interface Props
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export default function Form({ children, ...formProps }: Props) {
  return <form {...formProps}>{children}</form>;
}

Form.SectionHeading = SectionHeading;
Form.Input = Input;
Form.Row = Row;
