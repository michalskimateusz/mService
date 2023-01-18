import { TbLoader } from 'react-icons/tb'
import { LoaderIcon } from './Loader.styled'
import { FC } from 'react'
const Loader: FC = () => {
  return (
    <LoaderIcon>
      <TbLoader />
    </LoaderIcon>
  )
}

export default Loader
