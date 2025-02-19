import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      type='link'
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
    >
      Назад
    </Button>
  )
}
