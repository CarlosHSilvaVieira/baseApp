import React, { Component } from "react";

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
    ListItem,
    List,
    View,
    Text,
    Grid,
    Col,
    Row,
    Footer,
    FooterTab,
    Form,
    Picker,
    Label,
    Input
  } from "native-base";

import styles from './styles';

export default class DoencaView extends Component {

    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        let aux = state.params ? state.params.doenca : "<undefined>";
        this.state = {doenca: aux};
    }

    render()
    {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <Text>Remover</Text>
                        </Button>
                    </Right>    
                </Header>
                <Grid>
                        <Row size={3} style={{ backgroundColor: '#635DB7', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>{this.state.doenca.text}</Text>
                        </Row>
                        <Row size={1} style={{ backgroundColor: '#00CE9F'}}>
                            
                        </Row>   
                        <Button full block warning style={styles.button} onPress={() => {console.log("mapa da doença")}}><Text>Mapa da Doença</Text></Button>
                </Grid> 
                
            </Container>    
        );
    }
}