import React from 'react'
import { Divider, Button, Space, Tooltip } from 'antd'
import { SiYarn, SiAnsible, SiGithub, SiApache, SiIos, SiMacos, SiKalilinux, SiDebian, SiUbuntu, SiLinux, SiIntellijidea, SiCodepen, SiClion, SiAndroid, SiVim, SiVisualstudio, SiVisualstudiocode, SiSqlite, SiMariadb, SiMysql, SiMongodb, SiBootstrap, SiAntdesign, SiHeroku, SiFirebase, SiExpo, SiDjango, SiFlask, SiJquery, SiElectron, SiCplusplus, SiC, SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiReactrouter, SiExpress, SiDocker, SiPostman, SiNginx, SiRaspberrypi, SiTorbrowser, SiMicrosoftoffice, SiJava, SiNpm, SiWindows } from 'react-icons/si'
import { FaJava, FaNpm, FaWindows } from 'react-icons/fa'
import Matlab from '../Matlab'
import Skill from '../Skill'

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
          <p className="about-me-item">👨‍💻 Currently at: <a href="https://fidelity.com" target="_blank">Fidelity Investments</a></p>
          <h2>Languages I Know</h2>
          <Space wrap>
            <Skill icon={<SiC />} skill="C" bg="#00599c" color="white" />
            <Skill icon={<SiCplusplus />} skill="C++" bg="#00599c" color="white" />
            <Skill icon={<SiJavascript />} skill="JavaScript" bg="#323330" color="white" />
            <Skill icon={<SiTypescript />} skill="TypeScript" bg="#007acc" color="white" />
            <Skill icon={<SiPython />} skill="Python" bg="#3670a0" color="white" />
            <Skill icon={<Matlab />} skill="Matlab" bg="#0e7fb5" color="white" />
            <Skill icon={<SiJava />} skill="Java" bg="#ed8b00" color="white" />
            <Skill icon={<SiHtml5 />} skill="HTML5" bg="#e34f26" color="white" />
            <Skill icon={<SiCss3 />} skill="CSS3" bg="#1572b6" color="white" />
          </Space>
          <h2>Frameworks I Use</h2>
          <Space wrap>
            <Skill icon={<SiReact />} skill="React/React Native" bg="#20232a" color="white" />
            <Skill icon={<SiNodedotjs />} skill="NodeJS" bg="#6da55f" color="white" />
            <Skill icon={<SiReactrouter />} skill="React Router" bg="#ca4245" color="white" />
            <Skill icon={<SiExpress />} skill="ExpressJS" bg="#404d59" color="white" />
            <Skill icon={<SiElectron />} skill="ElectronJS" bg="#191970" color="white" />
            <Skill icon={<SiJquery />} skill="jQuery" bg="#0769ad" color="white" />
            <Skill icon={<SiFlask />} skill="Flask" bg="#20232a" color="white" />
            <Skill icon={<SiDjango />} skill="Django" bg="#092e20" color="white" />
          </Space>
          <h2>Tools and Databases I Use</h2>
          <Space wrap>
            <Skill icon={<SiExpo />} skill="Expo Go" bg="#1c1e24" color="white" />
            <Skill icon={<SiNpm />} skill="NPM" bg="#cb0000" color="white" />
            <Skill icon={<SiYarn />} skill="Yarn" bg="#2c8ebb" color="white" />
            <Skill icon={<SiFirebase />} skill="Firebase" bg="#039be5" color="white" />
            <Skill icon={<SiHeroku />} skill="Heroku" bg="#430098" color="white" />
            <Skill icon={<SiAntdesign />} skill="Ant Design" bg="#0170fe" color="white" />
            <Skill icon={<SiBootstrap />} skill="Bootstrap" bg="#563d7c" color="white" />
            <Skill icon={<SiMongodb />} skill="MongoDB" bg="#4ea94b" color="white" />
            <Skill icon={<SiMysql />} skill="MySQL" bg="#0000ff" color="white" />
            <Skill icon={<SiMariadb />} skill="MariaDB" bg="#003545" color="white" />
            <Skill icon={<SiSqlite />} skill="SQLite" bg="#07405e" color="white" />
          </Space>
          <h2>IDEs/Editors I Use</h2>
          <Space wrap>
            <Skill icon={<SiVisualstudiocode />} skill="Visual Studio Code" bg="#0078d7" color="white" />
            <Skill icon={<SiVisualstudio />} skill="Visual Studio" bg="#5c2d91" color="white" />
            <Skill icon={<SiVim />} skill="Vim" bg="#11ab00" color="white" />
            <Skill icon={<SiAndroid />} skill="Android Studio" bg="#3ddc84" color="white" />
            <Skill icon={<SiClion />} skill="CLion" bg="#000" color="white" />
            <Skill icon={<SiCodepen />} skill="CodePen" bg="#fff" color="#000" />
            <Skill icon={<SiIntellijidea />} skill="IntelliJ" bg="#000" color="white" />
          </Space>
          <h2>Operating Systems I Use</h2>
          <Space wrap>
            <Skill icon={<SiWindows />} skill="Windows" bg="#0078d7" color="white" />
            <Skill icon={<SiLinux />} skill="Linux" bg="#fcc624" color="white" />
            <Skill icon={<SiUbuntu />} skill="Ubuntu" bg="#e95420" color="white" />
            <Skill icon={<SiDebian />} skill="Debian" bg="#d70a53" color="white" />
            <Skill icon={<SiKalilinux />} skill="Kali" bg="#268bee" color="white" />
            <Skill icon={<SiMacos />} skill="MacOS" bg="#000" color="white" />
            <Skill icon={<SiIos />} skill="iOS" bg="#000" color="white" />
            <Skill icon={<SiAndroid />} skill="Android" bg="#3ddc84" color="white" />
          </Space>
          <h2>Other things I Use</h2>
          <Space wrap>
            <Skill icon={<SiApache />} skill="Apache" bg="#d42029" color="white" />
            <Skill icon={<SiNginx />} skill="NGINX" bg="#009639" color="white" />
            <Skill icon={<SiGithub />} skill="GitHub" bg="#121011" color="white" />
            <Skill icon={<SiAnsible />} skill="Ansible" bg="#1a1918" color="white" />
            <Skill icon={<SiDocker />} skill="Docker" bg="#0db7ed" color="white" />
            <Skill icon={<SiPostman />} skill="Postman" bg="#ff6c37" color="white" />
            <Skill icon={<SiRaspberrypi />} skill="Raspbery Pi" bg="#c51a4a" color="white" />
            <Skill icon={<SiMicrosoftoffice />} skill="Microsoft Office" bg="#d83b01" color="white" />
          </Space>
        </div>
        <br /><br />
    </div>
  )
}

export default Overview