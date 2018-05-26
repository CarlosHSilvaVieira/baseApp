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
    Thumbnail,
    H3
  } from "native-base";

import DoencasIndex from '../doencas';
import VacinasIndex from '../vacinas';

const foto_usuario = require('../../assets/user.jpg');

export default class Home extends Component {

    render()
    {
        return(
            <Container>
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
                    <Col style={styles.container}>
                        <Thumbnail large style={styles.thumbnail} circular={true} source={foto_usuario}/>
                        <Text>
                            <H3>Bem vindo!!!</H3>
                        </Text>    
                        <Text style={styles.text}>
                            Mentenha atualizado seu histórico médico
                        </Text>                        
                    </Col>
                </Grid>         
            </Container> 
        );
    }
}  