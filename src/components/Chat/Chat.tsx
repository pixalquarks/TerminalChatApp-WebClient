import React, {useEffect, useState, useRef, useContext} from 'react';
import { IoMdSend } from 'react-icons/io';
import { GRPCContext } from '../../context/GRPCContext';
import { GRPCContextType } from '../../react-app-env';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';

import './Chat.css';

type Chat = {
    name: string,
    message: string,
}

const tempUserName = "user";

const slideAnimName = 'transition-slide-left';
const transitionDuration = 500; // in ms

interface AvatarProps {
    name: string
}

const Avatar:React.FC<AvatarProps> = (props: AvatarProps) => {
    const generateAvatar = (name: string) => {
        // console.log(name);
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

const Chat = () => {
    const chatbox = useRef<HTMLDivElement | null>(null);
    const [chat, setChat] = useState('');
    const [slide, setSlide] = useState('');

    const { messages, sendMessage } = useContext(GRPCContext) as GRPCContextType;

    useEffect(() => {
        scroolToBottom(chatbox);
    }, [messages])

    const onChatEnter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chat == "") return;
        setSlide(slideAnimName);
        setTimeout(() => {
            setSlide('');
        }, transitionDuration)
        console.log(chat);
        await sendMessage(chat);
        setChat('');
    }

    return (
        <>
        <main>
            <div className='chats' ref={chatbox}>
                <ul>
                    {messages.map((chat, index) => (
                        <li className="chat-item" key={index}>
                            <div><Avatar name={chat.name} /></div>
                            <div className='chat-item-content'>
                            <div className='chat-item-header'>
                                <span className='chat-item-ts'>{chat.timeStamp.toLocaleTimeString('en-IN')}</span>
                                <span className='chat-item-name'>{chat.name}</span></div>
                            <div className='chat-item-footer'><span className='chat-item-msg'>{chat.body}</span></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='form-container'>
            <form onSubmit={(e) => {onChatEnter(e)}}>
                <input type="text" placeholder="Type a message..." value={chat} onChange={(e) => {setChat(e.target.value)}} />
                <button className='send' type="submit"><IoMdSend className={slide}/></button>
            </form>
            </div>
        </main>
        </>
    );
}

export default Chat;

function scroolToBottom(chatbox: React.MutableRefObject<HTMLDivElement | null>) {
    if (chatbox.current === null) {
        return;
    }
    chatbox.current.scrollTop = chatbox.current?.scrollHeight;
}
