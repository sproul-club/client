/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Clubs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClubsUpdateFormInputValues = {
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
export declare type ClubsUpdateFormValidationValues = {
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
export declare type ClubsUpdateFormOverridesProps = {
    ClubsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ClubsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClubsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clubs?: Clubs;
    onSubmit?: (fields: ClubsUpdateFormInputValues) => ClubsUpdateFormInputValues;
    onSuccess?: (fields: ClubsUpdateFormInputValues) => void;
    onError?: (fields: ClubsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClubsUpdateFormInputValues) => ClubsUpdateFormInputValues;
    onValidate?: ClubsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClubsUpdateForm(props: ClubsUpdateFormProps): React.ReactElement;
