import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'


export default function Login() {
    
    const handleLogin = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
    }
    
    return (
        <LoginContainer>
            <LoginForm>
                <h1>Welcome To FireChat!</h1>
                <Button onClick={handleLogin}>
                    Login with Google
                </Button>
            </LoginForm>
        </LoginContainer>
    )
}


const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginForm = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 30px;
  background-color: white;
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);
  text-align: center;

  button {
      background: #2f3135;
      color: white;
      padding:10px 50px;
      margin: 20px 0;
      font-size: 20px;
      
      :hover{
          background: gray;
          color: #2f3135;
      }
  }
`
