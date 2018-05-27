import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Text,
    Form,
    Label,
    Input,
    Item,
    Fab
  } from 'native-base';

import DatePicker from 'react-native-datepicker';  

import * as request from '../components/request';

import styles from './styles';

export default class DoencaView extends Component {

    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const aux = state.params ? state.params.doenca : null;
        this.state = { doenca: aux, id: aux._id };
    }

    deleteDoenca() {
        const valor = request.delete('/doenca/', this.state.id);
        valor.then(() => this.goBack());
    }

    goBack() {
        this.props.navigation.state.params.deleteDoenca(this.state.doenca);
        this.props.navigation.goBack();
    }

    updateDoenca = (data) => {
        this.setState({ doenca: data });
    }

    backPage() {
        this.props.navigation.state.params.updateDoenca(this.state.doenca);
        this.props.navigation.goBack();
    }

    render() {
        return (
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
                            onPress={() => this.props.navigation.navigate('DoencaEdit', 
                            { updateDoenca: this.updateDoenca, doenca: this.state.doenca })}
                        >
                            <Text>Editar</Text>
                        </Button>
                    </Right>    
                </Header>
                <Content>
                    <Form>
                        <Item style={styles.item}>
                            <Label>Nome da doença</Label>
                            <Input disabled value={this.state.doenca.nome} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Sintomas</Label>
                            <Input disabled value={this.state.doenca.sintomas} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Inicio dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.doenca.dataInicio}
                                    mode='date'
                                    disabled
                                    showIcon={false}
                                    androidMode="calendar"
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
                                    disabled
                                    showIcon={false}
                                    androidMode="calendar"
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
                    position="bottomRight"
                    onPress={() => this.deleteDoenca()} 
                >
                    <Icon name="ios-trash" />
                </Fab>
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomLeft"
                    onPress={() => this.deleteDoenca()}
                >
                    <Icon name="ios-map" />
                </Fab>
            </Container>    
        );
    }
}
