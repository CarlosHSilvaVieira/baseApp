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

export default class AddRemediosConsulta extends Component {

    constructor(props)
    {
        super(props);
        let aux = this.props.navigation.state.params.remedios ? this.props.navigation.state.params.remedios : [];
        this.state = {remedios : aux};
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        
    }

    deleteRow(secId, rowId, rowMap) 
    {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.remedios];
        newData.splice(rowId, 1);
        this.setState({ remedios: newData });
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
                            onPress={() => this.props.navigation.navigate("RemediosCreate", {addRemedios: this.addRemedio})}
                            >
                            <Text>Adicionar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <List
                        dataSource = {this.ds.cloneWithRows(this.state.remedios)}
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