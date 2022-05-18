import React , {useState, useRef} from 'react';
import './UserList.css';


const dummyUsers = ["John", "Jane", "Jack"];

const UserList = () => {
    const [open, setOpen] = useState(false);
    const onSideBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("clicked");
        setOpen((prev) => !prev);
    }

    return (
        <>
            <div>
        <aside className={`${open? "swipe-from-left": ""}`}>
            <div className="header">Users</div>
            <ul className="list">
                {dummyUsers.map((user, index) => (
                    <li className="user-item" key={index}>{user}</li>
                ))}
            </ul>
        </aside>
            <div className='handle' onClick={e => onSideBarClick(e)}></div>
            </div>
        </>
    )
}

export default UserList;