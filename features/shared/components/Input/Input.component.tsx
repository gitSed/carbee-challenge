"use client";
import { forwardRef, ForwardedRef } from "react";
import { useController } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";

import { IPropTypes } from "./Input.types";

function Input(
  props: IPropTypes,
  ref?: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const {
    helperText,
    label,
    isDisabled,
    isRequired,
    id,
    showError = true,
    hiddenLabel = false,
    placeholder,
    ...controller
  } = props;
  const { field, fieldState } = useController(controller);

  return (
    <FormControl
      id={id || field.name}
      isInvalid={Boolean(fieldState.error)}
      isDisabled={isDisabled}
      isRequired={isRequired}
    >
      <FormLabel hidden={hiddenLabel}>{label}</FormLabel>
      <ChakraInput
        {...field}
        ref={ref}
        aria-labelledby={`${id || field.name}-label`}
        placeholder={placeholder}
      />
      {fieldState.error && showError ? (
        <FormErrorMessage role="alert">
          {fieldState.error && fieldState.error.message}
        </FormErrorMessage>
      ) : (
        helperText && (
          <FormHelperText textStyle="label">{helperText}</FormHelperText>
        )
      )}
    </FormControl>
  );
}

export default forwardRef(Input);
