import styled from "styled-components";
import React, { useState } from "react";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Person as PersonIcon,
  Edit as EditIcon,
  Home as HomeIcon,
  AddPhotoAlternate as AddPhotoAlternateIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@mui/icons-material";
import { Checkbox, FormControlLabel, Link } from "@mui/material";
import TermsAndConditions from "../components/termCondition/TC";
const StyledSell = styled.section`
  width: 60%;
  margin: auto;
  height: auto;
  .introduction {
    line-height: 2;
  }
`;

export default function Sell() {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleNext = () => {
    setActiveStep(activeStep >= 2 ? 2 : activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep <= 0 ? 0 : activeStep - 1);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const steps = ["Introduction", "Guidelines", "Terms and Conditions"];

  const stepsArray = [
    {
      label: "Accept Terms",
      icon: <CheckCircleOutlineIcon />,
      content: "Please accept the terms and conditions before proceeding.",
    },
    {
      label: "Sign In",
      icon: <PersonIcon />,
      content: "Sign in to continue.",
    },
    {
      label: "Fill Extra Information",
      icon: <EditIcon />,
      content: "Fill in any additional information.",
    },
    {
      label: "Fill Property Information",
      icon: <HomeIcon />,
      content: "Provide details about the property.",
    },
    {
      label: "Upload Cover Image",
      icon: <AddPhotoAlternateIcon />,
      content: "Upload a cover image for the property.",
    },
    {
      label: "Upload Video (<100MB)",
      icon: <VideoLibraryIcon />,
      content: "Upload a video for the property (less than 100MB).",
    },
  ];

  return (
    <StyledSell>
      <Stepper
        sx={{
          padding: "40px 0px 40px 0px",
        }}
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <main>
          {activeStep === 0 ? (
            <div className="introduction">
              <Typography variant="h4" gutterBottom className="header">
                Introduction
              </Typography>
              Welcome to Jeffy Real Estate, your trusted partner in the world of
              real estate. Founded with a vision to redefine the real estate
              experience, we take pride in offering unparalleled services,
              cutting-edge solutions, and a customer-centric approach that sets
              us apart in the industry. Our journey began with a simple belief
              that real estate transactions should be more than just
              transactions; they should be transformative experiences that
              enrich lives and build lasting connections. At the heart of our
              company lies a deep commitment to our clients. We understand that
              buying, selling, or investing in real estate can be a significant
              decision, both financially and emotionally. That's why we
              prioritize understanding your unique needs and aspirations,
              ensuring that we provide tailored solutions to match them
              perfectly. Our team is comprised of seasoned real estate
              professionals who bring a wealth of knowledge and experience to
              the table. Their expertise spans various facets of the industry,
              including residential, commercial, and investment properties. With
              a pulse on the ever-changing market trends, we equip our clients
              with the most up-to-date information to make well-informed
              choices.
            </div>
          ) : activeStep === 1 ? (
            <div className="guideline">
              <Typography variant="h4" gutterBottom className="header">
                Guidelines
              </Typography>

              <Stepper activeStep={activeStep} orientation="vertical">
                {stepsArray.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel icon={step.icon}>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div></div>
            </div>
          ) : activeStep === 2 ? (
            <div className="terms&condition">
              <TermsAndConditions />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
            </div>
          ) : null}
        </main>

        <div>
          <br />
          <Button onClick={handleBack} style={{ marginRight: "10px" }}>
            Back
          </Button>
          <Button variant="outlined" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </StyledSell>
  );
}
