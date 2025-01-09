import React from 'react'
import { Row ,Col } from 'antd'
import AIInsightCard from './Cards/AIInsightCard'
import GoalsCard from './Cards/GoalsCard'
import QuickWinsCard from './Cards/QuickWinsCard'


const MyDayCards = () => {
  return (
    <Row gutter={[16, 16]} style={{padding: "1rem", margin:"0", display: "flex",
      justifyContent: "center",
      alignItems: "stretch", }} justify="center" align='center'>
    <Col xs={24} sm={24} md={22} lg={8} xl={8}>
      <AIInsightCard/>
    </Col>
    <Col xs={24} sm={24} md={22} lg={8} xl={8}>
      <GoalsCard />
    </Col>
    <Col xs={24} sm={24} md={22} lg={8} xl={8}>
      <QuickWinsCard />
    </Col>
  </Row>
  )
}

export default MyDayCards
