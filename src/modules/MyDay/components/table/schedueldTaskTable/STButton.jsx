import React from "react";
import { Button } from "antd";

const STButton = ({ label, icon, onClick, style = {}, size = "large", shape = "round" }) => {
  return (
    <Button size={size} shape={shape} onClick={onClick} style={style}>
      {icon} {label}
    </Button>
  );
};

export default STButton;
