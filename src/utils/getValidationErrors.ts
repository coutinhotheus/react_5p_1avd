/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
    const ValidationErrors: Errors = {};

    err.inner.forEach((error) => {
        ValidationErrors[error.path || "key"] = error.message;
    });

    return ValidationErrors;
}
