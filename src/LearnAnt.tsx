import './App.css'
import 'antd/dist/reset.css'
import { Button, Input, Select } from 'antd'
import { useState } from 'react'
import { PoweroffOutlined, UserOutlined } from '@ant-design/icons'

function LearnAnt() {
  const [isLoding, setIsLoading] = useState(false)
  const fruits = ['Banana', 'Mango', 'Orange', 'Cherry']

  function handleOnClick() {
    console.log('Clicked')
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button
          type="primary"
          block
          loading={isLoding}
          icon={<PoweroffOutlined />}
          onClick={handleOnClick}
        >
          My Ant btn
        </Button>
        <br />
        <br />
        <Input.Search
          placeholder="Name"
          maxLength={10}
          prefix={<UserOutlined />}
          allowClear
        ></Input.Search>
      </header>
      <br />
      <p>Which one is your favorite fruit?</p>
      <Select
        mode="multiple"
        maxTagCount={2}
        placeholder="Select fruit"
        style={{ width: '100%' }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          )
        })}
      </Select>
    </div>
  )
}

export default LearnAnt
