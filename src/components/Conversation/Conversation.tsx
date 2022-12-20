
import React, {useState, useContext} from 'react'
import {ConversationListType} from '../types'
import { AppContext } from '../../App';
import './Conversation.css';

import { formatDateTime, createUid, sortBy } from '../../utils';



type ConversationProps = {
    conversation: ConversationListType;
};


  
export default function Conversation({conversation}: ConversationProps): JSX.Element {
    const [lastMessage, setLastMessage] = useState('')
    const {setConversations, conversations } = useContext(AppContext);
 
    const onChange = (e) => {
        e.preventDefault();
        setLastMessage(e.target.value);
    }

    const messages = conversation.messages;
    const conversationId = conversation.id
    const updateMessage = ( message) => {
        const input = document.getElementById('message') as HTMLInputElement;
        input.value = '';
        conversation = {...conversation, messages: [...messages, {id: createUid(),text: message, last_updated: new Date() as unknown as string }] }
        conversations.find(item => item.id === conversationId).messages =[...messages, {id: createUid() ,text: message, last_updated: new Date()}]
        setConversations([...conversations])
    }
    

return (
  
  <div role="application" className="conversation">
      <h2 className="conversationTitle">Chat: {conversation.name}</h2>
      <div className="conversationMessagesContainer">
      {conversation.messages?.sort(sortBy).map(item =>
            <div role="row" key={item.id} className="conversationMessage">
                <span className="conversationMessageDT">{formatDateTime(item.last_updated)}</span>
                <p className="conversationMessageBody">{item.text} </p>
            </div>
      )}
      </div>
      <footer>
        
        {/** for progressive enhancement to work without JS, would have a post URL to submit to
         * for now, just prevent default
         */}
        <form onSubmit={(e) => e.preventDefault()}>
            <input
            inputMode='text'
            name='message'
            id='message'
            placeholder={'type your message here'}   
            className="conversationInput"
            onChange={onChange}>
            </input>
            <button onClick={() => {updateMessage(lastMessage)}} type="submit" className='conversationCta'>
                send message
            </button>
        </form>
      </footer>
  </div>
)
}