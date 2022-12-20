export const createUid = () => {  
    const uid = Math.random().toString(36);
    return uid;
  };