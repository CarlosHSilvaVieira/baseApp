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
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
    CheckBox,
    Textarea
  } from "native-base";

import DatePicker from 'react-native-datepicker';

import axios from 'axios';

import styles from './styles';
import Week from './week';

export default class RemediosCreate extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {nome: "", bula: "", dataInicio: new Date(), dataFim: new Date(), horarios: [], dias: []};
    }

    onDaysChange = (data) =>
    {
        this.setState({dias: data});
    }

    onAddHoras = (horas) =>
    {
        this.setState({horarios: horas});
    }

    save()
    {
        let uri = "http://192.168.0.10:3000/remedios/";

        let remedio = {
            nome: this.state.nome, 
            bula: this.state.bula, 
            dataInicio: new Date(this.state.dataInicio),
            dataFim: new Date(this.state.dataFim),
            horarios: this.state.horarios,
            dias: this.state.dias,
            paciente: global.paciente._id};  

        axios.post(uri, remedio)
        .then((response) => this.goBack(response.data))
        .catch((error) => alert(error));
    }

    goBack(data)
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.addRemedio(data);
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
                        <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Remedios</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.save()}
                            >
                            <Text>Salvar</Text>
                            </Button>
                    </Right>
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input onChangeText = {(texto) => {this.setState({nome: texto})}} />   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Bula</Label>
                            <Input onChangeText = {(texto) => {this.setState({bula: texto})}} />   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de inicio da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataInicio}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                placeholder='select date'
                                minDate={new Date('2016-05-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                is24Hour = {true}
                                onDateChange={(date) => {this.setState({dataInicio: date})}}
                            />
                        </Item>  
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de fim da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataFim}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                placeholder='select date'
                                minDate={new Date('2016-05-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                is24Hour = {true}
                                onDateChange={(date) => {this.setState({dataFim: date})}}
                            />
                        </Item>  

                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("Hours", {onAddHoras: this.onAddHoras, horarios: this.state.horarios})}><Text>{this.state.horarios.length + " horários"}</Text></Button>
                        </Item>

                        <Item inlineLabel style={styles.item}>
                            <Label>Dias da medicação</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("Week", {onDaysChange: this.onDaysChange, dias: this.state.dias})}><Text>{this.state.dias.length + " dias"}</Text></Button>
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}