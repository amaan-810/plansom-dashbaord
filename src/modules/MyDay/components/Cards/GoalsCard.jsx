// GoalsCard.jsx
import React from "react";
import { Card, Progress } from "antd";

const goals = [
    { key: "1", name: "Capacity increasing", progress: 78, status: "green" },
    { key: "2", name: "Quality Control Enhancing", progress: 54, status: "green" },
    { key: "3", name: "Distribution Network Expanding", progress: 46, status: "yellow" },
  ];

const GoalsCard = () => (
  <Card style={{ fontSize: "1rem" }} className="myday-card">
    <div>
      <strong style={{ fontSize: "1.25rem", margin: "1rem 0rem" }}>
        Goals Progress
      </strong>
    </div>
    {goals.map((goal) => (
      <div key={goal.key}>
        <p style={{ margin: "0rem" }}>{goal.name}</p>
        <Progress
          percent={goal.progress}
          status={goal.status}
          strokeColor={goal.status}
          size="small"
        />
      </div>
    ))}
  </Card>
);

export default GoalsCard;
