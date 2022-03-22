import React from "react";
import { IMaskInput } from "react-imask";

const AmountInput = React.forwardRef(function AmountInput(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={Number}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default AmountInput;
