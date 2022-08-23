import { Fragment } from "react";
import './form-input.styles.scss';

interface Props {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange(data:object): void;
}

const FormInput = ({label, ...otherProps } :Props) => {
  return (
    <div className="group">
      { label && (
        <label className={`${otherProps.value.length? 'shrink': ''} form-input-label`}>
          {label}
        </label>
      )}  
      <input className="form-input" required {...otherProps} />
      
    </div>

  )
}

export default FormInput;