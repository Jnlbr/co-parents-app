import AuthButton from './auth-button';

const EmailButton = AuthButton({
  title:"Log in with email",
  color:"#EE3737",
  iconProps: {
    type:"MaterialIcons",
    name:"email",
  }
})

export default EmailButton;