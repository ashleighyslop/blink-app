
import React, {useContext} from 'react'

import { AppContext } from '../../App';
import './ConversationList.css';
import { sortBy, formatDateTime } from '../../utils';
import {ConversationListType} from '../types'



type ConversationListProps = {
    conversations: ConversationListType[];
};


export default function ConversationList({conversations}: ConversationListProps): JSX.Element {
  const { setSelectedConversation } = useContext(AppContext);

return (
  <div>
   <ul className="conversationList">    
    {conversations.sort(sortBy).map((item) => {
        return(
         <li key={item.id} className="conversationListItem" >
              {/**to work without JS, would need a link with href, each conversation would be it's own page with a url*/}
              <button className="conversationListCta"  onClick={() => {setSelectedConversation(item)}}>{item.name}, {formatDateTime(item.last_updated)}</button>
         </li>
        )
    })}
    </ul>
  </div>
)
}