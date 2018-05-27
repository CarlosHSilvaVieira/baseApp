import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Left,
    Right,
    Text,
    Form,
    Label,
    Item,
  } from 'native-base';

import DatePicker from 'react-native-datepicker';

import styles from './styles';

export default class addHour extends Component {

    constructor(props) {
        super(props);
        this.state = { hora: '11:00' };
    }

    onSave() {
        this.props.navigation.goBack();
        this.props.navigation.state.params.addHora(this.state.hora);
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
                        <Text>Cancelar</Text>
                        </Button>
                    </Left>
                    
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.onSave()}
                        >
                            <Text>Salvar</Text>
                            </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.hora}
                                mode='time'
                                showIcon={false}
                                is24Hour
                                androidMode="spinner"
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => { this.setState({ hora: date }); }}
                            />
                        </Item>
                    </Form>    
                </Content>
            </Container>        
        );
    }
}
