// AddTaskForm.jsx
import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Col, Row, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import getDecryptAuthData from "../../../../../core/Utils/encryption/getDecryptAuthData";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddTaskForm = () => {
  const [isAddTaskVisible, setAddTaskVisible] = useState(false);

  const authData = getDecryptAuthData();
  console.log(authData);
  console.log(authData?.data.id);
  console.log(authData.data.default_organization);
  const authToken = authData?.data?.accessToken;
  const goalListUrl = import.meta.env.VITE_MYDAY_TABLE_GOAL_LIST_URL;
  const createTaskUrl = import.meta.env.VITE_MYDAY_TABLE_ADD_TASK_URL;

  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedImpact, setSelectedImpact] = useState("medium");
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true); // To handle the loading state
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          goalListUrl, // Replace with your actual goal list API URL
          {
            organization_id: "447",
            all: true,
            display_all: false,
            time_scope: "1 month",
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setGoals(response.data.data || []); // Set goals once fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching goals:", error);
        message.error("Failed to load goals.");
        setLoading(false);
      }
    };

    fetchGoals(); // Call the API when the component mounts
  }, [authToken]);

  const handleAddTask = async (values) => {
    try {
      const { taskName, goalId, impact, hours, minutes } = values;
      const effort = parseFloat(hours) + parseFloat(minutes) / 60;
      // Convert effort to hours
      console.log(taskName, goalId, impact, effort);
      console.log({
        organization_id: authData?.data?.default_organization,
        task_creator: authData?.data?.id,
        task_owner: authData?.data?.id,
        name: taskName,
        task_impact: impact,
        task_effort: effort,
        task_control: "medium",
        status: "Active",
        goal: goalId,
        attachments: "",
      });

      const response = await axios.post(
        createTaskUrl,
        {
          organization_id: authData?.data?.default_organization,
          task_creator: authData?.data?.id,
          task_owner: authData?.data?.id,
          name: taskName,
          task_impact: impact,
          task_effort: effort,
          task_control: "medium",
          status: "Active",
          goal: goalId,
          attachments: "",
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.success("Task added successfully!");
      form.resetFields(); // Clear the form after submission
      setAddTaskVisible(false)
    } catch (error) {

      console.error("Error adding task:", error);
      message.error("Failed to add task.");
    }
  };

  return (
    <>
      {!isAddTaskVisible ? (
        <Row style={{ margin: "2rem", textAlign: "center" }}>
          <Button
            type="text"
            icon={<PlusOutlined />}
            className="fw-600"
            onClick={() => setAddTaskVisible(true)}
          >
            Add Task
          </Button>
        </Row>
      ) : (
        <Row style={{ margin: "2rem 1rem" }} justify="space-between">
          <Col span={24}>
            <Form form={form} onFinish={handleAddTask} layout="inline">
              <Row style={{ width: "100%" }} justify="space-around">
                <Col span={5}>
                  <Form.Item
                    name="taskName"
                    rules={[
                      { required: true, message: "Please enter the task name" },
                    ]}
                  >
                    <Input
                      placeholder="Task Name"
                      style={{ borderRadius: "1rem" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item
                    name="goalId"
                    rules={[
                      { required: true, message: "Please select a goal" },
                    ]}
                  >
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Goal"
                      value={selectedGoal}
                      onChange={setSelectedGoal}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) => {
                        // Extract the text content of the Option (which is the hour)
                        const children = React.Children.toArray(
                          option.children
                        ).join("");
                        return children
                          .toLowerCase()
                          .includes(input.toLowerCase());
                      }}
                    >
                      {loading ? (
                        <Option value="loading">Loading Goals...</Option>
                      ) : (
                        goals.map((goal) => (
                          <Option key={goal.id} value={goal.id}>
                            {goal.name}
                          </Option>
                        ))
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    name="impact"
                    initialValue="medium"
                    rules={[
                      {
                        required: true,
                        message: "Please select an impact level",
                      },
                    ]}
                  >
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Impact"
                      value={selectedImpact}
                      onChange={setSelectedImpact}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option?.children
                          ?.toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    >
                      <Option value="high">High</Option>
                      <Option value="medium">Medium</Option>
                      <Option value="low">Low</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item
                    name="hours"
                    initialValue={0}
                    rules={[
                      { required: true, message: "Please select hours" },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          const minutes = getFieldValue("minutes");
                          if (value === 0 && minutes === 0) {
                            return Promise.reject(
                              new Error(
                                "Task Effort is Required"
                              )
                            );
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Hours"
                      value={selectedHour}
                      onChange={setSelectedHour}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) => {
                        const children = React.Children.toArray(
                          option.children
                        ).join("");
                        return children
                          .toLowerCase()
                          .includes(input.toLowerCase());
                      }}
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <Option key={i} value={i}>
                          {i} hours
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item
                    name="minutes"
                    initialValue={0}
                    rules={[
                      { required: true, message: "Please select minutes" },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          const hours = getFieldValue("hours");
                          if (value === 0 && hours === 0) {
                            return Promise.reject(
                              new Error(
                                "Task Effort is Required"
                              )
                            );
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                  >
                    <Select
                      style={{ width: "100%", borderRadius: "1rem" }}
                      placeholder="Select Minutes"
                      value={selectedMinutes}
                      onChange={setSelectedMinutes}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) => {
                        const children = React.Children.toArray(
                          option.children
                        ).join("");
                        return children
                          .toLowerCase()
                          .includes(input.toLowerCase());
                      }}
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <Option key={i} value={i}>
                          {i} mins
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Button
                    type="default"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#1D3BAF",
                    }}
                    shape="round"
                  >
                    Add
                  </Button>
                </Col>
                <Col span={1}>
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => setAddTaskVisible(false)}
                    style={{ width: "100%", color: "red" }}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
};

export default AddTaskForm;
