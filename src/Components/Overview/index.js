import React from 'react'
import { Divider, Button, Space, Tooltip } from 'antd'
import { SiYarn, SiAnsible, SiGithub, SiApache, SiIos, SiMacos, SiKalilinux, SiDebian, SiUbuntu, SiLinux, SiIntellijidea, SiCodepen, SiClion, SiAndroid, SiVim, SiVisualstudio, SiVisualstudiocode, SiSqlite, SiMariadb, SiMysql, SiMongodb, SiBootstrap, SiAntdesign, SiHeroku, SiFirebase, SiExpo, SiDjango, SiFlask, SiJquery, SiElectron, SiCplusplus, SiC, SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiReactrouter, SiExpress, SiDocker, SiPostman, SiNginx, SiRaspberrypi, SiTorbrowser, SiMicrosoftoffice } from 'react-icons/si'
import { FaJava, FaNpm, FaWindows } from 'react-icons/fa'
import Matlab from '../Matlab'

const Overview = () => {
  return (
    <div className="overview" id="overview">
        <h1 align="center">
            Hey there! I'm Ethan. <span className="waving-hand">👋</span>
        </h1>
        <Divider className="divider" />
        <div className="overview-content">
          <h2>About Me</h2>
          <br />
          <p className="about-me-item">🏠 Hometown: <a href="https://www.google.com/maps/place/High+Point,+NC/@35.9996099,-80.0537088,12z/data=!3m1!4b1!4m5!3m4!1s0x88530bc771b841eb:0xf2ee8a2d049910df!8m2!3d35.9556923!4d-80.0053176" target="_blank">High Point</a>, North Carolina</p>
          <p className="about-me-item">🏫 University: <a href="https://www.highpoint.edu/" target="_blank">High Point University</a></p>
          <p className="about-me-item">📚 Major: <a href="https://www.highpoint.edu/computerscience/" target="_blank">B.S. Computer Science</a></p>
          <h2>Languages I Know</h2>
          <Space wrap>
            <Tooltip title="C"><Button className="language" style={{ color: 'white', backgroundColor: '#00599c' }}><SiC className="lang-icon" /></Button></Tooltip>
            <Tooltip title="C++"><Button className="language" style={{ color: 'white', backgroundColor: '#00599c' }}><SiCplusplus className="lang-icon" /></Button></Tooltip>
            <Tooltip title="JavaScript"><Button className="language" style={{ color: 'white', backgroundColor: '#323330' }}><SiJavascript className="lang-icon" /></Button></Tooltip>
            <Tooltip title="TypeScript"><Button className="language" style={{ color: 'white', backgroundColor: '#007acc' }}><SiTypescript className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Python"><Button className="language" style={{ color: 'white', backgroundColor: '#3670a0' }}><SiPython className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Matlab"><Button className="language" style={{ color: 'white', backgroundColor: '#0e7fb5' }}><Matlab className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Java"><Button className="language" style={{ color: 'white', backgroundColor: '#ed8b00' }}><FaJava className="lang-icon" /></Button></Tooltip>
            <Tooltip title="HTML5"><Button className="language" style={{ color: 'white', backgroundColor: '#e34f26' }}><SiHtml5 className="lang-icon" /></Button></Tooltip>
            <Tooltip title="CSS3"><Button className="language" style={{ color: 'white', backgroundColor: '#1572b6' }}><SiCss3 className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Frameworks I Use</h2>
          <Space wrap>
            <Tooltip title="React/React Native"><Button className="language" style={{ color: 'white', backgroundColor: '#20232a' }}><SiReact className="lang-icon" /></Button></Tooltip>
            <Tooltip title="NodeJS"><Button className="language" style={{ color: 'white', backgroundColor: '#6da55f' }}><SiNodedotjs className="lang-icon" /></Button></Tooltip>
            <Tooltip title="React Router"><Button className="language" style={{ color: 'white', backgroundColor: '#ca4245' }}><SiReactrouter className="lang-icon" /></Button></Tooltip>
            <Tooltip title="ExpressJS"><Button className="language" style={{ color: 'white', backgroundColor: '#404d59' }}><SiExpress className="lang-icon" /></Button></Tooltip>
            <Tooltip title="ElectronJS"><Button className="language" style={{ color: 'white', backgroundColor: '#191970' }}><SiElectron className="lang-icon" /></Button></Tooltip>
            <Tooltip title="jQuery"><Button className="language" style={{ color: 'white', backgroundColor: '#0769ad' }}><SiJquery className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Flask"><Button className="language" style={{ color: 'white', backgroundColor: '#20232a' }}><SiFlask className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Django"><Button className="language" style={{ color: 'white', backgroundColor: '#092e20' }}><SiDjango className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Tools and Databases I Use</h2>
          <Space wrap>
            <Tooltip title="Expo"><Button className="language" style={{ color: 'white', backgroundColor: '#1c1e24' }}><SiExpo className="lang-icon" /></Button></Tooltip>
            <Tooltip title="NPM"><Button className="language" style={{ color: 'white', backgroundColor: '#cb0000' }}><FaNpm className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Yarn"><Button className="language" style={{ color: 'white', backgroundColor: '#2c8ebb' }}><SiYarn className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Firebase"><Button className="language" style={{ color: 'white', backgroundColor: '#039be5' }}><SiFirebase className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Heroku"><Button className="language" style={{ color: 'white', backgroundColor: '#430098' }}><SiHeroku className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Ant Design"><Button className="language" style={{ color: 'white', backgroundColor: '#0170fe' }}><SiAntdesign className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Bootstrap"><Button className="language" style={{ color: 'white', backgroundColor: '#563d7c' }}><SiBootstrap className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MongoDB"><Button className="language" style={{ color: 'white', backgroundColor: '#4ea94b' }}><SiMongodb className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MySQL"><Button className="language" style={{ color: 'white', backgroundColor: '#0000ff' }}><SiMysql className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MariaDB"><Button className="language" style={{ color: 'white', backgroundColor: '#003545' }}><SiMariadb className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Sqlite"><Button className="language" style={{ color: 'white', backgroundColor: '#07405e' }}><SiSqlite className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>IDEs/Editors I Use</h2>
          <Space wrap>
            <Tooltip title="Visual Studio Code"><Button className="language" style={{ color: 'white', backgroundColor: '#0078d7' }}><SiVisualstudiocode className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Visual Studio"><Button className="language" style={{ color: 'white', backgroundColor: '#5c2d91' }}><SiVisualstudio className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Vim"><Button className="language" style={{ color: 'white', backgroundColor: '#11ab00' }}><SiVim className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Android Studio"><Button className="language" style={{ color: 'white', backgroundColor: '#3ddc84' }}><SiAndroid className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Clion"><Button className="language" style={{ color: 'white', backgroundColor: '#000000' }}><SiClion className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Codepen"><Button className="language" style={{ color: 'black', backgroundColor: '#fff' }}><SiCodepen className="lang-icon" /></Button></Tooltip>
            <Tooltip title="IntelliJ"><Button className="language" style={{ color: 'white', backgroundColor: '#000000' }}><SiIntellijidea className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Operating Systems I Use</h2>
          <Space wrap>
            <Tooltip title="Windows"><Button className="language" style={{ color: 'white', backgroundColor: '#0078d7' }}><FaWindows className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Linux"><Button className="language" style={{ color: '#000', backgroundColor: '#fcc624' }}><SiLinux className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Ubuntu"><Button className="language" style={{ color: 'white', backgroundColor: '#e95420' }}><SiUbuntu className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Debian"><Button className="language" style={{ color: 'white', backgroundColor: '#d70a53' }}><SiDebian className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Kali"><Button className="language" style={{ color: 'white', backgroundColor: '#268bee' }}><SiKalilinux className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MacOS"><Button className="language" style={{ color: 'white', backgroundColor: '#000' }}><SiMacos className="lang-icon" /></Button></Tooltip>
            <Tooltip title="iOS"><Button className="language" style={{ color: 'white', backgroundColor: '#000' }}><SiIos className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Android"><Button className="language" style={{ color: 'white', backgroundColor: '#3ddc84' }}><SiAndroid className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Other things I Use</h2>
          <Space wrap>
            <Tooltip title="Apache"><Button className="language" style={{ color: 'white', backgroundColor: '#d42029' }}><SiApache className="lang-icon" /></Button></Tooltip>
            <Tooltip title="NGINX"><Button className="language" style={{ color: 'white', backgroundColor: '#009639' }}><SiNginx className="lang-icon" /></Button></Tooltip>
            <Tooltip title="GitHub"><Button className="language" style={{ color: 'white', backgroundColor: '#121011' }}><SiGithub className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Ansible"><Button className="language" style={{ color: 'white', backgroundColor: '#1a1918' }}><SiAnsible className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Docker"><Button className="language" style={{ color: 'white', backgroundColor: '#0db7ed' }}><SiDocker className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Postman"><Button className="language" style={{ color: 'white', backgroundColor: '#ff6c37' }}><SiPostman className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Raspberry Pi"><Button className="language" style={{ color: 'white', backgroundColor: '#c51a4a' }}><SiRaspberrypi className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Tor"><Button className="language" style={{ color: 'white', backgroundColor: '#7e4798' }}><SiTorbrowser className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Microsoft Office"><Button className="language" style={{ color: 'white', backgroundColor: '#d83b01' }}><SiMicrosoftoffice className="lang-icon" /></Button></Tooltip>
          </Space>
        </div>
        <br /><br />
    </div>
  )
}

export default Overview