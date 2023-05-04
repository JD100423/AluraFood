import React, { useState }from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUS";
import DatosPersonales from "./DatosPer";
import DatosEntrega from "./DatosEnt";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [step, setStep] = useState(2);

  const updateStep = (step) => {
    console.log("actualizar paso", step)
    setStep(step)
  }

  const steps ={
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete />
  }
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step} />}
        {/*<DatosUsuario />
        <DatosPersonales />
        <DatosEntrega />*/}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;