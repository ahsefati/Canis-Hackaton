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


import Engaging_01 from '../assets/images/Engaging_01.png'
import Engaging_result_01 from '../assets/images/Engaging_result_01.png'
import Engaging_result_02 from '../assets/images/Engaging_result_02.png'


function Engaging() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [{
        name: 'Number of engaging words',
        data: [143, 32]
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
              return val;
            }
          }
        
        },
        title: {
          text: 'Engaging words per 100 articles',
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
                    <Title level={4}>Engaging Words Usage Analysis</Title>
                    <Text>There is modern slang in the social media: using too many hashtags is a sign for False news! It's completely normal to use hashtags, mentions, and other ways to engage people in order to have a interaction with the article you published. But if there are too many usage of this "engaging" words and methods, that can be suspecious.</Text>
                    <br/>
                    <br/>
                    <Text><strong>The Difference?</strong> First, we wondered if there is any difference in the intencity of engaging audience. From our experience, we have seen many authors kind of "attack" their targeted audience to make them interact with the article by liking, sharing or commenting! That can be a danger sign. Then, we simply searched for "#", "@", and some other engaging words such as "like us", "follow us", etc. The result amazed us. For example, there was around 10500 hashtags in Fake articles while it was around 2000 in the True dataset.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}}><strong>So?</strong> We start analyzing the number of using engaging words by searching for combinations of different engaging ways described above.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}} ><strong>How?</strong> We implemented a function called "count_engaging_words" which is applied to each article in the datasets using ".apply" method of the Python Pandas dataframe.</Text>
                </Col>
                <Col span={6}>
                    <Image src={Engaging_01}/>
                </Col>
            </Row>
            <Row style={{marginTop:'18px'}} justify={'space-between'}>
                <Col span={16}>
                    <Row>
                        <Col span={23}>
                            <Text>Below, you can see the distribution for number of engaging words used in Fake news. On average, you can see 143 engagings (combination of different ways) when reading 100 Fake news. Approximately, we can say there is around 1.5 engaging words in each Fake article!</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Engaging_result_01}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'24px'}}>
                        <Col span={23}>
                            <Text>On the other hand, the same code is executed for True news dataset and the distribution changed in a meaningful way. As it can be seen in the plot below, on avergae, one will see just 32 engaging word used when reading 100 True articles. (Compared to 143 for the Fake news)</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Engaging_result_02}/>
                                </Col>
                            </Row>
                            <br/>
                            <Text>Comparison between the results for Fake and True datasets in this analysis suggests that Fake news publishers tend to use engaging words 5 times more than True publishers which indicates that readers should not engage (like, share, or comment) when they are not sure about the credibility of the artcile.</Text>
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
  
  export default Engaging;