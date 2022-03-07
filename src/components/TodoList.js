import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from './Todo';
import {todoRemainingSelector} from '../redux/selectors'
import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {addTodo} from '../redux/action'
import {v4 as uuidv4} from 'uuid'

const TodoList = () => {
    const [todoName, setTodoName]= useState('')
    const [priority , setPriority] = useState("Medium")
    const todoList = useSelector(todoRemainingSelector)

    const dispath = useDispatch()
    const handleAddButton = ()=>{
      dispath(addTodo({
        id: uuidv4(),
        name:todoName,
        completed:false,
        priority:priority
      }))
      setTodoName('');
      setPriority("Medium")
    }
 
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map( (todo) =>(
          <Todo key={todo.id} 
                name={todo.name} 
                id={todo.id}
                completed={todo.completed} 
                priority={todo.priority}
          />
        ))}
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