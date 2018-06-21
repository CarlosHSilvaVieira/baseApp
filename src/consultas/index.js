import React, { Component } from 'react';

import { ListView } from 'react-native';

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    List,
    ListItem,
    Text,
    Fab,
    Title
  } from 'native-base';

import * as request from '../components/request';

export default class ConsultasIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { consultas: [] };
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }

    getAll() {
        const uri = '/consultas/paciente/';

        const valor = request.getByPaciente(uri, global.paciente._id);
        valor.then((resposta) => this.setState({ consultas: resposta }));
    }

    /*componentWillMount() {
        this.getAll();
    }*/

    /*houldComponentUpdate()
    {
        this.getAll();
        return true;
    }*/

    deletarConsulta(data) {
        const uri = '/consulta/';

        const valor = request.delete(uri, data._id);
        valor.then();
    }

    deleteRow(secId, rowId, rowMap, data) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.consultas];
        newData.splice(rowId, 1);
        this.setState({ consultas: newData });

        this.deletarConsulta(data);
    }

    render() {
        this.getAll();
        return (
            <Container>
                <Header>
                    <Left>
                        <Button 
                            transparent 
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Consultas</Title>
                    </Body>
                    <Right />    
                </Header>
                <Content>  
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.consultas)}
                        pagingEnabled
                        scrollEnabled
                        renderRow={(consulta) => 
                            <ListItem >
                                <Body>
                                    <Text>{consulta.local}</Text>
                                </Body>
                                <Right>
                                    <Text>{new Date(consulta.data).toLocaleDateString()}</Text>
                                </Right>
                            </ListItem>    
                        }

                        renderLeftHiddenRow={(data) =>
                            <Button 
                                full 
                                onPress={
                                    () => this.props.navigation.navigate('ConsultasView', 
                                    { consulta: data })}
                            >
                                <Icon active name="information-circle" />
                            </Button>
                        }
                        
                        renderRightHiddenRow={(data, sectionId, rowId, rowMap) => 
                            <Button 
                                full 
                                danger 
                                onPress={_ => this.deleteRow(sectionId, rowId, rowMap, data)}
                            >
                                <Icon active name="trash" />
                            </Button>
                        }
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                </Content>
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={
                        () => this.props.navigation.navigate('ConsultasCreate')}
                >
                    <Icon name="ios-add" />
                </Fab>           
            </Container>    
        );
    }
}  
