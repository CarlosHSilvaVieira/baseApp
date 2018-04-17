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
    Input,
    H1
  } from "native-base";

import styles from './styles';


export default class DoencaCreate extends Component {
    
    constructor(props)
    {
        super(props);

        this.state = { selecionado: 'init'};
    }

    onValueChange(valor)
    {
        this.setState({selecionado: valor});
    }

    render()
    {
        return(
            <Container style={styles.conteiner}>
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
                        <Title>Doenças</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Grid style={styles.titulo}>
                        <Row >
                            <View>
                                <H1>Cadastrar Doença</H1>
                            </View>
                        </Row>    
                    </Grid> 
                    <Form>
                        <Picker
                        placeholder="Selecione uma doença"
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selecionado}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Selecione uma doença" value="init" />
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                        <Button full style={styles.botao}><Text> Cadastrar </Text></Button>
                    </Form>
                </Content>     
            </Container>
        );
    }
}