export type ConversationType = {
        id: string;
        text: string;
        last_updated: string
};

export type ConversationListType = {
    id: string;
    name: string;
    last_updated: string;
    messages: ConversationType[];
};