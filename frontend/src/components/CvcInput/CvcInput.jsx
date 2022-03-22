import React from "react";
import { IMaskInput } from "react-imask";
const CvcInput = React.forwardRef(function CvcInput(props, ref) {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask="000"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default CvcInput;
