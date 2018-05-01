import React, { Component } from "react";

import { ListView } from 'react-native';

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

export default class Hours extends Component
{
    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        let aux_horarios = state.params ? state.params.horarios : null;
        this.state = { horarios: aux_horarios };

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }

    deleteRow(secId, rowId, rowMap) 
    {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.doencas];
        newData.splice(rowId, 1);
        this.setState({ doencas: newData });
    }

    onBack()
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.onAddHoras(this.state.horarios)
    }

    addHora = (hora) =>
    {
        let vetor = this.state.horarios;
        vetor.push(hora);
        this.setState({horarios: vetor});
    }
    
    render()
    {
        return(
            <Container>
                 <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.onBack()}
                            >
                            <Text>Voltar</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("addHour", {addHora: this.addHora})}
                            >
                            <Text>Adicionar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <List
                        dataSource = {this.ds.cloneWithRows(this.state.horarios)}
                        renderRow = {(data) =>
                            <ListItem>
                                <Text> {data} </Text>
                            </ListItem>
                        }
                        renderLeftHiddenRow = {(data) =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>
                        }
                        renderRightHiddenRow = {(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active name="trash" />
                            </Button>
                        }
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>    
            </Container>    
        );
    }
}