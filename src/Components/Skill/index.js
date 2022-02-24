import { Tooltip, Button } from 'antd'

const Skill = ({skill, bg, icon, color}) => <Tooltip title={skill}><Button className="language lang-icon" style={{ color: color, backgroundColor: bg }}>{icon}</Button></Tooltip>

export default Skill