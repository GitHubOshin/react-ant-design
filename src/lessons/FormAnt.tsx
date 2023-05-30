import 'antd/dist/reset.css'
import { Form, Input, Button } from 'antd'

function FormAnt() {
  const onFinish = (e) => {
    console.log(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item label="Username" name="username">
            <Input placeholder="Username" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Username" required></Input.Password>
          </Form.Item>
          <Form.Item label="Username" name="username">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default FormAnt
