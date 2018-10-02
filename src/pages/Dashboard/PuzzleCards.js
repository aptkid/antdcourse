import React from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateTopProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  }
}

const mapDispatchTopProps = (dispatch) => {
  return{
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    }
  }
}

@connect(mapStateTopProps, mapDispatchTopProps)
export default class PuzzleCardsPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.counter = 100;
  //   this.state = {
  //     cardList: [
  //       {
  //         id: 1,
  //         setup: 'Did you hear about the two silk worms in a race?',
  //         punchline: 'It gets toad ayay'
  //       },
  //       {
  //         id: 2,
  //         setup: 'What happens to a frog\'s car when it break down?',
  //         punchline: 'It gets toad ayay'
  //       }
  //     ]
  //   }
  // }

  // addNewCard = () => {
  //   this.setState( prevState => {
  //     const prevCardlist = prevState.cardList;
  //     this.counter += 1;
  //     const card = {
  //       id: this.counter,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //     };
      
  //     return {
  //       cardList: prevCardlist.concat(card)
  //     }
  //   }
    
  //   )
  // }


  render() {
    return(
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <div>
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
              <br/>
              </div>
            );
          })
        }
        <div>
          {/* <Button onClick={this.addNewCard }> 添加卡片 </Button> */}
          <Button onClick={ () => this.props.onClickAdd({
            setup: '点击添加的问题？',
            punchline: '是的'
          }) }>添加卡片</Button>
        </div>
      </div>
    );
  }
}