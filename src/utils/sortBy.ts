//this sorts messages to have the oldest first
//i chose to use this method for both functions, as the Conversation component has flex-direction: column-reverse on
//it as a css trick to have the container scrolled to the bottom.

//a function to display the newest first would have x.last_updated - y.last_updated instead

export const sortBy = (x, y) =>{
    return (new Date(y.last_updated) as any) - (new Date(x.last_updated) as any);
  }