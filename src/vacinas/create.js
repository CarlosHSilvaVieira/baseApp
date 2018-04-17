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
    Text,
    Grid,
    Col,
    Row,
    H1,
    Form,
    Label,
    Input,
    Item
  } from "native-base";

import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import styles from './styles';

export default class VacinaCreate extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {date: new Date()};
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
                        <Title>Vacinas</Title>
                    </Body>
                    <Right />
                </Header>
                <Container>
                    
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data da vacinação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.date}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                format = "DD-MM-YYYY"
                                placeholder='select date'
                                minDate={new Date('2016-05-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </Item>  
                    </Form>    
                    <Button full success style={styles.button}><Text> Cadastrar </Text></Button>

                    <Button full warning style={styles.button}><Text> Voltar </Text></Button>
                </Container>    
            </Container>    
           
        );
    }
}