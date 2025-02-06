import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function App() {
  const onTextFieldChange = (e) => {
    // console.log(!!e.match(/^[0-9]*.?[0-9]+$/));
    if (e.name == "principle") {
      let val = !!e.value.match(/^[0-9]*.?[0-9]+$/);
      val ? setIsNotValidAmount(false) : setIsNotValidAmount(true);
      setPamount(e.value);
    }
    else if (e.name == "interest") {
      let val = !!e.value.match(/^[0-9]*.?[0-9]+$/);
      val ? setIsNotValidInterest(false) : setIsNotValidInterest(true);
      setInterest(e.value)
    }
    else if (e.name == "year") {
      let val = !!e.value.match(/^[0-9]*.?[0-9]+$/);
      val ? setIsNotValidYear(false) : setIsNotValidYear(true);
      setYear(e.value);
    }

  }
  const calculatetotal=()=>{
    if(Pamount && Interest && Year){
       setTotal((Pamount*Interest*Year)/100);
    }
    else{
      // alert('hgjk');
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning">Please Fill the data..</Alert>
      </Stack>
    }
  }
  const reset=()=>{
    setPamount(0);
    setInterest(0)
    setYear(0);
    setTotal(0);
    setIsNotValidAmount(false);
    setIsNotValidInterest(false);
    setIsNotValidYear(false);
  }
  const [Pamount, setPamount] = useState(0)
  const [Interest, setInterest] = useState(0)
  const [Year, setYear] = useState(0)
  const [total, setTotal] = useState(0)
  const [isNotValidAmount, setIsNotValidAmount] = useState(false)
  const [isNotValidInterest, setIsNotValidInterest] = useState(false)
  const [isNotValidYear, setIsNotValidYear] = useState(false)

  return (
    <>
      <div
        style={{ height: "100vh", width: "100%" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: "600px" }} className="bg-light rounded p-5">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple intrest Easly</p>
          <div className="bg-warning p-3 text-light text-center rounded">
            <h3>₹ {total}</h3>
          </div>

          <TextField
            id="outlined-basic"
            name="principle"
            value={Pamount||""}
            label="Princple Amount"
            variant="outlined"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={(e) => onTextFieldChange(e.target)}
          />
          <div className="text-center text-danger">
            {isNotValidAmount ? "Please Enter valid Data " : ""}</div>
          <TextField
            id="outlined-basic"
            name="interest"
            label="Rate of Interest"
            value={Interest||""}
            variant="outlined"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={(e) => onTextFieldChange(e.target)}
          />
          <div className="text-center text-danger">
            {isNotValidInterest ? "Please Enter valid Data " : ""}</div>
          <TextField
            id="outlined-basic"
            name="year"
            value={Year||""}
            label="Year"
            variant="outlined"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={(e) => onTextFieldChange(e.target)}
          />
          <div className="text-center text-danger">
            {isNotValidYear ? "Please Enter valid Data " : ""}</div>
          <Button variant="contained" className="bg-dark p-2 mt-3" disabled={isNotValidAmount || isNotValidInterest || isNotValidYear} onClick={calculatetotal}>
            CALCULATE
          </Button>
          <Button variant="contained"  className="bg-danger p-2 mt-3 ms-3" onClick={reset}>
            RESET
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
