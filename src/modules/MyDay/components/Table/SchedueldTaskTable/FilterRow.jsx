import React from "react";
import { Row, Col, Checkbox, Divider, Button, Flex, Dropdown } from "antd";
import { DownOutlined, CloseOutlined } from "@ant-design/icons";
import Text from "antd/es/typography/Text";

const FilterRow = ({
  handleFilterChange,
  clearAllFilters,
  selectedFilters,
}) => {
  return (
    <>
      <Divider style={{ margin: 0 }} />
      <Row justify="space-between" style={{ margin: "1rem 1rem 1rem 1rem" }}>
        <Col span={19}>
          <Row justify="space-between">
            <Col span={7}>
              <Button
                shape="round"
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

        <Col span={3}>
          {selectedFilters.length > 0 && (
            <Button
              type="default"
              variant="outlined"
              shape="round"
              onClick={clearAllFilters}
              // icon={<CloseOutlined />}
              // iconPosition="end"
              style={{ width: "100%", color: "red" }}
            >
              <Flex
                justify="space-around"
                align="middle"
                style={{ width: "100%", color: "red" }}
              >
                <Text
                  style={{ width: "100%", color: "red" }}
                  className="fw-600"
                >
                  Clear
                </Text>
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
  );
};

export default FilterRow;
