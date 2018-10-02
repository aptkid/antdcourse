export default {
    namespace: 'puzzlecards',
    state: {
        data: [
            {
                id: 1,
                setup: '你是猪吗？',
                punchline: '你是🐷'
            },
            {
                id: 2,
                setup: '如何充值？',
                punchline: '扫描二维码付款'
            },
        ],
        counter: 100,
    },

    reducers: {
        addNewCard(state, { payload: newCard }) {
            const newCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: newCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: newCounter
            };
        }
    }



};