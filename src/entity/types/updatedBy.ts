import { Roles } from './roles'

type Attributes = {
  fisrtName: string
  lastName: string
  email: string
  username: string
  resetPasswordToken: string
  registrationToken: string
  isActive: boolean
  roles: {
    data: Roles[]
  }
  blocked: boolean
  preferedLanguage: string
  createdAt: string
  updatedAt: string
  createdBy: ChangingData
  updatedBy: ChangingData
}

export type ChangingData = {
  data: {
    id: 0
    attributes?: Attributes
  }
}
