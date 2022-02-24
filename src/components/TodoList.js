import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';
import { useState } from 'react';

const TodoList = () => {
    const dispatch = useDispatch()
    const [todoName, setTodoName]= useState('')
    const [priority , setPriority] = useState("Medium")
    const handleAddButton = () =>{
      dispatch(addTodo({
        id:uuidv4(),
        name:todoName,
        completed:false,
        prioriry:priority
      }))
    } 
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
          <Todo name='Learn React' prioriry='High' />
          <Todo name='Learn Redux' prioriry='Medium' />
          <Todo name='Learn JavaScript' prioriry='Low' />
        </Col>
        <Col span={24}>
          <Input.Group style={{ display: 'flex' }} compact>
            <Input value={todoName} onChange={(e)=>setTodoName(e.target.value)}/>
            <Select defaultValue="Medium" value={priority} onChange={(value) =>setPriority(value) }>
              <Select.Option value='High' label='High'>
                <Tag color='red'>High</Tag>
              </Select.Option>
              <Select.Option value='Medium' label='Medium'>
                <Tag color='blue'>Medium</Tag>
              </Select.Option>
              <Select.Option value='Low' label='Low'>
                <Tag color='gray'>Low</Tag>
              </Select.Option>
            </Select>
            <Button type='primary' onClick={handleAddButton}>
              Add
            </Button>
          </Input.Group>
        </Col>
      </Row>
      );
}
 
export default TodoList;