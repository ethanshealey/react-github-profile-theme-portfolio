import { Typography } from 'antd'
import { BiBookBookmark } from 'react-icons/bi'
import Colors from "../../static/colors.json"

const { Paragraph, Text } = Typography

const Project = (props) => {

    const handleProjectCLick = () => {
        props.setProject(props.project)
        props.setShowProjectModal(true)
    }

    return (

        <div className="project" onClick={() => handleProjectCLick()}>
            <BiBookBookmark className="header-menu-icon" /> {props.project.name}
            <Paragraph ellipsis className="project-description">
                {props.project.description}
            </Paragraph>
            <div className="project-lang"><span style={{ height: '10px', width: '10px', backgroundColor: Colors[props.project.main_language].color, borderRadius: '50%', display: 'inline-block' }} /> {props.project.main_language}</div>
        </div>

    )

    /* OLD VERSION
  return (
    <div className="project">
        <Row wrap>
            <Col sm={24} md={11} className="project-image">
                <Image src={props.project.image} alt={props.project.name} width={"95%"} />
            </Col>
            <Col sm={24} md={12}>
                { props.project.url ? <a href={props.project.url} target="_blank" className="project-url"><h2>{props.project.name}</h2></a> : <h2>{props.project.name}</h2> }
                <h4>Tools:</h4>
                <ul>
                    {props.project.tools.map((tool, index) => <li key={index}>{tool}</li>)}
                </ul>
                <h4>Features:</h4>
                <ul>
                    {props.project.features.map((feat, index) => <li key={index}>{feat}</li>)}
                </ul>
            </Col>
        </Row>
        { props.showDivider &&  <Divider className="project-divider" /> }
    </div>
  )*/
}

export default Project