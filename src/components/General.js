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


function General() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [43642, 34975],
      options: {
        chart: {
          width: 450,
          height: 400,
          type: 'pie',
        },
        labels: ['Fake', 'True',],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 320
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: 'Distribution of Each Class of News',
          align: 'center',
        }
      },
    })
    
    return (
        <Col span={24} gutter={[24,6]}>
            <Divider orientation="center" style={{marginTop:'24px'}}/>
            <Row justify={'space-between'}>
                <Col span={23}>
                    <Title level={4}>General Analysis and Reports</Title>
                    <Text>In the provided datasets, we have 34,975 true news entries and 43,642 fake news entries. Both datasets have two columns: “Unnamed: 0,” which contains an integer ID for each news article, and “text,” which contains the text content of each article. The "text" column is of object type, and there are some null values in the true news dataset. Hence, it seems that the two datasets have different sizes and numbers of entries. This indicates that the datasets are imbalanced, which means that one class (in this case, the fake news class) is overrepresented compared to the other class (the true news class). The pie chart below shows the percentage of each group in the dataset:</Text>
                </Col>
            </Row>
            <Row style={{marginTop:'18px'}} justify={'space-between'}>
                <Col span={24}>
                    <Row justify={'center'}>
                        <Col span={12}>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                  <ReactApexChart options={firstDiagram.options} series={firstDiagram.series} type="pie" height={"320px"}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'24px'}}>
                        <Col span={23}>
                            <Text style={{fontSize:'14px', color:'black'}}>Data Preprocesing</Text>
                            <br/>
                            <Text>The text requires cleaning and processing so before analysing the data, some preprocessing tasks are done. Below are the preprocessing steps which are briefly explained.</Text>
                            <li>Splitting the text into individual words.</li>
                            <li>Removing stop words. (common words that do not carry much meaning, such as "the", "and", "of", etc.)</li>
                            <li>Lemmatizing each word (converting words to their base form, such as "running" to "run").</li>
                            <li>Joining the processed words back into a single string.</li>
                            <Text>The processed text is saved in a new column called "text_processed" in the dataset, and this column is used for all of the following analysis as well as the specific analysis described in previous sections.</Text>
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
            </Row>
        </Col>
    );
  }
  
  export default General;