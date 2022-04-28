export const QUERY = gql`
  query Login {
    login: login {
      code
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ login }) => {
  localStorage.setItem('pocket_code', login.code)

  window.location.href = `https://getpocket.com/auth/authorize?request_token=${login.code}&redirect_uri=http://localhost:8910/loading`
}
