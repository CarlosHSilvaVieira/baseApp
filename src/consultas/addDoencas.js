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

import styles from './styles';

export default class AddDoencasConsulta extends Component {

    constructor(props)
    {
        super(props);
        const { state } = this.props.navigation;
        let aux = state.params.doencas ? state.params.doencas : [];
        this.state = {doencas: aux}

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
        this.props.navigation.navigate.goBack();
        this.props.navigation.state.params.onAddDoencas(this.state.doencas)
    }

    addDoenca = (doenca) =>
    {
        let vetor = this.state.doencas;
        vetor.push(doenca);
        this.setState({doencas: vetor});
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
                            <Text>Voltar</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DoencasCreate", {addDoenca: this.addDoenca})}
                            >
                            <Text>Adicionar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <List
                        dataSource = {this.ds.cloneWithRows(this.state.doencas)}
                        renderRow = {(data) =>
                            <ListItem>
                                <Text> {data.nome} </Text>
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