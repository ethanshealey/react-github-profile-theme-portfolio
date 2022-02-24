import { Divider, Row, Col } from 'antd'
import Project from '../Project'
import projects from '../../static/projects.json'

const Projects = (props) => {

    return (
        <div className="projects">
            <h2 id="projects">Projects</h2>
            <Row justify="center" wrap> 
            {projects.map((project, index) => {
                return (
                    <>
                        <Col xs={24} sm={24} md={12} className="project-image">
                            <Project key={index} project={project} setProject={props.setProject} setShowProjectModal={props.setShowProjectModal} />
                        </Col>
                    </>
                )
            })}
            </Row>
        </div>
    )

    /*
  return (
    <div className="projects" id="projects">
        <h1 align="center">
            My Projects
        </h1>
        <Divider className="divider" />
        <div className="projects-content">
            <Row>
                <Col sm={24} md={11}>
                    {projects.map((project, index) => <Project key={index} project={project} />)}
                </Col>
            </Row>
            <br />
        </div>
    </div>
  )*/
}

export default Projects