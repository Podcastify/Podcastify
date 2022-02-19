import { useState, useEffect, useCallback } from "react";

export default function useInput(formInputs) {
  const [inputs, setInputs] = useState(formInputs);

  useEffect(() => {
    setInputs(formInputs);
  }, [setInputs, formInputs]);

  const handleValidationCheck = useCallback(
    (name, invalidMessage) => {
      setInputs(
        inputs.map((input) => {
          const statesName = input.attributes.name;
          return statesName !== name
            ? input
            : { ...input, errorMessage: invalidMessage };
        })
      );
    },
    [setInputs, inputs]
  );

  const handleChange = useCallback(
    (name, newValue) => {
      setInputs(
        inputs.map((input) => {
          return name !== input.attributes.name
            ? input
            : {
                ...input,
                attributes: { ...input.attributes, value: newValue },
              };
        })
      );
    },
    [setInputs, inputs]
  );

  const handlers = {
    handleChange,
    handleValidationCheck,
  };

  return {
    inputs,
    setInputs,
    handlers,
  };
}
