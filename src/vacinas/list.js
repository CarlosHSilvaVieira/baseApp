import React, { Component } from 'react';

import styles from './styles';

import {
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    List,
    ListItem,
    Text,
    Tab,
    Tabs,
    Grid,
    Col,
    Row,
    H3
  } from "native-base";

const datas =  [{text: 'vacina 01', dateVaccination: new Date('2016-05-01')}, {text: 'vacina 02', dateVaccination: new Date('2016-05-01')}, {text: 'vacina 03', dateVaccination: new Date('2016-05-01')}, {text: 'vacina 04', dateVaccination: new Date('2016-05-01')}, {text: 'vacina 05', dateVaccination: new Date('2016-05-01')}, {text: 'vacina 06', dateVaccination: new Date('2016-05-01')}];

export default class ListVacinas extends Component {

    constructor(props)
    {
        super(props);
        this.state = {items: datas};
    }

    render()
    {
        return(
            <Content>
                <List dataArray={this.state.items}
                    renderRow={(item) =>                        
                        <ListItem button
                        onPress = {() => this.props.navigation.navigate("VacinasView", {vacina: item})}>
                            <Text>{item.text}</Text>
                        </ListItem>    
                    }>
                </List>
                
            </Content>    
        );
    }
} 