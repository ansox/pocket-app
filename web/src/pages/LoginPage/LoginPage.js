import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'
import LoginCell from 'src/components/LoginCell'

const LoginPage = () => {
  const [login, setLogin] = React.useState(false)

  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <div className="m-0 bg-pink-700 h-screen flex items-center justify-center">
        <Button
          className="bg-indigo-600 rounded-lg px-10 h-12 text-white hover:bg-indigo-500"
          onClick={() => setLogin(true)}
        >
          Login
        </Button>
      </div>

      {login && <LoginCell />}
    </>
  )
}

export default LoginPage
