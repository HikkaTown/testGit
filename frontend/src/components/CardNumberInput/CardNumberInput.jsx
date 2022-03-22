import React from "react";
import { IMaskInput } from "react-imask";

const CardNumberInput = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="0000 0000 0000 0000"
      unmask={true}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default CardNumberInput;
