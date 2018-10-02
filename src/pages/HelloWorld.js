import { Card } from 'antd';
import MyInput from './MyInput';

export default () => {
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
      };
//非受控组件
    const onTextChange = (event) => {
        console.log(event.target.value);
    }

    // const MyInput = ({ onChange }) => {
    //   return(<input onChange = { onTextChange } />);
    // }

    const onTextReset = (event) => {
        console.log("清空");
        event.target.value = '';
        // 操作无效
        // 修改MyInput中的内容不太容易，这种不能直接控制状态的组件，称之为“非受控组件”
    }
//----------------------------分割线--------------------------------------

    return(
        <div>
            <Card style={style} actions={[<a>确认</a>, <a>取消</a>]}>
                <Card.Meta
                    avatar={<img
                        alt=""
                        style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                    ></img>}
                    title="Alipay"
                    description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
                />
            </Card>
            <MyInput />
        </div>
        

    );
}