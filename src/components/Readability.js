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


import Readability_01 from '../assets/images/Readability_01.png'
import Engaging_result_01 from '../assets/images/Engaging_result_01.png'
import Engaging_result_02 from '../assets/images/Engaging_result_02.png'


function Readability() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [{
        name: 'Readability Score of Fake News',
        data: [57.08, 10.16, 10.34, 11.52, 13.15, 9.80, 13.31]
      }, {
        name: 'Readability Score of True News',
        data: [54.90, 12.01, 10.91, 11.47, 13.36, 9.58, 14.28]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
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
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ["FleschReadingEase", "SMOGIndex", "FleschKincaidGradeLevel", "ColemanLiauIndex", "AutomatedReadabilityIndex", "DaleChallReadabilityScore", "LinsearWriteFormula"],
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
          title: {
            text: 'Readability  Score'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        },
        title: {
          text: 'Readability Analysis Comparison for Fake and True News',
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
                    <Title level={4}>Readability Analysis</Title>
                    <Text>One of the first things that pops up in our mind is a hypothesis: audiences are more attracted to an article when it's easier to read and understand compared to articles that are more difficult to read. Therefore, we decided to take the time to calculate the readability score for both the True and Fake datasets.</Text>
                    <br/>
                    <br/>
                    <Text><strong>What we found?</strong> We try to calculate the readability score for each article using 7 different algorithms that utilize various approaches and equations to determine the readability of a text. However, on average, the final result indicates that there is no major difference in the level of readability between the True and Fake datasets.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}}><strong>So?</strong> After implementing and executing all the different methods and obtaining 7 scores for each dataset, the results are shown in the plot below, which suggests that the Fake News are as readable as the True articles no matter which scoring method is used.</Text>
                    <br/>
                    <Text style={{marginTop:'4px'}} ><strong>How?</strong> We used the "TextStat" library in Python, which provides different readability scoring methods. Then we use the ".apply" function in Pandas to apply each method to each article in the datasets.</Text>
                </Col>
                <Col span={6}>
                    <Image src={Readability_01}/>
                </Col>
            </Row>
            <Row style={{marginTop:'18px'}} justify={'space-between'}>
                <Col span={16}>
                    <Row>
                        <Col span={23}>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'24px'}}>
                                <Col span={20}>
                                  <ReactApexChart options={firstDiagram.options} series={firstDiagram.series} type="bar"/>
                                </Col>
                            </Row>
                            <br/>
                            <Text><strong>A short description for each of the used methods is as follows:</strong></Text>
                            <li>Flesch Reading-Ease: A formula to calculate the ease of readability in a given text based on average sentence length and syllables per word.</li>
                            <li>SMOG Index: A readability formula that estimates the years of education required to understand a given text based on the number of polysyllabic words.</li>
                            <li>Flesch-Kincaid Grade Level: A readability formula that estimates the grade level needed to understand a given text based on average sentence length and syllables per word.</li>
                            <li>Coleman-Liau Index: A readability formula that estimates the grade level needed to understand a given text based on the number of characters and words in the text.</li>
                            <li>Automated Readability Index: A readability formula that estimates the grade level needed to understand a given text based on average sentence length and the number of words in the text.</li>
                            <li>DaleChall Readability Score: A formula that estimates the difficulty of a given text by considering the frequency of words that are not on a list of 3,000 familiar words.</li>
                            <li>Linsear Write Formula: A readability formula that estimates the grade level needed to understand a given text based on the number of simple and complex sentences in the text.</li>
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
  
  export default Readability;