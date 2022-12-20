import React, {createContext, useState} from 'react';

import './App.css';
import ConversationList from './components/ConversationList/ConversationList';
import Conversation from './components/Conversation/Conversation';
import testData from './testData.json'


type AppContextType = {
  selectedConversation: Record<string, unknown>;
  setSelectedConversation: (selectedConversation) => void;
  conversations: Record<string, unknown>[];
  setConversations: (conversations) => void;
};

const AppContext = createContext<AppContextType>({
  selectedConversation: {},
  setSelectedConversation: (selectedConversation) => ({}),
  conversations: [],
  setConversations: (conversations) => ([])
});
export { AppContext };

function App() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState(testData);
  return (
    <AppContext.Provider value={{
      selectedConversation,
      setSelectedConversation,
      conversations,
      setConversations
    }}>
    <div>
      <main id="main-content" className='container'>
        <section>
          <h1>Chat App</h1>
          <div  className='layout'>
            <div className="conversationListContainer">
              <ConversationList conversations={conversations}/>
              </div>
              <div className="conversationContainer">
              {selectedConversation && <Conversation conversation={selectedConversation}/>}
            </div>
          </div>
        </section>

      </main>
    </div>
    </AppContext.Provider>
  );
}

export default App;
