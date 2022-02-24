import { useEffect } from 'react'
import { Button, Grid } from 'antd'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const { useBreakpoint } = Grid

const Info = () => {

  const screens = useBreakpoint()

  return (
    <div style={{ marginTop: screens['md'] ? 0 : '50px' }}>
        <img className="avatar" src='../images/pp.jpg' alt="logo"/>
        <h1 className="name">Ethan Shealey</h1>
        <p className="username">ethanshealey</p>
        <a href="../assets/EthanShealeyResume.pdf" download><Button className="cv">Download CV</Button></a>
        <div className="email"><MdOutlineMailOutline className="icon" /> <a className="anchor" href="mailto:ethan.shealey@gmail.com" target="_blank">ethan.shealey@gmail.com</a></div>
        <div className="link"><AiFillGithub className="icon" /> <a className="anchor" href="https://www.github.com/ethanshealey" target="_blank">github.com/ethanshealey</a></div>
        <div className="link"><AiFillLinkedin className="icon" /> <a className="anchor" href="https://www.linkedin.com/in/ethan-shealey" target="_blank">linkedin.com/in/ethan-shealey</a></div>
   </div>
  )
}

export default Info