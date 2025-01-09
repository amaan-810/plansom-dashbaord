// QuickWinsCard.jsx
import React from "react";
import { Card, Button } from "antd";
import { BulbOutlined } from "@ant-design/icons";

const QuickWinsCard = () => (
  <Card className="myday-card">
    <div>
      <strong style={{ fontSize: "1.25rem", margin: "1rem 0rem" }}>
        Quick Wins
      </strong>
    </div>
    <p>Update Social Media Profile</p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="default"
        style={{
          backgroundColor: "#3100A6",
          color: "white",
          borderRadius: "1.5rem",
          fontWeight: "bold",
          padding: "1rem",
        }}
      >
        Complete Task
      </Button>
      <Button
        type="primary"
        shape="circle"
        style={{
          backgroundColor: "white",
          color: "grey",
          borderRadius: "50%",
          fontWeight: "bold",
          padding: "0.75rem",
        }}
        icon={<BulbOutlined />}
      />
    </div>
  </Card>
);

export default QuickWinsCard;
