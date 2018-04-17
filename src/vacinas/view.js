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


export default class ViewVacina extends Component 
{
    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        let aux = state.params ? state.params.vacina : "<undefined>";
        this.state = {vacina: aux};
    }

    deletarVacina ()
    {
        let vacina = this.state.vacina;
        console.log("deletar vacina");
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
                    <Body>
                        <Title>Vacina</Title>
                    </Body>
                    <Right />
                </Header>
                <Grid>
                        <Row size={3} style={{ backgroundColor: '#635DB7', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>{this.state.vacina.text}</Text>
                        </Row>
                        <Row size={1} style={{ backgroundColor: '#00CE9F'}}>
                            <Col>
                                <Button block danger style={styles.button} onPress={() => this.deletarVacina()}><Text>Deletar vacina</Text></Button>  
                            </Col>
                            <Col>
                                <Button block info style={styles.button} onPress={() => this.props.navigation.navigate("VacinasEdit", {vacina: this.state.vacina})}><Text>Editar vacina</Text></Button>
                            </Col>
                        </Row>   
                </Grid> 

            </Container>    
        );
    }
}