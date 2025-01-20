import React, { useState } from "react";
import {
  Table,
  Progress,
  Switch,
  Button,
  Row,
  Col,
  Space,
  Card,
  Divider,
  Select,
  Tag,
  Checkbox,
  Dropdown,
  Menu,
  Flex,
} from "antd";
import {
  FilterOutlined,
  FlagFilled,
  PlusOutlined,
  CloseOutlined,
  DownOutlined,
  EllipsisOutlined
} from "@ant-design/icons";
import "../../styles/tableCard.css";
import Text from "antd/es/typography/Text";
import {
  formatEffort,
  getFlagColor,
  getStrokeColor,
} from "../../config/tableUtility";
import rightArrow from "../../../../assets/images/rightArrow.svg";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const ScheduledTaskTable = ({ tableData }) => {
  const screens = useBreakpoint();
  const [isFilterRowVisible, setFilterRowVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData?.data?.task_list);

  const items = [
    { key: "in-progress", label: "In progress" },
    { key: "completed", label: "Completed" },
    { key: "not-started", label: "Not started" },
  ];


  const handleFilterChange = (filterKey, value, checked) => {
    let newFilters = [...selectedFilters];

    if (checked) {
      newFilters.push({ key: filterKey, value });
    } else {
      newFilters = newFilters.filter(
        (filter) => filter.key !== filterKey || filter.value !== value
      );
    }

    setSelectedFilters(newFilters);
    applyFilters(newFilters);
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilteredData(tableData?.data?.task_list);
  };

  const applyFilters = (filters) => {
    if (filters.length === 0) {
      setFilteredData(tableData?.data?.task_list);
      return;
    }

    let filtered = tableData?.data?.task_list;

    filters.forEach((filter) => {
      filtered = filtered.filter((item) => {
        if (filter.key === "status") {
          return item.status === filter.value;
        } else if (filter.key === "task_impact") {
          return item.task_impact === filter.value;
        }
        return true;
      });
    });

    setFilteredData(filtered);
  };

  // const getMenu = (filterKey, options) => (
  //   <Menu>
  //     {options.map((option) => (
  //       <Menu.Item key={option.value}>
  //         <Checkbox
  //           onChange={(e) =>
  //             handleFilterChange(filterKey, option.value, e.target.checked)
  //           }
  //         >
  //           {option.label}
  //         </Checkbox>
  //       </Menu.Item>
  //     ))}
  //   </Menu>
  // );

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
      render: (_, record) => (
        <Switch checked={record.active.status === "Active"} />
      ),
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
    { title: "Type", dataIndex: "type", key: "type"  ,  },
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
          <Dropdown menu={{items}} trigger={["click"]}>
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
  }));

  return (
    <Card
      style={{ borderRadius: "1rem", marginBottom: "1rem" }}
      className="myday-tb-card"
    >
      <Row justify="space-between" align="middle" style={{ margin: "2rem" }}>
        <Col>
          <Text className="f-bricolage fw-600" style={{ fontSize: "1.5rem" }}>
            Scheduled Tasks for Today
          </Text>
        </Col>
        <Col>
          <Space>
            <Button
              icon={isFilterRowVisible ? <CloseOutlined /> : <FilterOutlined />}
              iconPosition={isFilterRowVisible ? "end" : "start"}
              shape="round"
              size="large"
              className="fw-600"
              onClick={() => setFilterRowVisible(!isFilterRowVisible)}
            >
              Filter
            </Button>
            <Button size="large" shape="round" className="fw-600">
              View All <img src={rightArrow} alt="" />
            </Button>
          </Space>
        </Col>
      </Row>

      {isFilterRowVisible && (
        <>
          <Divider style={{ margin: 0 }} />
          <Row justify="space-between" style={{ margin: "1rem 1rem 1rem 1rem" }}>
            <Col span={19}>
              {/* <Button shape="round" style={{margin:"0.5rem"}}>Filter by Active</Button> */}
              <Row justify="space-between">
                <Col span={7}>
                  <Button
                    shape="round"
                    // icon={<DownOutlined />}
                    // iconPosition="end"
                    style={{ width: "100%", fontSize: "0.75rem" }}
                  >
                    <Flex justify="space-between" style={{ width: "100%" }}>
                      <Text className="fw-600">Goal</Text>
                      <Text>
                        <DownOutlined />
                      </Text>
                    </Flex>
                  </Button>
                </Col>
                <Col span={5}>
                  <Button
                    shape="round"
                    style={{ width: "100%", fontSize: "0.75rem" }}
                  >
                    <Flex justify="space-between" style={{ width: "100%" }}>
                      <Text className="fw-600">Who</Text>
                      <Text>
                        <DownOutlined />
                      </Text>
                    </Flex>
                  </Button>
                </Col>
                <Col span={3}>
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "active",
                          label: (
                            <Checkbox
                              onChange={(e) =>
                                handleFilterChange(
                                  "status",
                                  "Active",
                                  e.target.checked
                                )
                              }
                            >
                              Active
                            </Checkbox>
                          ),
                        },
                        {
                          key: "inactive",
                          label: (
                            <Checkbox
                              onChange={(e) =>
                                handleFilterChange(
                                  "status",
                                  "Inactive",
                                  e.target.checked
                                )
                              }
                            >
                              Inactive
                            </Checkbox>
                          ),
                        },
                      ],
                    }}
                    trigger={["click"]}
                  >
                    <Button
                      shape="round"
                      // icon={<DownOutlined />}
                      // iconPosition="end"
                      style={{ width: "100%", fontSize: "0.75rem" }}
                    >
                      <Flex justify="space-between" style={{ width: "100%" }}>
                        <Text className="fw-600">Active</Text>
                        <Text>
                          <DownOutlined />
                        </Text>
                      </Flex>
                    </Button>
                  </Dropdown>
                </Col>
                <Col span={3}>
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "high",
                          label: (
                            <Checkbox
                              onChange={(e) =>
                                handleFilterChange(
                                  "task_impact",
                                  "High",
                                  e.target.checked
                                )
                              }
                            >
                              High
                            </Checkbox>
                          ),
                        },
                        {
                          key: "medium",
                          label: (
                            <Checkbox
                              onChange={(e) =>
                                handleFilterChange(
                                  "task_impact",
                                  "Medium",
                                  e.target.checked
                                )
                              }
                            >
                              Medium
                            </Checkbox>
                          ),
                        },
                        {
                          key: "low",
                          label: (
                            <Checkbox
                              onChange={(e) =>
                                handleFilterChange(
                                  "task_impact",
                                  "Low",
                                  e.target.checked
                                )
                              }
                            >
                              Low
                            </Checkbox>
                          ),
                        },
                      ],
                    }}
                    trigger={["click"]}
                  >
                    <Button
                      shape="round"
                      // icon={<DownOutlined />}
                      // iconPosition="end"
                      className="fw-600"
                      style={{ width: "100%", fontSize: "0.75rem" }}
                    >
                      <Flex justify="space-between" style={{ width: "100%" }}>
                        <Text className="fw-600">Impact</Text>
                        <Text>
                          <DownOutlined />
                        </Text>
                      </Flex>
                    </Button>
                  </Dropdown>
                </Col>
                <Col span={5}>
                  <Button
                    shape="round"
                    // icon={<DownOutlined />}
                    // iconPosition="end"
                    style={{ width: "100%", fontSize: "0.75rem" }}
                  >
                    <Flex justify="space-between" style={{ width: "100%" }}>
                      <Text className="fw-600">Type</Text>
                      <Text>
                        <DownOutlined />
                      </Text>
                    </Flex>
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col span={3} >
              {selectedFilters.length > 0 && (
                <Button
                  type="default"
                  variant="outlined"
                  shape="round"
                  onClick={clearAllFilters}
                  // icon={<CloseOutlined />}
                  // iconPosition="end"
                  style={{width:"100%",color:"red"}}
                >
                  <Flex justify="space-around"  align="middle"  style={{width:"100%",color:"red"}}>
                    <Text style={{width:"100%",color:"red"}} className="fw-600">Clear</Text>
                    <Text>
                      <CloseOutlined />
                    </Text>
                  </Flex>
                </Button>
              )}
            </Col>
          </Row>
          <Divider style={{ margin: 0 }} />
        </>
      )}

      {selectedFilters.length > 0 && !isFilterRowVisible && (
        <>
          <Divider style={{ margin: 0 }} />
          <Row
            style={{ margin: "1rem 2rem" }}
            align="middle"
            justify="space-between"
          >
            <Col>
              {selectedFilters.map((filter) => (
                <Tag
                  key={filter.value}
                  closable
                  onClose={() =>
                    handleFilterChange(filter.key, filter.value, false)
                  }
                  style={{
                    padding: "0.5rem",
                    borderRadius: "1.5rem",
                    backgroundColor: "#E8EBF7",
                  }}
                >
                  {`${filter.value} `}
                </Tag>
              ))}
            </Col>
            <Col>
              <Button
                type="default"
                variant="outlined"
                shape="round"
                onClick={clearAllFilters}
                icon={<CloseOutlined />}
                iconPosition="end"
              >
                Clear All Filters
              </Button>
            </Col>
          </Row>

          <Divider style={{ margin: 0 }} />
        </>
      )}

      <Divider style={{ margin: 0 }} />
      <Row>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          style={{ width: "100%", overflow: "auto" }}
        />
      </Row>
      <Divider style={{ margin: 0 }} />
      <Row style={{ margin: "2rem", textAlign: "center" }}>
        {" "}
        <Button type="text" icon={<PlusOutlined />} className="fw-600">
          Add Task
        </Button>
      </Row>
    </Card>
  );
};

export default ScheduledTaskTable;
