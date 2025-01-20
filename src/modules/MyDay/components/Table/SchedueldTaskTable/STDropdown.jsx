import React, { useState } from "react";
import { Dropdown, Button, Menu } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const STDropdown = ({ label, menuItems, onChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleVisibleChange = (open) => {
    setDropdownOpen(open);
  };

  const menu = (
    <Menu>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          <item.Component
            onChange={(e) => onChange(item.filterKey, item.value, e.target.checked)}
          >
            {item.label}
          </item.Component>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} onOpenChange={handleVisibleChange}>
      <Button shape="round" style={{ width: "100%" }}>
        {label} {isDropdownOpen ? <UpOutlined /> : <DownOutlined />}
      </Button>
    </Dropdown>
  );
};

export default STDropdown;
