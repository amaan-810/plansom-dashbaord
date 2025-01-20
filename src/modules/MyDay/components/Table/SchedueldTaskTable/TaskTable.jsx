import React from "react";
import { Table,Progress } from "antd";
import { formatEffort, getFlagColor, getStrokeColor } from "../../../config/tableUtility.js";

const TaskTable = ({ filteredData }) => {
  const columns = [
    { title: "Task", dataIndex: "task", key: "task", sorter: (a, b) => a.task.localeCompare(b.task) },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
      sorter: (a, b) => a.goal.completedPercent - b.goal.completedPercent,
      render: (_, record) => (
        <>
          <div style={{ color: "#565C76" }}>{record.goal.name}</div>
          <Progress
            percent={record.goal.completedPercent}
            size="small"
            showInfo={false}
            strokeColor={getStrokeColor(record?.goal.goalStatus)}
          />
        </>
      ),
    },
    {
      title: "Who",
      dataIndex: "who",
      key: "who",
      sorter: (a, b) => a.who.firstName.localeCompare(b.who.firstName),
    },
    // Add other columns here...
  ];

  const dataSource = filteredData.map((task) => ({
    key: task.id,
    task: task.name,
    goal: {
      name: task.goal?.name,
      completedPercent: task.goal?.goal_completed_percent || 0,
      goalStatus: task.goal?.goal_status,
    },
    who: {
      firstName: task.goal?.goal_owner?.first_name,
    },
    // Add other data mappings...
  }));

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};

export default TaskTable;
