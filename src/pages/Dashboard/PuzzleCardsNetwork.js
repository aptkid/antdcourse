import React from 'react';
import { Card } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecardsnetwork';

const mapStateTopProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList
    };
}

const mapDispatchTopProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`,
            });
        },
    }
}

@connect(mapStateTopProps, mapDispatchTopProps)
export default class PuzzleCardsNetwork extends React.Component {

     componentDidMount() {
         this.props.onDidMount();
     }

     render() {
         return (
             <div>
                 {
                     this.props.cardList.map(card => {
                         return (
                             <div>
                               <Card key={card.id}>
                                 <div>Q: {card.setup} </div>
                                 <div>
                                   <strong>A: {card.punchline}</strong>
                                 </div>
                              </Card>
                              <br/>
                             </div>
                         );
                     })
                 }
                 <br/>
             </div>
         );
     }

}