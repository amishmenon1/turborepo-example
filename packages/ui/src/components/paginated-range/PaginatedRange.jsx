import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@mui/material";

export const PaginatedRange = ({
  countProp = 10,
  defaultPageProp = 1,
  colorProp = "primary",
  disabled = false,
}) => {
  return (
    <div>
      <Pagination
        key={Math.random()}
        count={countProp}
        defaultPage={defaultPageProp}
        color={colorProp}
        disabled={disabled}
      />
    </div>
  );
};

PaginatedRange.propTypes = {
  colorProp: PropTypes.string, //.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};
