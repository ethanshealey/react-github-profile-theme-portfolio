import { Modal, Image, Tabs, Button, Tooltip, Typography } from 'antd'

const { Paragraph, Text } = Typography

const CertificateModal = (props) => {
  return (
    <Modal cancelButtonProps={{ type: 'ghost' }} bodyStyle={{ backgroundColor: '#1F1F1F' }} centered footer={
      [
          <Button type='primary' onClick={() => window.open(`${props.certificate?.url}`, '_blank').focus()}>Visit</Button> 
      ] 
  } title={<Paragraph ellipsis className="cert-name" style={{maxWidth: '450px'}}>{props.certificate?.name}</Paragraph>} visible={props.showCertificateModal} onCancel={() => props.setShowCertificateModal(false)}>
      <Image src={props.certificate?.image} />
  </Modal>
  )
}

export default CertificateModal