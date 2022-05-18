import React, {useState} from 'react'
import './Address.css';

type AddressProp = {
  onAddressSubmit: (address: string) => void,
}

const Address: React.FC<AddressProp> = ({onAddressSubmit}) => {

  const [input, setInput] = useState('');

  const onAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddressSubmit(input);
  }

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className='form-container-Address'>
        <form onSubmit={onAddSubmit}>
            <div className='form-group-Address'>
                <label htmlFor='IP' className="label">IP Address</label>
                <input type="text" name="ip" id="IP" value={input} onChange={(e) => {onAddressChange(e)}}/>
            </div>
            <button type='submit' className='btn-Address'>Submit</button>
        </form>
    </div>
  )
}

export default Address
