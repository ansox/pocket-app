import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'

const LoginPage = () => {
  const loginOnPocket = async () => {
    const { code } = await fetch('https://pocket-api.anso.workers.dev/login')
      .then(response => response.json())

    localStorage.setItem('pocket_code', code);

    window.location.href = `https://getpocket.com/auth/authorize?request_token=${code}&redirect_uri=http://localhost:8910/loading`;
  }

  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <Button onClick={loginOnPocket}>Login</Button>
    </>
  )
}

export default LoginPage
