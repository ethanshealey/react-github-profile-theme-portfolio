import { Row, Col } from 'antd'
import certificates from '../../static/certificates.json'
import Certificate from '../Certificate'

const Certificates = (props) => {
  return (
    <div className="projects">
            <h2 id="certificates">Certificates</h2>
            <Row wrap> 
            {certificates.map((cert, index) => {
                return (
                    <>
                        <Col xs={1} sm={1} md={0}></Col>
                        <Col xs={24} sm={24} md={12} className="project-image">
                            <Certificate key={index} cert={cert} />
                        </Col>
                    </>
                )
            })}
            </Row>
        </div>
  )
}

export default Certificates