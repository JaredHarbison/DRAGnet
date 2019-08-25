export const addQuote = (quote) => {
    return (dispatch) => {
        return fetch(`/quotes`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        }).then(res => res.json()).then(data => {
          dispatch({type:ADD_QUEEN_QUOTE, payload: data})
        })
    };
};

export const deleteQuote = (quote) => {
    return (dispatch) => {
        return fetch(`/quotes/${quote.id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        }).then(res => res.text()).then(data => {
          dispatch({type:DELETE_QUEEN_QUOTE, payload: data})
      })
    };
};