/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Input,
  Typography,
  Divider,
} from "antd";
import { useEffect, useState } from "react";

const { TextArea } = Input;
const { Title, Text } = Typography;



function Model() {
  const [result, setResult] = useState({user:[{authorized:"Results will be shown here...!"}]})
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const handleClassification = async () => {
    setLoading(true)
    await fetch("https://easyfood4me.pythonanywhere.com/fakenews", {method:'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({textToVerify:inputValue})}).then(res => res.json().then((finalresult)=>setResult(finalresult)))
  }

  useEffect(()=>{
    setLoading(false)
  },[result])

  const dataSource = [
    {
      key: '1',
      name: 'Positive',
      age: '8385',
      address: '322',
    },
    {
      key: '2',
      name: 'Negative',
      age: '457',
      address: '6554',
    },
  ];
  
  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Positive',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Negative',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <Row gutter={[24, 0]} justify={'center'}>
      <Col span={16} style={{marginTop:'36px'}}>
        <Text style={{fontSize:'18px', color:'black'}}>Use the area below to put an article. Then click the button to see if it's a Fake or True news!</Text>
        <TextArea placeholder="Enter your text or article here..." value={inputValue} onChange={(e)=>setInputValue(e.target.value)} style={{marginTop:'24px'}} rows={8}/>
        <Row justify={'center'} style={{marginTop:'24px'}}>
          <Col span={12}>
            <Button size="large" block loading={loading} type="primary" onClick={handleClassification}>Validate</Button>
          </Col>
        </Row>
        <Divider style={{width:'50vw', borderColor:'#1890ff', height:'5px', borderWidth:'2px'}}/>
        <Card color="lightblue" style={{border:'1px grey solid'}}>
          <Text>{result?.user[0]?.authorized}</Text>
        </Card>
      </Col>
      <Col span={1}>
        <Divider type="vertical" style={{height:'80vh', borderColor:'#1890ff', borderWidth:'2px'}}/>
      </Col>
      <Col span={6} style={{marginTop:'36px'}}>
        <Text style={{fontSize:'24px', color:'black'}}>Tips</Text>
        <br/>
        <br/>
        <Card>
          <Text style={{fontSize:'14px'}}>To make it easier for you to try the model, you can enter following examples and validate them!</Text>
          <br/><br/>
          <Card>
            One of the richest men in the world is Elon Mask. He lives in United States. He is the CEO of SpaceX and Tesla companies.
          </Card>
          <br/>
          <Card>
            One of the richest men in the world is Elon Mask. He lives in United States. He is the CEO of Apple company.
          </Card>
          <br/>
          <Card>
            I'm the best person in the world!!
          </Card>
        </Card>
        <br/>
        <Card>
          <Text style={{fontSize:'14px'}}>The model is generated using <strong>Passive/Aggressive</strong> classifier. It's an online learning algorithm which means that it can update its weights as new data comes in.</Text>
        </Card>
        <br/>
        <Card>
          <Text style={{fontSize:'14px'}}>The accuracy of the trained model on test data is around <strong>95%</strong>.</Text>
          <br/>
          <Text>Also, the Confusion Matrix of the Trained Model is as follows:</Text>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Card>
      </Col>
    </Row>
  );
}

export default Model;
