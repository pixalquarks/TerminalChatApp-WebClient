import React , {useState, useContext} from 'react';
import { BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi';
import { GRPCContext } from '../../context/GRPCContext';
import { Client } from '../../proto/chat_pb';
import { GRPCContextType } from '../../react-app-env';
import './UserList.css';


const dummyUsers = ["John", "Jane", "Jack"];

const UserList = () => {
    const [open, setOpen] = useState(false);
    const onSideBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("clicked");
        setOpen((prev) => !prev);
    }

    const { members } = useContext(GRPCContext) as GRPCContextType;

    return (
        <>
            <div>
        <aside className={`${open? "swipe-from-left": ""}`}>
            <div className="header">Users</div>
            <ul className="list">
                {members.map((user: Client, index: number) => (
                    <li className="user-item" key={index}>{user.getName()}</li>
                ))}
            </ul>
        </aside>
            <div className='handle' onClick={e => onSideBarClick(e)}> {open ? <BiChevronLeftCircle size={32} className={`slide-window-icon ${open ? "slide-to-right" : ""}`}/> : <BiChevronRightCircle size={32} className={`slide-window-icon ${open ? "slide-to-right" : ""}`}/> } </div>
            </div>
        </>
    )
}

export default UserList;