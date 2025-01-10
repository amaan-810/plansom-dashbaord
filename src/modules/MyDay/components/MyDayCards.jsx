import React from 'react'
import { Row ,Col, Table } from 'antd'
import AIInsightCard from './Cards/AIInsightCard'
import GoalsCard from './Cards/GoalsCard'
import QuickWinsCard from './Cards/QuickWinsCard'

import data from '../../../../response/response2.json'
import data2 from '../../../../response/response4.json'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import TableCard from './TableCard'


const MyDayCards = () => {

  // console.log(data);
  const screens=useBreakpoint();

  return (
    <Row gutter={[16, 16]} style={{padding: screen.md && "1rem", margin:"0", display: "flex",
      justifyContent: "center",
      alignItems: "stretch",}} justify="center" align='center'>
    <Col xs={24} sm={24} md={22} lg={8} xl={8}>
      <AIInsightCard cardData={data.data.ai_message_data}/>
    </Col>
    <Col xs={24} sm={24} md={22} lg={8} xl={8}>
      <GoalsCard cardData={data2.data}/>
    </Col>
    <Col xs={24} sm={24} md={22} lg={8} xl={8}>
      <QuickWinsCard cardData={data.data}/>
    </Col>
    {!screens.lg && <Col span={24}>
      <TableCard/>
      </Col>
    }
  </Row>
  )
}

export default MyDayCards
