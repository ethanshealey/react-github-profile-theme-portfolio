import { Modal, Image, Tabs, Button, Tooltip } from 'antd'
import { GoTools } from 'react-icons/go'
import { CgNotes } from 'react-icons/cg'
import { AiFillStar } from 'react-icons/ai'

const { TabPane } = Tabs

const ProjectModal = (props) => {

  const openProject = () => window.open(`${props.project?.url}`, '_blank').focus()

  return (
    <Modal cancelButtonProps={{ type: 'ghost' }} bodyStyle={{ backgroundColor: '#1F1F1F' }} centered footer={
        props.project?.url ?
        [
            props.project?.source && <Button type="ghost" onClick={() => window.open(`${props.project?.source}`, '_blank').focus()}>View Source</Button>,
            props.project?.api && <Button type="ghost" onClick={() => window.open(`${props.project?.api}`, '_blank').focus()}>Visit API</Button>,
            props.project?.url && <Button type='primary' onClick={() => openProject()}>Visit</Button> 
        ] : false
    } title={props.project?.name} visible={props.showProjectModal} onCancel={() => props.setShowProjectModal(false)}>
        <Image src={props.project?.image} />
        <Tabs defaultActiveKey='1'>
            <TabPane
                tab={<Tooltip title="Description"><CgNotes style={{ fontSize: '20' }} /></Tooltip>}
                key='1'
            >
                <div className="project-modal-data">{props.project?.description}</div>
            </TabPane>
            <TabPane
                tab={<Tooltip title="Tools"><GoTools style={{ fontSize: '20' }} /></Tooltip>}
                key='2'
            >
                <ul className="project-modal-data">
                    {props.project?.tools.map((tool, index) => <li key={index}>{tool}</li>)}
                </ul>
            </TabPane>
            <TabPane
                tab={<Tooltip title="Features"><AiFillStar style={{ fontSize: '20' }} /></Tooltip>}
                key='3'
            >
                <ul className="project-modal-data">
                    {props.project?.features.map((feat, index) => <li key={index}>{feat}</li>)}
                </ul>
            </TabPane>
        </Tabs>
    </Modal>
  )
}

export default ProjectModal