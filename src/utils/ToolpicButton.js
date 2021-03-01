import React from "react";

// Mui Stuff
import Tooltip from "@material-ui/core/Tooltip";

export default ({ children, onClick, tip, tipClassName }) => (
  <Tooltip
    title={tip}
    className={tipClassName}
    placement="bottom"
    onClick={onClick}
  >
    {children}
  </Tooltip>
);
