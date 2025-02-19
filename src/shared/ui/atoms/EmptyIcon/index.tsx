import { Empty } from 'antd'
import { PropsWithChildren } from 'react'

type EmptyIconProps = {
  icon?: string
}

export const EmptyIcon: React.FC<PropsWithChildren & EmptyIconProps> = ({ children, icon = 'empty.svg' }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Empty
        image={icon}
        description={children}
        styles={{ image: { minHeight: 300 } }}
      />
    </div>
  )
}
