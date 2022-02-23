import { Divider, Row, Col } from 'antd'
import Project from '../Project'
import projects from '../../static/projects.json'

const Projects = () => {

    return (
        <div className="projects">
            <h2 id="projects">Projects</h2>
            <Row wrap> 
            {projects.map((project, index) => {
                return (
                    <>
                        <Col xs={1} sm={1} md={0}></Col>
                        <Col xs={24} sm={24} md={12} className="project-image">
                            <Project key={index} project={project} />
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