import { TbLoader } from 'react-icons/tb'
import { LoaderIcon } from './LoaderComponent.styled'
import { FC } from 'react'
const LoaderComponent: FC = () => {
  return (
    <LoaderIcon>
      <TbLoader />
    </LoaderIcon>
  )
}

export default LoaderComponent
