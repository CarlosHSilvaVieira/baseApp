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
    H1,
    Item
  } from "native-base";

import styles from './styles';

import DatePicker from 'react-native-datepicker';

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
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <Text>Salvar</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        
                        <Picker
                            placeholder="Selecione uma doença"
                            iosHeader="Selecione uma doença"
                            mode="dropdown"
                            selectedValue={this.state.selecionado}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Selecione uma doença" value="init" />
                                <Picker.Item label="doença 01" value="key0" />
                                <Picker.Item label="doença 02" value="key1" />
                                <Picker.Item label="doença 03" value="key2" />
                                <Picker.Item label="doença 04" value="key3" />
                                <Picker.Item label="doença 05" value="key4" />
                            </Picker>

                        <Item style={styles.item}>
                            <Text>Inicio dos sintomas</Text>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.data}
                                    mode='date'
                                    showIcon = {false}
                                    androidMode = "calendar"
                                    format = "DD-MM-YYYY"
                                    placeholder='select date'
                                    minDate={new Date('2016-05-01')}
                                    maxDate={new Date()}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={(date) => {this.setState({data: date})}}
                                /> 
                            </Item>       
                    </Form>
                </Content>     
            </Container>
        );
    }
}