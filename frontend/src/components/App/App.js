import s from "./App.module.scss";
import { Alert, Button, FormControl, Input, InputLabel } from "@mui/material";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import { useEffect, useState } from "react";

import DateInput from "../DateInput/DateInput";
import CvcInput from "../CvcInput/CvcInput";
import { Box } from "@mui/system";
import AmountInput from "../AmountInput/AmountInput";
import { queryFetch } from "../../query/query";
function App() {
  const [formState, setFormState] = useState({
    CardNumber: "",
    ExpDate: "",
    Cvv: "",
    Amount: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [resultRequest, setResultRequest] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitSuccsess = (result) => {
    setResultRequest(result);
    setError(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    queryFetch(formState, submitSuccsess, () => {
      setError(true);
    });
  };

  useEffect(() => {
    if (
      !/\b[0-9]{16}\b/gm.test(formState.CardNumber) ||
      !/\b[0-9]{3}\b/gm.test(formState.Cvv) ||
      !/\b[0-9][0-9]\b\/[0-9]{4}\b/gm.test(formState.ExpDate) ||
      !/[0-9]{1,}/gm.test(formState.Amount)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formState]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        {error && <Alert severity="error">error</Alert>}
        {success && (
          <Alert severity="success" sx={{ mb: "10px" }}>
            RequestId: {resultRequest.RequestId}; Amount: {resultRequest.Amount}
          </Alert>
        )}
        <FormControl
          fullWidth
          sx={{
            mt: "10px",
            mb: "10px",
          }}
        >
          <InputLabel htmlFor="card-number">Card Number</InputLabel>
          <Input
            className={s.card_number}
            id="card-number"
            inputComponent={CardNumberInput}
            value={formState.CardNumber}
            onChange={handleChange}
            name="CardNumber"
          />
        </FormControl>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt: "10px",
            mb: "10px",
          }}
        >
          <FormControl>
            <InputLabel htmlFor="card-date">Card Date</InputLabel>
            <Input
              id="card-date"
              value={formState.ExpDate}
              name="ExpDate"
              onChange={handleChange}
              inputComponent={DateInput}
              placeholder={"MM/YYYY"}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="card-cvv">CVV</InputLabel>
            <Input
              placeholder="CVV"
              id="card-cvv"
              inputComponent={CvcInput}
              className={s.cvc_input}
              type="password"
              value={formState.Cvv}
              onChange={handleChange}
              name="Cvv"
            />
          </FormControl>
        </Box>

        <FormControl
          fullWidth
          sx={{
            mt: "10px",
            mb: "10px",
          }}
        >
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            placeholder="Amount"
            id="amount"
            name="Amount"
            inputComponent={AmountInput}
            value={formState.Amount}
            onChange={handleChange}
          />
        </FormControl>
        <Button
          disabled={!disabled}
          sx={{ height: "55px", mt: "15px" }}
          variant="contained"
          type="submit"
        >
          Pay
        </Button>
      </form>
    </>
  );
}

export default App;
