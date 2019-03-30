export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      const quoteObj = {...action.quote}
      return [...state, quoteObj]
    case 'REMOVE_QUOTE':
      const newState = state.filter(quote => quote.id !== action.quoteId)
      return newState;
    case 'UPVOTE_QUOTE':
      const upvoteState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: quote.votes + 1}
        } else {
          return quote
        }
      })
      return upvoteState;
    case 'DOWNVOTE_QUOTE':
      const downvoteState = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: quote.votes - 1}
        } else {
          return quote
        }
      })
      return downvoteState
    default:
      return state;
  }
}
