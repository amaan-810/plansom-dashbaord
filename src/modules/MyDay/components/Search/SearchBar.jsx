import React from "react";
import { Input, Button, Flex } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const SearchBar = () => {
  const screens = useBreakpoint();

  return (
    <Flex
      align="center"
      gap="small"
      justify="center"
      style={{
        marginTop: !screens.md && "4rem",
        backgroundColor: "transparent",
      }}
    >
      <Input
        placeholder="Search for a..."
        prefix={<SearchOutlined />}
        style={{
          borderRadius: "1.5rem",
          width: !screens.md
            ? `calc(100vw - 25vw)`
            : !screens.lg
            ? "calc(100vw - 50vw)"
            : `calc(100vw - 50vw)`,
          height: "1.rem",
        }}
      />
      <Button
        type="default"
        icon={<PlusOutlined />}
        iconPosition="start"
        style={{
          backgroundColor: "#1D3BAF",
          color: "white",
          borderRadius: "1.5rem",
          fontWeight: "600",
        }}
      >
        {!screens.md ? "" : "Add Item"}
      </Button>
    </Flex>
  );
};

export default SearchBar;
