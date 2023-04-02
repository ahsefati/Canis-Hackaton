import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
  Divider,
  Image,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  DownSquareOutlined,
  RightSquareOutlined
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import ReactApexChart from "react-apexcharts";

import Websources_01 from '../assets/images/Websources_01.png'
import Websources_result_01 from '../assets/images/Websources_result_01.png'
import Websources_result_02 from '../assets/images/Websources_result_02.png'
import Imagesources_result_01 from '../assets/images/Imagesources_result_01.png'
import Imagesources_result_02 from '../assets/images/Imagesources_result_02.png'


function Imagesource() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [{
        name: 'Low Credible Source',
        data: [470, 5]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: ["Fake", "True",],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: 'Low Credible Sources (per 1000)',
          floating: true,
          align: 'center',
          style: {
            color: 'black'
          }
        }
      },
    
    
    })
    
    return (
        <Col span={24} gutter={[24,6]}>
            <Divider orientation="center" style={{marginTop:'24px'}}/>
            <Row>
                <Col span={18}>
                    <Title level={4}>Image Reference Credibility Analysis</Title>
                    <Text>After two hours of reviewing datasets manually, we noticed that there is a big difference on how publishers of Fake and True articles reference images.</Text>
                    <br/>
                    <br/>
                    <Text><strong>The Difference?</strong> Fake news referenced image content more frequently using Twitter, Getty Images, Flickr, and AFP image hosting providers. For example, "t.co" which is a image hosting service for Twitter was used around 4000 times! Another interesting fact about image referencing is the authors of False news have used screenshots as a reference more than 3000 times while True publishers haven't use this low credible way of referencing at all!</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}}><strong>So?</strong> We analyzed the average number of low crediable sources for images per article in both Fake and True news datasets.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}} ><strong>How?</strong> We used regular expressions to extract the usage of keywords mentioned above. Also, we include keywords such as "screenshot", "screen capture", and "screengrab" to extract the ones that are referencing only to a screenshot which is not crediable in no way!</Text>
                </Col>
                <Col span={6}>
                    <Image preview={true} src={Websources_01}/>
                </Col>
            </Row>
            <Row style={{marginTop:'12px'}} justify={'space-between'}>
                <Col span={16}>
                    <Row>
                        <Col span={23}>
                            <Text>Below, you can see the distribution of number of low crediable image sourcing for Fake articles. In average, one in two articles in Fake dataset have referenced a low crediable source for their pictures. The exact average is 47 times per 100 articles which is shown by a red line in the plot. </Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Imagesources_result_01}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'24px'}}>
                        <Col span={23}>
                            <Text>On the other hand, the same code is executed for True news dataset and the number of low credible image sourcing is around zero in all cases. On avergae, only 5 articles per 1000 have referenced a low crediable source for their image content. That is around 100 times less than Fake news which suggests a big difference that can be used to classify articles efficiently.</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Imagesources_result_02}/>
                                </Col>
                            </Row>
                            <br/>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row justify={'center'} style={{margin:'12px'}}>
                        <ReactApexChart options={firstDiagram.options} series={firstDiagram.series} type="bar" height={"250px"} width={"320px"}/>
                        <Text>Summary</Text>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
  }
  
  export default Imagesource;