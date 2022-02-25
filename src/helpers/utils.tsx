import * as _ from 'lodash'
import {
  LatestCollection,
  PopularCollection,
  TrendingCollection,
  WorkUniform,
  Equipment,
  KidUniform,
  WinterUniform,
  OfficeCollection,
  TshirtCollection,
} from '@assets/data/collection'
import { ItemModelITF } from '@interfaces'
import { isBuffer } from 'lodash'

const VALID_PATH = ['t-shirt', 'winter-uniform', 'office-uniform', 'kid-uniform', 'work-uniform', 'equipment']

export const validPath = (path: string) => {
  if (_.find(VALID_PATH, (item) => item == path)) {
    return true
  }
  return false
}

export const getDataFromPath = (path: string): { title: string; list: Array<ItemModelITF> } => {
  switch (path) {
    case 't-shirt':
      return { title: 'Đồng phục áo phông', list: TshirtCollection }
    case 'winter-uniform':
      return { title: 'Đồng phục mùag đông', list: WinterUniform }
    case 'office-uniform':
      return { title: 'Đồng phục văn phòng', list: OfficeCollection }
    case 'kid-uniform':
      return { title: 'Đồng phục trẻ em', list: KidUniform }
    case 'work-uniform':
      return { title: 'Bảo hộ lao động', list: WorkUniform }
    case 'equipment':
      return { title: 'Thiết bị bảo hộ lao động', list: Equipment }
    default:
      return { title: '', list: [] }
  }
}
export const getPathFromCode = (code: string): string => {
  if (code)
    switch (code[0]) {
      case 'T':
        return `/products/t-shirt/${code}`
      case 'W':
        return `/products/winter-uniform/${code}`
      case 'O':
        return `/products/office-uniform/${code}`
      case 'K':
        return `/products/kid-uniform/${code}`
      case 'P':
        return `/products/work-uniform/${code}`
      case 'E':
        return `/products/equipment/${code}`
      default:
        return '/products'
    }
  else {
    return '/products'
  }
}

export const convertSearchParams = (searchParams: string) => {
  if (searchParams == '') return {}
  const objectSearchParams = {} as any
  const listParams = searchParams.split('&')
  listParams.forEach((item) => {
    const [key, value] = item.split('=')
    objectSearchParams[key] = value
  })
  return objectSearchParams
}
