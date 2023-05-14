import React, { useState, useEffect }from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUS";
import DatosPersonales from "./DatosPer";
import DatosEntrega from "./DatosEnt";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { validarEmail, validarPassword } from "./DatosUS/validaciones";
import Step from "./Step";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(() => {

  })

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

  const onSubmit = () => {
    let newStep = step + 1
    setStep(newStep)
    console.log("Nuevo estado",newStep)
    console.log(step)
  };

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value)
    console.log(valid)
    console.log("posicion", position);
    console.log("Currentstep", currentStep);
    console.log("validator", validator);
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresar un correo electronico valido.",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña valida, al menos 8 caracteres y maximo 20.",
          validator: validarPassword
        },
      ],
      buttonText:"Siguiente",
      onSubmit,
    }
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
        {/*{steps[step]}*/}
       <Step data={ stepsFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;