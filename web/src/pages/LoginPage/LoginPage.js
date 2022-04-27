import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'
import LoginCell from 'src/components/LoginCell'

const LoginPage = () => {
  const [login, setLogin] = React.useState(false)

  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <Button onClick={() => setLogin(true)}>Login</Button>

      {login && <LoginCell />}
    </>
  )
}

export default LoginPage
