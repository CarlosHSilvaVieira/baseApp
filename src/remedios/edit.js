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

export default class RemediosEdit extends Component
{
    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        let remedio_aux = state.params ? state.params.remedio : null;
        this.state = {
            _id: remedio_aux._id,
            nome: remedio_aux.nome,
            bula: remedio_aux.bula,
            dataInicio: remedio_aux.dataInicio,
            dataFim: remedio_aux.dataFim,
            horarios: remedio_aux.horarios,
            dias: remedio_aux.dias
        };
    }

    onDaysChange = (data) =>
    {
        this.setState({dias: data});
    }
    
    onAddHoras = (horarios) =>
    {
        this.setState({horarios: horarios})
    }

    atualizar()
    {
        let uri = "http://192.168.0.10:3000/remedio/" + this.state._id;

        let remedio = {
            _id: this.state._id, 
            nome: this.state.nome, 
            bula: this.state.bula, 
            dataInicio: new Date(this.state.dataInicio),
            dataFim: new Date(this.state.dataFim),
            horarios: this.state.horarios,
            dias: this.state.dias,
            paciente: global.paciente._id};  

        axios.put(uri, remedio)
        .then((response) => this.goBack(response.data))
        .catch((error) => alert(error));
    }

    goBack(data)
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.updateRemedio(data);
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
                        <Text>Cancelar</Text>
                        </Button>
                    </Left>
                    
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.atualizar()}
                            >
                            <Text>Salvar</Text>
                            </Button>
                    </Right>
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input onChangeText = {(text) => {this.setState({name: text})}}><Text>{this.state.nome}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Bula</Label>
                            <Input onChangeText = {(text) => {this.setState({bula: text})}}><Text>{this.state.bula}</Text></Input>   
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
                                minDate={new Date('1990-01-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
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
                                minDate={new Date('1990-01-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({dataFim: date})}}
                            />
                        </Item>  

                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("Hours", {onAddHoras: this.onAddHoras, horarios: this.state.horarios})}><Text>{this.state.horarios.length + " horários"}</Text></Button>
                        </Item>

                        <Item style={styles.item}>
                            <Label>Dias da medicação</Label>
                            <List
                                dataArray = {this.state.dias}
                                renderRow = {(dia) =>
                                    <ListItem button
                                    onPress = {() => this.props.navigation.navigate("Week", {onDaysChange: this.onDaysChange, dias: this.state.dias})}    >
                                        <Text>{dia}</Text>
                                    </ListItem> 
                                }
                            /> 
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}