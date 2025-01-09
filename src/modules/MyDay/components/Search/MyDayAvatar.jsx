import React from 'react';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import { Flex,Avatar, Button } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';


const MyDayAvatar = () => {
    const screens=useBreakpoint();
  return (
    <Flex align='center' justify='flex-end' style={{paddingLeft: screens.lg && "1rem",position:"relative",zIndex: "5"}}>
        <Avatar
            size={screens.md? 32: 40}
            icon={<UserOutlined />}
            style={{ backgroundColor: "gray", cursor: "pointer" }}
          />
        
        {screens.lg && <Button style={{fontWeight: "600"}} type="text"  icon={<DownOutlined />} iconPosition="end" variant='text' >Alexander</Button>}
          
    </Flex>
  );
}

export default MyDayAvatar;
