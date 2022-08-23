import './button.styles.scss';


/*
  default 
  inverted
  google sign in
*/

interface Props {
  children: string;
  buttonType: string;
  onClick?: () => Promise<void>;
  otherProps?: any;
}

const BUTTON_TYPE_CLASSES: any = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({children, buttonType, ...otherProps }: Props ) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>

  )
}

export default Button;