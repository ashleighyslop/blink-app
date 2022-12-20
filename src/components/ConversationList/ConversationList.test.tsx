import React from 'react';
import { render, screen } from '@testing-library/react';
import ConversationList from './ConversationList';

test('the ConversationList renders the content supplied via the props', async () => {
    const props = {
        conversations:[{  
            "id": "5f58bcd7a88fab5f34df94d6",
            "name": "eiusmod nostrud sunt",
            "last_updated": "2020-05-04T03:37:18",
            messages: []
        }]
    };
    const { container, getByText } = await render(<ConversationList {...props} />);
    expect(container).toBeInTheDocument();
    expect(screen.getByText((text => {return(text.includes('eiusmod nostrud sunt'))})))

  });