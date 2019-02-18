/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  render, Window, App, Menu, Dialog, Tab,
} from 'proton-native';
import GeneralTab from './components/GeneralTab';
import Animation from './components/Animation';
import { questions, animations } from './data';

class Example extends Component {
  showAbout = () => {
    Dialog('Message', {
      title: 'Why this app exists?',
      description: 'Reasons, dunno',
    });
  };

  componentDidCatch(err) {
    Dialog('Message', {
      title: 'Error',
      description: err.message,
    });
  }

  render() {
    return (
      <App>
        <Menu label="Menu">
          <Menu.Item type="About" onClick={this.showAbout} />
          <Menu.Item type="Quit" />
        </Menu>
        <Window title="Important Question" size={{ w: 300, h: 200 }} menuBar>
          <Tab>
            <Tab label="Animations">
              {questions.map(question => (
                <GeneralTab key={question.label} {...question} />
              ))}
            </Tab>
            <Tab label="Questions">
              {animations.map(animation => (
                <Animation key={animation.label} {...animation} />
              ))}
            </Tab>
          </Tab>
        </Window>
      </App>
    );
  }
}

render(<Example />);
