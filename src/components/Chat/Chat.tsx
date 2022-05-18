import React, {useEffect, useState, useRef} from 'react';
import { StringLiteralLike } from 'typescript';

import './Chat.css';

type Chat = {
    name: string,
    message: string,
}

const tempUserName = "user";

const Chat = () => {
    const [chats, setChats] = useState([] as Chat[]);
    const chatbox = useRef<HTMLDivElement | null>(null);
    const [chat, setChat] = useState('');
    useEffect(() => {
        const getChats = async () => {
            const res = await fetch('./chats.json');
            const rawChat = await res.json() as Chat[];
            setChats(rawChat);
        }
        if (chatbox.current != null) {
            console.log(chatbox.current.scrollTop, chatbox.current.scrollHeight);
            chatbox.current.scrollTop = chatbox.current?.scrollHeight;
            console.log(chatbox.current.scrollTop === chatbox.current.scrollHeight);
            console.log(chatbox.current.scrollTop, chatbox.current.scrollHeight);
        }
        getChats();
    }, [])

    useEffect(() => {
        if (chatbox.current != null) {
            console.log(chatbox.current.scrollTop, chatbox.current.scrollHeight);
            chatbox.current.scrollTop = chatbox.current?.scrollHeight;
            console.log(chatbox.current.scrollTop === chatbox.current.scrollHeight);
            console.log(chatbox.current.scrollTop, chatbox.current.scrollHeight);
        }
    }, [chats])

    const onChatEnter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chat == "") return;
        setChats((prev) => [...prev, {name: tempUserName, message: chat}]);
        setChat('')
    }

    return (
        <>
        <main>
            <div className='chats' ref={chatbox}>
                <ul>
                    {chats.map((chat, index) => (
                        <li className="chat-item" key={index}><span className='chat-item-name'>{chat.name}</span><span className='chat-item-msg'>{chat.message}</span></li>
                    ))}
                </ul>
            </div>
            <div className='form-container'>
            <form onSubmit={(e) => {onChatEnter(e)}}>
                <input type="text" placeholder="Type a message..." value={chat} onChange={(e) => {setChat(e.target.value)}} />
                <button className='send' type="submit">▶</button>
            </form>
            </div>
        </main>
        </>
    );
}

export default Chat;