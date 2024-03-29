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


import Time_01 from '../assets/images/timeanalysis.gif'
import Engaging_result_01 from '../assets/images/Engaging_result_01.png'
import Engaging_result_02 from '../assets/images/Engaging_result_02.png'


function TimeAnalysis() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [{
        name: 'Ocurrences in Fake News',
        type: 'column',
        data: [2953, 3855, 5191, 13061, 22096]
      },
      {
        name: 'Trend in Fake News',
        type: 'line',
        data: [2953, 3855, 5191, 13061, 22096]
      }
      ,{
        name: 'Ocurrences in True News',
        type: 'column',
        data: [3797, 3958, 4702, 5561, 7033]
      },{
        name: 'Trend in True News',
        type: 'line',
        data: [3797, 3958, 4702, 5561, 7033]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          }
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
          enabledOnSeries: [0,2],
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
          categories: ["2012", "2014", "2015", "2016", "2017"],
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
          text: 'Time Analysis of Published/Referenced for Fake and True News',
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
            <Row justify={'space-between'}>
                <Col span={16}>
                    <Title level={4}>Time Frame Analysis</Title>
                    <Text>When there is something important going on a large scale (e.g., the elections), it is normal if we experience more Fake news publishing and spreading. That was a motivation for us to dive into Fake and True datasets to see if there are any major peaks in the years that large-scale things happened in the world.</Text>
                    <br/>
                    <br/>
                    <Text><strong>What we found?</strong> Initially, we explored datasets, which took us around 1 hour to understand that the time frames referenced in each article are different between True and Fake news. Then, we start to think about the big things that happened in the last few years. Since the datasets were collected before the COVID virus, the most controversial event was the USA 2016 election, where Donald Trump and Hillary Clinton were the main candidates.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}}><strong>So?</strong> We start analyzing the number of articles with regard to the referenced or published year of that article.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}} ><strong>How?</strong> Same as exclmataion analysis, we simply implemented a function called "count_ref_years" which is applied to each article in the datasets using the ".apply" method of the Python Pandas dataframe. This function will count the years that are referenced by the period from 2000 to 2030. Then, we sorted the output to see which years are the most referenced ones. The results were super-interesting and are described in the next few paragraphs.</Text>
                </Col>
                <Col span={6}>
                    <Image src={Time_01}/>
                </Col>
            </Row>
            <Row style={{marginTop:'18px'}} justify={'space-between'}>
                <Col span={16}>
                    <Row>
                        <Col span={23}>
                            <Text>Below, the number of occurrences for each year that is referenced in the Fake and True datasets can be seen. One can see the instability of the trend in Fake news. For example, the number of occurrences for 2016 and 2017 is 22096 and 13061, respectively. 2016-2017 is the year of the USA election, as guessed before, and it magnifies the publication of Fake News by a factor of 5! On the other hand, there has been no significant increase in the number of published True News over time.</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                  <ReactApexChart options={firstDiagram.options} series={firstDiagram.series} type="line"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row justify={'center'}>
                        <Text></Text>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
  }
  
  export default TimeAnalysis;