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
    ListItem,
    List,
    Text,
    Fab
  } from 'native-base';

import styles from './styles';

import * as request from '../components/request';

export default class DoencasIndex extends Component {

    constructor(props) {
        super(props);
        this.state = { doencas: [] };
    }

    /*componentDidMount() {
        this.getDoencasAsyn();
    }*/

    getDoencasAsyn() {
        const valor = request.getByPaciente('/doencas/paciente/', global.paciente._id);
        valor.then((res) => this.setState({ doencas: res }));
    }

    addDoenca = (doenca) => {
        const vetor = this.state.doencas;
        vetor.push(doenca);
        this.setState({ doencas: vetor });
    }

    deleteDoenca = (doenca) => {
        const vetor = this.state.doencas;
        const index = vetor.indexOf(doenca);
        vetor.splice(index, 1);
        this.setState({ doencas: vetor });
    }

    render() {
        this.getDoencasAsyn();
        return (
            <Container style={styles.conteiner}>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
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
                        renderRow={
                            data => 
                            <ListItem
                                button
                                onPress={
                                    () => this.props.navigation.navigate('DoencaView', 
                                    { deleteDoenca: this.deleteDoenca, 
                                        updateDoenca: this.getDoencasAsyn(), 
                                        doenca: data })
                                }
                            >
                                <Left>
                                    <Text>
                                        {data.nome}
                                    </Text>
                                </Left>
                                <Right />
                            </ListItem>
                        }
                    />
                </Content>

                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('DoencasCreate',
                    { addDoenca: this.addDoenca })}
                >
                    <Icon name="ios-add" />
                </Fab>   
            </Container>
        );
    }
}
