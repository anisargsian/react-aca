import React, {Component} from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Skills from '../Skills/Skills';
import Price from '../Price/Price';
import Icon from '../Icon/Icon';
import FaLightbulb from 'react-icons/lib/fa/lightbulb-o';
import FaLaptop from 'react-icons/lib/fa/laptop';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaPaintBrush from 'react-icons/lib/fa/paint-brush';
import FaColumns from 'react-icons/lib/fa/columns';
import FaWindows from 'react-icons/lib/fa/windows';
import FaLocation from 'react-icons/lib/fa/location-arrow';
import FaEdit from 'react-icons/lib/fa/edit';
import GoSettings from 'react-icons/lib/go/settings';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <Section className="head-section1">
          <Icon><FaLightbulb/></Icon>
          <Title label="I am just another" className="head-title1"/>
          <Title label="creative guy" className="head-title1"/>
          <Subtitle>
            <span>who can build memorable creative
            </span>
            <span className="head-subtitle-tail"> experince for you</span>
          </Subtitle>

          <div className="pin-section">
            <Icon><GoSettings/></Icon>
            <Icon><FaEdit/></Icon>
            <Icon><FaWindows/></Icon>
            <Icon><FaLocation/></Icon>
          </div>
        </Section>

        <Section className="head-section2">
          <Title label="what i do" className="head-title2"/>
          <Subtitle>
            I specialize in creating inspirational websites, logos, brochures and app UX/UI
            for grat individuals and small to large sized companies across the world helping
            them to market their business succsessfully
          </Subtitle>

          <div className="inline">
            <Icon><FaLaptop/></Icon>
            <Skills children="Websites"/>
            <Price text="Starts From 350$"/>
            <Subtitle className="subtitle">
              I develope responsive websites, meaning your website will look good on any
              device, whether it is a computer, mobile or tablet
            </Subtitle>
          </div>

          <div className="inline">
            <Icon><FaPencil/></Icon>
            <Skills children="Identity"/>
            <Price text="Starts From 140$"/>
            <Subtitle className="subtitle">
              I develope responsive websites, meaning your website will look good on any
              device, whether it is a computer, mobile or tablet
            </Subtitle>
          </div>

          <div className="inline">
            <Icon><FaPaintBrush/></Icon>
            <Skills children="Print"/>
            <Price text="Starts From 140$"/>
            <Subtitle className="subtitle">
              I develope responsive websites, meaning your website will look good on any
              device, whether it is a computer, mobile or tablet
            </Subtitle>
          </div>

          <div className="inline">
            <Icon><FaColumns/></Icon>
            <Skills children="user interface"/>
            <Price text="Starts From 190$"/>
            <Subtitle className="subtitle">
              I develope responsive websites, meaning your website will look good on any
              device, whether it is a computer, mobile or tablet"
            </Subtitle >
          </div>
        </Section>

      </div>
    );
  }
}

export default App;
