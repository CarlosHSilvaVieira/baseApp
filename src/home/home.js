import React, { Component } from 'react';

import styles from './styles';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    List,
    ListItem,
    Text,
    Grid,
    Col,
    Row,
  } from "native-base";

import DoencasIndex from '../doencas';
import VacinasIndex from '../vacinas';

export default class Home extends Component {

    render()
    {
        return(
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>   
                <Grid>
                    <Col style={{backgroundColor: 'red'}}>
                    </Col>

                    <Col>
                        <Row style={{backgroundColor: 'blue'}}>
                        </Row>

                        <Row style={{backgroundColor: 'green'}}>
                        </Row>       
                    </Col>
                </Grid>     
            </Container> 
        );
    }
}  