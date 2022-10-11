import { Container } from './styles'

import { AiOutlinePlus } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

export function NewTag({ isNew, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew} >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
      >
        { isNew ? <AiOutlinePlus/> : <FaTimes/> }
      </button>
    </Container>
  )
}