import React, {useEffect, useState, useRef, useContext} from 'react';
import { IoMdSend } from 'react-icons/io';
import { GRPCContext } from '../../context/GRPCContext';
import { GRPCContextType } from '../../react-app-env';

import './Chat.css';

type Chat = {
    name: string,
    message: string,
}

const tempUserName = "user";

const slideAnimName = 'transition-slide-left';
const transitionDuration = 500; // in ms

const Chat = () => {
    const chatbox = useRef<HTMLDivElement | null>(null);
    const [chat, setChat] = useState('');
    const [slide, setSlide] = useState('');

    const { messages, sendMessage } = useContext(GRPCContext) as GRPCContextType;

    // useEffect(() => {
    //     const getChats = async () => {
    //         const res = await fetch('./chats.json');
    //         const rawChat = await res.json() as Chat[];
    //         setChats(rawChat);
    //     }
    //     if (chatbox.current != null) {
    //         scroolToBottom(chatbox);
    //     }
    //     getChats();
    // }, [])

    useEffect(() => {
        scroolToBottom(chatbox);
    }, [messages])

    const onChatEnter = async (e: React.FormEvent<HTMLFormElement>) => {
        setSlide(slideAnimName);
        setTimeout(() => {
            setSlide('');
        }, transitionDuration)
        e.preventDefault();
        if (chat == "") return;
        await sendMessage(chat);
        setChat('');
    }

    return (
        <>
        <main>
            <div className='chats' ref={chatbox}>
                <ul>
                    {messages.map((chat, index) => (
                        <li className="chat-item" key={index}><span className='chat-item-name'>{chat.name}</span><span className='chat-item-msg'>{chat.body}</span></li>
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
