import React from "react";
import { IMaskInput } from "react-imask";
import IMask from "imask";

const DateInput = React.forwardRef(function DateInput(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="MM/YY"
      blocks={{
        YY: { mask: "0000" },
        MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default DateInput;
