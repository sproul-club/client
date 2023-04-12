/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClubsCreateFormInputValues = {
    name?: string;
    abbreviation?: string;
    description?: string;
    profilePhoto?: string;
    headingPhoto?: string;
    isApplicationOpen?: boolean;
    categories?: string[];
    numMembers?: number;
    yearFounded?: string;
    website?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    discord?: string;
    email?: string;
};
export declare type ClubsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    abbreviation?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    profilePhoto?: ValidationFunction<string>;
    headingPhoto?: ValidationFunction<string>;
    isApplicationOpen?: ValidationFunction<boolean>;
    categories?: ValidationFunction<string>;
    numMembers?: ValidationFunction<number>;
    yearFounded?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    linkedin?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    discord?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClubsCreateFormOverridesProps = {
    ClubsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    abbreviation?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    profilePhoto?: PrimitiveOverrideProps<TextFieldProps>;
    headingPhoto?: PrimitiveOverrideProps<TextFieldProps>;
    isApplicationOpen?: PrimitiveOverrideProps<SwitchFieldProps>;
    categories?: PrimitiveOverrideProps<TextFieldProps>;
    numMembers?: PrimitiveOverrideProps<TextFieldProps>;
    yearFounded?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    discord?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClubsCreateFormProps = React.PropsWithChildren<{
    overrides?: ClubsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClubsCreateFormInputValues) => ClubsCreateFormInputValues;
    onSuccess?: (fields: ClubsCreateFormInputValues) => void;
    onError?: (fields: ClubsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClubsCreateFormInputValues) => ClubsCreateFormInputValues;
    onValidate?: ClubsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClubsCreateForm(props: ClubsCreateFormProps): React.ReactElement;
