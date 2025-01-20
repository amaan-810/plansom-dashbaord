
// import React from "react";
// import {
//   Table,
//   Progress,
//   Switch,
//   Typography,
//   Flex,
//   Dropdown,
//   Button,
//   message,
// } from "antd";
// import { FlagFilled, DownOutlined, EllipsisOutlined } from "@ant-design/icons";
// import {
//   formatEffort,
//   getFlagColor,
//   getStrokeColor,
// } from "../../../config/tableUtility.js";
// import axios from "axios";
// import getDecryptAuthData from '../../../../../core/Utils/encryption/getDecryptAuthData.js'

// const TaskTable = ({ filteredData, setFilteredData }) => {
//   const { Text } = Typography;

//   const handleStatusChange = async (taskId, currentStatus) => {
//     const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//     const taskIndex = filteredData.findIndex((task) => task.key === taskId);

//     const authData = getDecryptAuthData();
//     const authToken = authData?.data?.accessToken;
//     const updateUrl=import.meta.env.VITE_MYDAY_TABLE_TASK_UPDATE_URL
//     // const organizationID=


//     try {
//       // Make API call to update the task status
//       const response = await axios.put(
//         `${updateUrl}/${taskId}/update`,
//         {
//           organization_id: "447", // Replace with actual org ID if dynamic
//           status: newStatus,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`, // Replace with the actual token
//           },
//         }
//       );

//       // Success response
//       console.log(response.data)
//       message.success(`Task status updated to ${newStatus}`);

//       // Update the local state for immediate UI feedback
//       const updatedTasks = [...filteredData];
//       updatedTasks[taskIndex] = {
//         ...updatedTasks[taskIndex],
//         active: { status: newStatus },
//       };

//       setFilteredData(updatedTasks);
//     } catch (error) {
//       // Handle errors
//       console.error("Error updating task status:", error);
//       message.error("Failed to update task status. Please try again.");
//     }
//   };

//   const columns = [
//     {
//       title: "Task",
//       dataIndex: "task",
//       key: "task",
//       sorter: (a, b) => a.task.localeCompare(b.task),
//     },
//     {
//       title: "Goal",
//       dataIndex: "goal",
//       key: "goal",
//       sorter: (a, b) => a.goal.completedPercent - b.goal.completedPercent,
//       render: (_, record) => (
//         <>
//           <div style={{ color: "#565C76" }}>{record.goal.name}</div>
//           <Progress
//             percent={record.goal.completedPercent}
//             size="small"
//             showInfo={false}
//             strokeColor={getStrokeColor(record?.goal.goalStatus)}
//           />
//         </>
//       ),
//     },
//     {
//       title: "Who",
//       dataIndex: "who",
//       key: "who",
//       sorter: (a, b) => a.who.firstName.localeCompare(b.who.firstName),
//       render: (_, record) => {
//         const truncatedName =
//           record?.who?.firstName?.length > 8
//             ? `${record?.who?.firstName.slice(0, 8)}...`
//             : record?.who?.firstName;
//         return (
//           <Text>
//             {record?.who?.LastName.charAt(0).toUpperCase() + ". "}
//             {truncatedName}
//           </Text>
//         );
//       },
//     },
//     {
//       title: "Active",
//       dataIndex: "active",
//       key: "active",
//       sorter: (a, b) => Number(a.active) - Number(b.active),
//       render: (_, record) => (
//         <Switch
//           checked={record.active.status === "Active"}
//           onChange={() => handleStatusChange(record.key, record.active.status)}
//         />
//       ),
//     },
//     {
//       title: "Impact",
//       dataIndex: "impact",
//       key: "impact",
//       sorter: (a, b) => {
//         const impactOrder = { High: 3, Medium: 2, Low: 1 };
//         return impactOrder[b.impact] - impactOrder[a.impact];
//       },
//       render: (impact) => (
//         <Text>
//           <FlagFilled
//             style={{
//               color: getFlagColor(impact),
//               marginRight: "0.5rem",
//             }}
//           />
//           {impact}
//         </Text>
//       ),
//     },
//     {
//       title: "Effort",
//       dataIndex: "effort",
//       key: "effort",
//       sorter: (a, b) => {
//         const totalMinutesA =
//           Math.floor(a.effort) * 60 +
//           Math.round((a.effort - Math.floor(a.effort)) * 60);
//         const totalMinutesB =
//           Math.floor(b.effort) * 60 +
//           Math.round((b.effort - Math.floor(b.effort)) * 60);
//         return totalMinutesA - totalMinutesB;
//       },
//       render: (effort) => formatEffort(effort),
//     },
//     { title: "Type", dataIndex: "type", key: "type" },
//     {
//       title: "Due In",
//       dataIndex: "dueIn",
//       key: "dueIn",
//       sorter: (a, b) => a.dueIn - b.dueIn,
//     },
//     {
//       title: "Outcome",
//       dataIndex: "outcome",
//       key: "outcome",
//       render: (outcome) => (
//         <Flex>
//           <Dropdown menu={{ items: [] }} trigger={["click"]}>
//             <Button
//               icon={<DownOutlined />}
//               iconPosition="end"
//               shape="round"
//               onClick={(e) => e.preventDefault()}
//             >
//               {outcome}
//             </Button>
//           </Dropdown>
//           <Button
//             icon={<EllipsisOutlined />}
//             iconPosition="start"
//             type="text"
//           ></Button>
//         </Flex>
//       ),
//     },
//   ];

//   const dataSource = filteredData?.map((task) => ({
//     key: task.id,
//     task: task.name,
//     goal: {
//       name: task.goal?.name,
//       completedPercent: task.goal?.goal_completed_percent || 0,
//       goalStatus: task.goal?.goal_status,
//     },
//     who: {
//       firstName: task.goal?.goal_owner?.first_name,
//       LastName: task.goal?.goal_owner?.last_name,
//     },
//     active: {
//       status: task?.status,
//     },
//     impact: task.task_impact,
//     effort: task.task_effort,
//     type: task.task_type,
//     dueIn: task.due_in,
//     outcome: task.task_success,
//   }));

//   return (
//     <Table
//       columns={columns}
//       dataSource={dataSource}
//       pagination={false}
//       style={{ minWidth: "100%" }}
//     />
//   );
// };

// export default TaskTable;

import React from "react";
import {
  Table,
  Progress,
  Switch,
  Typography,
  Flex,
  Dropdown,
  Button,
  message,
} from "antd";
import { FlagFilled, DownOutlined, EllipsisOutlined } from "@ant-design/icons";
import {
  formatEffort,
  getFlagColor,
  getStrokeColor,
} from "../../../config/tableUtility.js";
import axios from "axios";
import getDecryptAuthData from "../../../../../core/Utils/encryption/getDecryptAuthData.js";

const TaskTable = ({ filteredData, setFilteredData }) => {
  
  const { Text } = Typography;

  
  const authData = getDecryptAuthData();
  const authToken = authData?.data?.accessToken;

  const fetchTaskList = async () => {
    const tableDataUrl=import.meta.env.VITE_MYDAY_TABLE_URL;
    try {
      const response = await axios.post(
        tableDataUrl, // Accessing API URL from .env
        {}, // Empty body as in the curl request
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            Authorization: `Bearer ${authToken}`, // Accessing the Authorization token from .env
          },
        }
      );
      setFilteredData(response?.data?.data?.task_list || []);
      console.log("Task List Data:", response?.data?.data?.task_list)
    } catch (error) {
      console.error("Error fetching task list:", error);
    }
  };

  const handleStatusChange = async (taskId, currentStatus, organizationId) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    const taskIndex = filteredData.findIndex((task) => task.key === taskId);

    const updateUrl = import.meta.env.VITE_MYDAY_TABLE_TASK_UPDATE_URL;

    try {
      // Make API call to update the task status
      const response = await axios.put(
        `${updateUrl}/${taskId}/update`,
        {
          organization_id: organizationId, // Use dynamically retrieved org ID
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Success response
      message.success(`Task status updated to ${newStatus}`);
      await fetchTaskList(); // Refresh the task list


    } catch (error) {
      // Handle errors
      console.error("Error updating task status:", error);
      message.error("Failed to update task status. Please try again.");
    }
  };

  const columns = [
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
      sorter: (a, b) => a.task.localeCompare(b.task),
    },
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
      render: (_, record) => {
        const truncatedName =
          record?.who?.firstName?.length > 8
            ? `${record?.who?.firstName.slice(0, 8)}...`
            : record?.who?.firstName;
        return (
          <Text>
            {record?.who?.LastName.charAt(0).toUpperCase() + ". "}
            {truncatedName}
          </Text>
        );
      },
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      sorter: (a, b) => Number(a.active) - Number(b.active),
      render: (_, record) => {
        const organizationId = record.organization_id; // Dynamically fetch org ID
        return (
          <Switch
            checked={record.active.status === "Active"}
            onChange={() =>
              handleStatusChange(record.key, record.active.status, organizationId)
            }
          />
        );
      },
    },
    {
      title: "Impact",
      dataIndex: "impact",
      key: "impact",
      sorter: (a, b) => {
        const impactOrder = { High: 3, Medium: 2, Low: 1 };
        return impactOrder[b.impact] - impactOrder[a.impact];
      },
      render: (impact) => (
        <Text>
          <FlagFilled
            style={{
              color: getFlagColor(impact),
              marginRight: "0.5rem",
            }}
          />
          {impact}
        </Text>
      ),
    },
    {
      title: "Effort",
      dataIndex: "effort",
      key: "effort",
      sorter: (a, b) => {
        const totalMinutesA =
          Math.floor(a.effort) * 60 +
          Math.round((a.effort - Math.floor(a.effort)) * 60);
        const totalMinutesB =
          Math.floor(b.effort) * 60 +
          Math.round((b.effort - Math.floor(b.effort)) * 60);
        return totalMinutesA - totalMinutesB;
      },
      render: (effort) => formatEffort(effort),
    },
    { title: "Type", dataIndex: "type", key: "type" },
    {
      title: "Due In",
      dataIndex: "dueIn",
      key: "dueIn",
      sorter: (a, b) => a.dueIn - b.dueIn,
    },
    {
      title: "Outcome",
      dataIndex: "outcome",
      key: "outcome",
      render: (outcome) => (
        <Flex>
          <Dropdown menu={{ items: [] }} trigger={["click"]}>
            <Button
              icon={<DownOutlined />}
              iconPosition="end"
              shape="round"
              onClick={(e) => e.preventDefault()}
            >
              {outcome}
            </Button>
          </Dropdown>
          <Button
            icon={<EllipsisOutlined />}
            iconPosition="start"
            type="text"
          ></Button>
        </Flex>
      ),
    },
  ];

  const dataSource = filteredData?.map((task) => ({
    key: task.id,
    task: task.name,
    goal: {
      name: task.goal?.name,
      completedPercent: task.goal?.goal_completed_percent || 0,
      goalStatus: task.goal?.goal_status,
    },
    who: {
      firstName: task.goal?.goal_owner?.first_name,
      LastName: task.goal?.goal_owner?.last_name,
    },
    active: {
      status: task?.status,
    },
    impact: task.task_impact,
    effort: task.task_effort,
    type: task.task_type,
    dueIn: task.due_in,
    outcome: task.task_success,
    organization_id: task.organization, // Include org ID for dynamic use
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      style={{ minWidth: "100%" }}
    />
  );
};

export default TaskTable;
