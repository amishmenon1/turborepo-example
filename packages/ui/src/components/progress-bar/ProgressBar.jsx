import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

export const ProgressBar = ({ colorProp = "red" }) => {
  return (
    <div>
      <CircularProgress sx={{ color: colorProp }} />
    </div>
  );
};

ProgressBar.propTypes = {};
