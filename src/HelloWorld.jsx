import PropTypes from 'prop-types'
import Button from './components/Button'
import useCounter from './hooks/useCounter'

export default function HelloWorld({ name = "World" }) {
  const { count, increment } = useCounter()

  return (
    <div>
      <h1>Hello {name} x{count}!</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}

HelloWorld.propTypes = {
  name: PropTypes.string,
}
