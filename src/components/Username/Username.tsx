import React, {useState} from 'react';
import './Username.css';

type UsernameProp = {
  onUsernameSubmit: (address: string) => void,
}

const Username: React.FC<UsernameProp> = ({onUsernameSubmit}) => {

  const [input, setInput] = useState('');

  const onAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUsernameSubmit(input);
  }

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className='form-container-Username'>
        <form onSubmit={onAddSubmit}>
            <div className='form-group-Username'>
                <label htmlFor='IP' className="label">Username</label>
                <input type="text" name="ip" id="IP" value={input} onChange={(e) => {onAddressChange(e)}}/>
            </div>
            <button type='submit' className='btn-Username'>Submit</button>
        </form>
    </div>
  )
}

export default Username 
