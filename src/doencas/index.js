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

export default class DoencasIndex extends Component {

    constructor(props)
    {
        super(props);
        this.state = {doencas: []};
    }
    
    getDoencasAsyn()
    {
        let uri = global.uri + "/doencas/paciente/" + global.paciente._id;

        axios.get(uri)
        .then((response) => this.setState({doencas: response.data}))
        .catch((error) => alert(error));
    }

    /*shouldComponentUpdate()
    {
        this.getDoencasAsyn();
        return true;
    }*/

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

    componentWillMount()
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
                                </Right>
                            </ListItem>}
                    >    
                    </List>
                </Content>

                <Fab
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.props.navigation.navigate("DoencasCreate", {addDoenca: this.addDoenca})}>
                    <Icon name="ios-add"/>
                </Fab>   
            </Container>
        );
    }
}


  