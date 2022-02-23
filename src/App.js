import { Space, Row, Col, Layout, Menu } from 'antd'
import Info from './Components/Info'
import Overview from './Components/Overview'
import Projects from './Components/Projects'
import { FiBookOpen } from 'react-icons/fi'
import { BiAward } from 'react-icons/bi'
import { AiOutlineCode } from 'react-icons/ai'
import Certificates from './Components/Certificates'
const { Header } = Layout;

function App() {
  return (
    <Row>
      <Header className="header">
        <Row>
          <Col sm={0} md={7}/>
          <Col sm={24 }md={17}>
            <Menu className="header-menu" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth', block: 'start' })} key="1" className="header-menu-item"><FiBookOpen className="header-menu-icon" /><b>Overview</b></Menu.Item>
              <Menu.Item onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })} key="2" className="header-menu-item"><AiOutlineCode className="header-menu-icon" /><b>Projects</b></Menu.Item>
              <Menu.Item onClick={() => document.getElementById('certificates').scrollIntoView({ behavior: 'smooth', block: 'start' })} key="3" className="header-menu-item"><BiAward className="header-menu-icon" /><b>Certificates</b></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Col sm={24} md={7}>
        <Space direction="vertical">
            <Info />
        </Space>
      </Col>
      <Col sm={24} md={17}>
        <Row>
          <Col md={23}>
            <Overview />
            <br />
            <Projects />
            <br />
            <Certificates />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
