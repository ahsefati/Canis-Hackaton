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


import General_01_01 from '../assets/images/General_01_01.png'
import General_01_02 from '../assets/images/General_01_02.png'
import General_02 from '../assets/images/General_02.jpg'
import General_03_01 from '../assets/images/General_03_01.jpg'
import General_03_02 from '../assets/images/General_03_02.jpg'


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
                            <Text>The processed text is saved in a new column called "text_processed" in the dataset, and this column is used for all of the following general analysis as well as the specific analysis described in previous sections.</Text>
                            <Text style={{fontSize:'14px', color:'black'}}>Word Clouds</Text>
                            <br/>
                            <Text>By generating word clouds, the most frequently occurring words in each dataset can be observed. These words are usually larger and bolder in the word cloud. Some observations and conclusions based on the word clouds is as follows.</Text>
                            <br/>
                            <Text>Fake news dataset: The most frequently occurring words in the fake news dataset include "Trump", "Hillary", "Obama", "Clinton", "election", "news", "media", "Russia", "campaign", "vote", "email", "FBI", "investigation", "white house", and "false". These words suggest that the fake news in this dataset is largely related to politics, especially the 2016 US presidential election and the controversies surrounding it. (It is also detected and explained in the "Time Analysis" section.)</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={12}>
                                    <Image src={General_01_01}/>
                                </Col>
                            </Row>
                            <br/>
                            <Text>True news dataset: The most frequently occurring words in the true news dataset include "Trump", "president", "time", "US", "government", "people", "percent", "new", "year", "states", "company", "house", "health", and "officials". These words suggest that the true news in this dataset is more diverse in topic, using less the names of famous people and organisations, but still heavily related to US politics and government.</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={12}>
                                    <Image src={General_01_02}/>
                                </Col>
                            </Row>
                            <br/>
                            <Text>As is evident in the bar charts below, there are some words that appear more frequently in one dataset than the other. For example, words like "Trump", "Clinton", "Obama", "Hillary" appear more frequently in the fake news dataset, while words like "said", "people", "government" and "president" appear more frequently in the true news dataset, which can show that fake news more often uses topics related to celebrities and governmental parties and may be more focused on political figures and sensational topics to attract people.</Text>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'24px'}}>
                                <Col span={24}>
                                    <Image src={General_02}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'24px'}}>
                      <Text style={{fontSize:'14px', color:'black'}}>Word Count Analysis</Text>
                      <br/>
                      <Text>In this stage, we tried to calculate the average word count in each dataset, and the result was 533 versus 436 for True and Fake datasets, respectively.</Text>
                      <br/>
                      <Text>Based on this result, we can conclude that the true news dataset has a higher average word count than the fake news dataset. This may indicate that true news articles tend to provide more detailed information and analysis, while fake news articles may rely more on sensationalism and attention-grabbing headlines. However, it's important to note that this is just one aspect of the data, and further analysis is needed to draw more definitive conclusions as you can explore other types of analysis in previous sections.</Text>
                      <br/>
                      <Text>We also investigated the distribution of word count, and below are the related histograms.</Text>
                      <Row gutter={[12,12]} justify={'center'} style={{marginTop:'24px'}}>
                          <Col span={12}>
                              <Image src={General_03_01}/>
                          </Col>
                          <Col span={12}>
                              <Image src={General_03_02}/>
                          </Col>
                      </Row>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
  }
  
  export default General;