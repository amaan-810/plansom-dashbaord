import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Row,Col } from 'antd'
import ScheduledTaskTable from './table/ScheduledTaskTable'
import ScheduledTasksCard from './table/ScheduledTasksCard'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import getDecryptAuthData from '../../../core/Utils/encryption/getDecryptAuthData'

const MyDayTable = () => {

  const [tableData, setTableData] = useState(null);

  const tableDataUrl=import.meta.env.VITE_MYDAY_TABLE_URL;
  const authData=getDecryptAuthData()
  const authToken=authData?.data?.accessToken


  useEffect(() => {
    const fetchTaskList = async () => {
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
        setTableData(response.data);
       
      } catch (error) {
        console.error("Error fetching task list:", error);
      }
    };
    

    fetchTaskList();
  }, [tableDataUrl, authToken]);

  const screens=useBreakpoint();
  return (
    <Row justify="center"style={{width:"100%"}}>
    {screens.lg ? (
      <Col span={24}>
        {tableData!==null && <ScheduledTaskTable tableData={tableData}/>}
      </Col>
    ) : (
      <Col span={24} >
        { <ScheduledTasksCard tableData={tableData} />}
        
      </Col>
    )}
  </Row>
  )
}

export default MyDayTable
