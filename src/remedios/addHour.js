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

import styles from './styles';

export default class addHour extends Component {

    constructor(props)
    {
        super(props);
        this.state = {hora: '11:00'};
    }

    onSave()
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.addHora(this.state.hora)
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
                                showIcon = {false}
                                is24Hour = {true}
                                androidMode = "spinner"
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({hora: date})}}
                            />
                        </Item>
                    </Form>    
                </Content>
            </Container>        
        );
    }
}