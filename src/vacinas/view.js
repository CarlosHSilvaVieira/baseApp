import React, { Component } from 'react';

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
    Fab,
    Item,
    Switch
  } from 'native-base';

import DatePicker from 'react-native-datepicker';
  
import styles from './styles';
  
import * as request from '../components/request';
  
export default class ViewVacina extends Component {

    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const aux = state.params ? state.params.vacina : null;
        this.state = {
            vacina: aux,
            nome: aux.nome, 
            data: aux.data, 
            dataReforco: aux.dataReforco, 
            reforco: aux.reforco
        };
    }

    deletarVacina() {
        const uri = '/vacina/';
        const valor = request.delete(uri, this.state.vacina._id);
        valor.then((response) => this.goBack(response));
    }

    goBack() {
        this.props.navigation.goBack();
        this.props.navigation.state.params.deleteVacina(this.state.vacina);
    }

    updateVacina = (dados) => {
        this.setState({
            nome: dados.nome, 
            data: dados.data, 
            dataReforco: dados.dataReforco, 
            reforco: dados.reforco });
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
                    <Body>
                        <Title>Vacinas</Title>
                    </Body>
                    <Right>
                    <Button
                        transparent
                        onPress={
                            () => this.props.navigation.navigate('VacinasEdit', 
                            { updateVacina: this.updateVacina, vacina: this.state.vacina })}
                    >
                            <Text>Editar</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Left />
                            <Body>
                                <Input 
                                    disabled
                                    value={this.state.nome} 
                                />
                            </Body>
                            <Right />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data da vacinação</Label>
                            <Left />
                            <Body />
                            <Right><DatePicker
                                customStyles={{ dateInput: { borderWidth: 1, borderRadius: 20 } }}
                                style={styles.datePicker}
                                date={this.state.data}
                                mode='date'
                                showIcon={false}
                                disabled
                                androidMode="calendar"
                                placeholder='selecione'
                                minDate={new Date('1999-01-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                            />
                            </Right>
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Necessita de refoço</Label>
                            <Left />
                            <Body>
                                <Switch 
                                    disabled 
                                    style={styles.switch} 
                                    value={this.state.reforco} 
                                /> 
                            </Body>  
                            <Right />
                        </Item>  
                        <Item inlineLabel style={styles.item}>
                            <Label>Reforço</Label>
                            <Left />
                            <Body />
                            <Right>
                                <DatePicker
                                customStyles={{ dateInput: { borderWidth: 1, borderRadius: 20 } }}
                                style={styles.datePicker}
                                disabled={!this.state.reforco}
                                date={this.state.dataReforco}
                                mode='date'
                                showIcon={false}
                                disabled
                                androidMode="calendar"
                                placeholder='selecione'
                                minDate={new Date('1999-01-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                />
                            </Right>
                        </Item> 
                    </Form>    
                </Content>   
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.deletarVacina()} 
                >
                    <Icon name="ios-trash" />
                </Fab> 
            </Container>      
        );
    }
}
