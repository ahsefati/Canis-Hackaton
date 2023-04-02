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

import Imagesources_result_01 from '../assets/images/Imagesources_result_01.png'
import exclamtion_gif from '../assets/images/exclamation.gif'
import Exclamation_result_01 from '../assets/images/Exclamation_result_01.png'
import Exclamation_result_02 from '../assets/images/Exclamation_result_02.png'


function Exclamtion() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [{
        name: 'Number of exclamtion used',
        data: [74, 14]
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
              return val + "/100";
            }
          }
        
        },
        title: {
          text: 'Exclamtion points per 100 articles',
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
                    <Title level={4}>Exclamation Usage Analysis</Title>
                    <Text>Exclamtion points are used to send a "It is important" or "This is strange" signal which attracts more audience. After reviewing the datasets manually using a simple VS Code editor, we noticed that the usage of exclamtion points differ significantly between Fake and True articles.</Text>
                    <br/>
                    <br/>
                    <Text><strong>The Difference?</strong> First, we simply search for the letter "!" in both datasets. The result was amazing! It founds +20000 exclamtion point in Fake news versus exactly 4841 in True news.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}}><strong>So?</strong> We start analyzing the number of using exclamtion points by searching for combinations of exclamtion ("!") and question ("?") marks in both Fake and True datasets.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}} ><strong>How?</strong> We implemented a function called "count_exclamation_words" which is applied to each article in the datasets using ".apply" method of the Python Pandas dataframe.</Text>
                </Col>
                <Col span={6}>
                    <Image src={exclamtion_gif}/>
                </Col>
            </Row>
            <Row style={{marginTop:'18px'}} justify={'space-between'}>
                <Col span={16}>
                    <Row>
                        <Col span={23}>
                            <Text>Below, you can see the distribution for number of exclamtion points used in Fake news. On average, you can see 74 exclamtion (in combination with question marks) when reading 100 Fake news. Approximately, we can say there is around one "!" in each Fake article!</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Exclamation_result_01}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'24px'}}>
                        <Col span={23}>
                            <Text>On the other hand, the same code is executed for True news dataset and the distribution changed a lot. As it can be seen in the plot below, on avergae, there is a chance of only 14% that you can see a exclamtion point when reading a True article.</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Exclamation_result_02}/>
                                </Col>
                            </Row>
                            <br/>
                            <Text>Comparison between the results for Fake and True datasets in this analysis suggests that Fake news publishers tend to use exclamtion symobls 5 times more than True publishers which indicates the importance of the mentioned marks in attracting targeted audience.</Text>
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
  
  export default Exclamtion;