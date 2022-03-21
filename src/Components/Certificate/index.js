import { Typography } from 'antd'
import { FaGraduationCap } from 'react-icons/fa'

const { Paragraph, Text } = Typography

const Certificate = (props) => {

    const handleCertificateClick = () => {
        props.setCertificate(props.cert)
        props.setShowCertificateModal(true)
    }

    return (
        <div className="project" onClick={() => handleCertificateClick()} href={props.cert.url}>
            <Paragraph ellipsis className="cert-name">
                <FaGraduationCap className="header-menu-icon" /> {props.cert.name}
            </Paragraph>
            <Paragraph ellipsis className="cert-description">
                {props.cert.provider}
            </Paragraph>
        </div>

    )

}

export default Certificate