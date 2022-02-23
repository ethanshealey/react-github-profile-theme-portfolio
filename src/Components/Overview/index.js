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
            <Tooltip title="C"><Button className="language lang-type-1"><SiC className="lang-icon" /></Button></Tooltip>
            <Tooltip title="C++"><Button className="language lang-type-1"><SiCplusplus className="lang-icon" /></Button></Tooltip>
            <Tooltip title="JavaScript"><Button className="language lang-type-1"><SiJavascript className="lang-icon" /></Button></Tooltip>
            <Tooltip title="TypeScript"><Button className="language lang-type-1"><SiTypescript className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Python"><Button className="language lang-type-1"><SiPython className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Matlab"><Button className="language lang-type-2"><Matlab className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Java"><Button className="language lang-type-1"><FaJava className="lang-icon" /></Button></Tooltip>
            <Tooltip title="HTML5"><Button className="language lang-type-1"><SiHtml5 className="lang-icon" /></Button></Tooltip>
            <Tooltip title="CSS3"><Button className="language lang-type-1"><SiCss3 className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Frameworks I Use</h2>
          <Space wrap>
            <Tooltip title="React/React Native"><Button className="language lang-type-1"><SiReact className="lang-icon" /></Button></Tooltip>
            <Tooltip title="NodeJS"><Button className="language lang-type-1"><SiNodedotjs className="lang-icon" /></Button></Tooltip>
            <Tooltip title="React Router"><Button className="language lang-type-1"><SiReactrouter className="lang-icon" /></Button></Tooltip>
            <Tooltip title="ExpressJS"><Button className="language lang-type-1"><SiExpress className="lang-icon" /></Button></Tooltip>
            <Tooltip title="ElectronJS"><Button className="language lang-type-1"><SiElectron className="lang-icon" /></Button></Tooltip>
            <Tooltip title="jQuery"><Button className="language lang-type-1"><SiJquery className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Flask"><Button className="language lang-type-1"><SiFlask className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Django"><Button className="language lang-type-1"><SiDjango className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Tools and Databases I Use</h2>
          <Space wrap>
            <Tooltip title="Expo"><Button className="language lang-type-1"><SiExpo className="lang-icon" /></Button></Tooltip>
            <Tooltip title="NPM"><Button className="language lang-type-1"><FaNpm className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Yarn"><Button className="language lang-type-1"><SiYarn className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Firebase"><Button className="language lang-type-1"><SiFirebase className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Heroku"><Button className="language lang-type-1"><SiHeroku className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Ant Design"><Button className="language lang-type-1"><SiAntdesign className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Bootstrap"><Button className="language lang-type-1"><SiBootstrap className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MongoDB"><Button className="language lang-type-1"><SiMongodb className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MySQL"><Button className="language lang-type-1"><SiMysql className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MariaDB"><Button className="language lang-type-1"><SiMariadb className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Sqlite"><Button className="language lang-type-1"><SiSqlite className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>IDEs/Editors I Use</h2>
          <Space wrap>
            <Tooltip title="Visual Studio Code"><Button className="language lang-type-1"><SiVisualstudiocode className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Visual Studio"><Button className="language lang-type-1"><SiVisualstudio className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Vim"><Button className="language lang-type-1"><SiVim className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Android Studio"><Button className="language lang-type-1"><SiAndroid className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Clion"><Button className="language lang-type-1"><SiClion className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Codepen"><Button className="language lang-type-1"><SiCodepen className="lang-icon" /></Button></Tooltip>
            <Tooltip title="IntelliJ"><Button className="language lang-type-1"><SiIntellijidea className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Operating Systems I Use</h2>
          <Space wrap>
            <Tooltip title="Windows"><Button className="language lang-type-1"><FaWindows className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Linux"><Button className="language lang-type-1"><SiLinux className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Ubuntu"><Button className="language lang-type-1"><SiUbuntu className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Debian"><Button className="language lang-type-1"><SiDebian className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Kali"><Button className="language lang-type-1"><SiKalilinux className="lang-icon" /></Button></Tooltip>
            <Tooltip title="MacOS"><Button className="language lang-type-1"><SiMacos className="lang-icon" /></Button></Tooltip>
            <Tooltip title="iOS"><Button className="language lang-type-1"><SiIos className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Android"><Button className="language lang-type-1"><SiAndroid className="lang-icon" /></Button></Tooltip>
          </Space>
          <h2>Other things I Use</h2>
          <Space wrap>
            <Tooltip title="Apache"><Button className="language lang-type-1"><SiApache className="lang-icon" /></Button></Tooltip>
            <Tooltip title="NGINX"><Button className="language lang-type-1"><SiNginx className="lang-icon" /></Button></Tooltip>
            <Tooltip title="GitHub"><Button className="language lang-type-1"><SiGithub className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Ansible"><Button className="language lang-type-1"><SiAnsible className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Docker"><Button className="language lang-type-1"><SiDocker className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Postman"><Button className="language lang-type-1"><SiPostman className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Raspberry Pi"><Button className="language lang-type-1"><SiRaspberrypi className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Tor"><Button className="language lang-type-1"><SiTorbrowser className="lang-icon" /></Button></Tooltip>
            <Tooltip title="Microsoft Office"><Button className="language lang-type-1"><SiMicrosoftoffice className="lang-icon" /></Button></Tooltip>
          </Space>
        </div>
        <br /><br />
    </div>
  )
}

export default Overview