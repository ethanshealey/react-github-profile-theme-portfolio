import { Typography } from 'antd'
import { FaGraduationCap } from 'react-icons/fa'

const { Paragraph, Text } = Typography

const Certificate = (props) => {
    const handleProjectCLick = () => {
        console.log(`Clicked on ${props.cert.name}`)
    }

    return (
        <div className="project" onClick={() => handleProjectCLick()} href={props.cert.url}>
            <FaGraduationCap className="header-menu-icon" /> {props.cert.name}
            <Paragraph ellipsis className="cert-description">
                {props.cert.provider}
            </Paragraph>
        </div>

    )

}

export default Certificate