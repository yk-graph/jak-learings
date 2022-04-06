import { AddressType } from './AddressType'
import { CompanyType } from './CompanyType'

export interface UsersType {
  id: number
  name: string
  username: string
  email: string
  address: AddressType
  phone: string
  website: string
  company: CompanyType
}
