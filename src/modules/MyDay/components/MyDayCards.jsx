import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import AIInsightCard from "./cards/AIInsightCard";
import GoalsCard from "./cards/GoalsCard";
import QuickWinsCard from "./cards/QuickWinsCard";

import data from "../../../../response/response2.json";
import data2 from "../../../../response/response4.json";
import "../styles/card.css";
import getDecryptAuthData from "../../../core/Utils/encryption/getDecryptAuthData";

const MyDayCards = () => {
  const [quickWinsData, setQuickWinsData] = useState(null);
  const [goalsData, setGoalsData] = useState(null);

  const quickWinsUrl = import.meta.env.VITE_QUICK_WINS_URL;
  const goalsApiUrl = import.meta.env.VITE_GOALS_API_URL;

 
  const authData = getDecryptAuthData();

  const authToken = authData?.data?.accessToken;

  useEffect(() => {
    const fetchQuickWins = async () => {
      try {
        const response = await axios.get(quickWinsUrl, {
          headers: {
            Accept: "application/json, text/plain, */*",
            Authorization: `Bearer ${authToken}`,
          },
        });
        setQuickWinsData(response.data);
        const quickWinsArray = Array.isArray(quickWinsData?.data?.quick_wins_data)
        ? quickWinsData.data.quick_wins_data
        : [];
      } catch (error) {
        console.error("Error fetching Quick Wins data:", error);
      }
    };

    fetchQuickWins();
  }, [quickWinsUrl, authToken]);

  // Fetch Goals Data
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.post(
          goalsApiUrl,
          {
            organization_id: "447",
            sort_by: "",
            sort_type: "",
            display_all: true,
            page_size: 3,
          },
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setGoalsData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching Goals data:", error);
      }
    };

    fetchGoals();
  }, [goalsApiUrl, authToken]);

  return (
    <Row
      gutter={[16, 16]}
      className="mydaycard-row"
      style={{
        padding: screen.md && "1rem",
      }}
      justify="center"
      align="center"
    >
      <Col xs={24} sm={24} md={22} lg={8} xl={8}>
        <AIInsightCard cardData={quickWinsData?.data?.ai_message_data} />
        
      </Col>
      <Col xs={24} sm={24} md={22} lg={8} xl={8}>
        <GoalsCard cardData={goalsData?.data} />
       
      </Col>
      <Col xs={24} sm={24} md={22} lg={8} xl={8}>
        {quickWinsData?.data?.quick_wins_data?.length > 0 && (
          <QuickWinsCard cardData={quickWinsData?.data} />
        )}

      </Col>
    </Row>
  );
};

export default MyDayCards;
