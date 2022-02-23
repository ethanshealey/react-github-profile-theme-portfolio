import React from 'react'
import { Button, Icon } from 'antd'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Info = () => {

  return (
    <>
        <img className="avatar" src="https://avatars.githubusercontent.com/u/19337215?v=4" alt="logo" />
        <h1 className="name">Ethan Shealey</h1>
        <p className="username">ethanshealey</p>
        <a href="../../static/EthanShealeyResume.pdf" download><Button className="cv">Download CV</Button></a>
        <div className="email"><MdOutlineMailOutline className="icon" /> <a className="anchor" href="mailto:ethan.shealey@gmail.com" target="_blank">ethan.shealey@gmail.com</a></div>
        <div className="link"><AiFillGithub className="icon" /> <a className="anchor" href="https://www.github.com/ethanshealey" target="_blank">github.com/ethanshealey</a></div>
        <div className="link"><AiFillLinkedin className="icon" /> <a className="anchor" href="https://www.linkedin.com/in/ethan-shealey" target="_blank">linkedin.com/in/ethan-shealey</a></div>
   </>
  )
}

export default Info