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
    Item,
    Fab
  } from "native-base";

import axios from 'axios';

import DatePicker from 'react-native-datepicker';

import styles from './styles';

export default class DoencaView extends Component {

    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        let aux = state.params ? state.params.doenca : "<undefined>";
        this.state = {doenca: aux};
    }

    deleteDoenca()
    {
        let uri = global.uri + "/doenca/" + this.state.doenca._id;
        
        axios.delete(uri)
        .then((response) => this.goBack())
        .catch((error) => alert(error))
    }

    goBack()
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.deleteDoenca(this.state.doenca);
    }

    updateDoenca = (data) =>
    {
        this.setState({doenca: data});
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
                            onPress={() => this.props.navigation.navigate("DoencaEdit", {updateDoenca: this.updateDoenca, doenca: this.state.doenca})}>
                            <Text>Editar</Text>
                        </Button>
                    </Right>    
                </Header>
                <Content>
                    <Form>
                        <Item style={styles.item}>
                            <Label>Nome da doença</Label>
                            <Input disabled value={this.state.doenca.nome}/>
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Sintomas</Label>
                            <Input disabled value={this.state.doenca.sintomas}/>
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Inicio dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.doenca.dataInicio}
                                    mode='date'
                                    disabled = {true}
                                    showIcon = {false}
                                    androidMode = "calendar"
                                    placeholder='select date'
                                    minDate={new Date('1990-01-01')}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                /> 
                        </Item>       
                        <Item style={styles.item}>
                            <Label>Fim dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.doenca.dataFim}
                                    mode='date'
                                    disabled = {true}
                                    showIcon = {false}
                                    androidMode = "calendar"
                                    placeholder='select date'
                                    minDate={new Date('1990-01-01')}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                /> 
                        </Item>  
                    </Form>
                </Content>    
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position = "bottomRight"
                    onPress = {() => this.deleteDoenca()}>
                    <Icon name="ios-trash" />
                </Fab>
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position = "bottomLeft"
                    onPress = {() => this.deleteDoenca()}>
                    <Icon name="ios-map" />
                </Fab>
            </Container>    
        );
    }
}