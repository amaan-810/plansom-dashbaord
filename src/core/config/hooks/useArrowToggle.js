import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const useArrowToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const ArrowIcon = isOpen ? <UpOutlined /> : <DownOutlined />;

  return { isOpen, toggle, ArrowIcon };
};

export default useArrowToggle;
