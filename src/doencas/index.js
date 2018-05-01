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
    Fab
  } from "native-base";



import styles from './styles';

import axios from 'axios';

const pacienteId = "5ae1e6c71162282378693abc";

export default class DoencasIndex extends Component {

    constructor(props)
    {
        super(props);
        this.state = {doencas: []};
    }
    
    getDoencasAsyn()
    {
        let uri = "http://192.168.0.10:3000/doencas/paciente/" + pacienteId;

        axios.get(uri)
        .then((response) => this.setState({doencas: response.data}))
        .catch((error) => alert(error));
    }

    addDoenca = (doenca) =>
    {
        let vetor = this.state.doencas;
        vetor.push(doenca);
        this.setState({doencas: vetor});
    }

    deleteDoenca = (doenca) =>
    {
        let vetor = this.state.doencas;
        let index = vetor.indexOf(doenca);
        vetor.splice(index, 1);
        this.setState({doencas: vetor});
    }

    componentDidMount()
    {
        this.getDoencasAsyn();
    }

    render()
    {
        return(
            <Container style={styles.conteiner}>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Doenças</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <List
                        dataArray={this.state.doencas}
                        renderRow={data => 
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate("DoencaView", {deleteDoenca: this.deleteDoenca, doenca: data})}
                            >
                                <Left>
                                    <Text>
                                        {data.nome}
                                    </Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" style={{ color: "#999" }} />
                                </Right>
                            </ListItem>}
                    >    
                    </List>
                </Content>

                <Fab
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.props.navigation.navigate("DoencasCreate", {addDoenca: this.addDoenca, pacienteId: pacienteId})}>
                    <Icon name="ios-add"/>
                </Fab>   
            </Container>
        );
    }
}


  