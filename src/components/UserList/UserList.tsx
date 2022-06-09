import React , {useState, useContext} from 'react';
import { BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi';
import { GRPCContext } from '../../context/GRPCContext';
import { Client } from '../../proto/chat_pb';
import { GRPCContextType } from '../../react-app-env';
import './UserList.css';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';


const dummyUsers = ["John", "Jane", "Jack", "John", "Jane", "Jack", "John", "Jane", "Jack", "John", "Jane", "Jack"];

interface AvatarProps {
    name: string
}

const Avatar:React.FC<AvatarProps> = (props: AvatarProps) => {
    const generateAvatar = (name: string) => {
        console.log(name);
        const avatar = createAvatar(style, {
            seed: name,
            dataUri: true,
        });
        return <img src={avatar} alt="avatar" className='avatar' loading='lazy'/>;
    }

    return (
        <>
        {generateAvatar(props.name)}
        </>
    )
}

const UserList = () => {
    const [open, setOpen] = useState(false);
    const onSideBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("clicked");
        setOpen((prev) => !prev);
    }

    const generateAvatar = (name: string) => {
        console.log(name);
        const avatar = createAvatar(style, {
            seed: name,
            dataUri: true,
        });
        return avatar;
    }

    const { members } = useContext(GRPCContext) as GRPCContextType;

    return (
        <>
            <div>
        <aside className={`${open? "swipe-from-left": ""}`}>
            <div className="header">Chat Members</div>
            <ul className="list">
                {/* {members.map((user: Client, index: number) => (
                    <li className="user-item" key={index}>{user.getName()}</li>
                ))} */}
                {dummyUsers.map((user: string, index: number) => (
                    <li className="user-item" key={index}><Avatar name={user} /> {user}</li>
                ))}
            </ul>
        </aside>
            <div className='handle' onClick={e => onSideBarClick(e)}> {open ? <BiChevronLeftCircle size={32} className={`slide-window-icon ${open ? "slide-to-right" : ""}`}/> : <BiChevronRightCircle size={32} className={`slide-window-icon ${open ? "slide-to-right" : ""}`}/> } </div>
            </div>
        </>
    )
}

export default UserList;