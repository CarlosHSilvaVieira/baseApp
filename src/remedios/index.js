import React, { Component } from 'react';

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

export default class RemediosIndex extends Component {
    
    constructor(props) {
        super(props);
        const idPaciente = this.props.navigation.state.params ? 
        this.props.navigation.state.params.id_paciente : null;

        this.state = { remedios: [], id_paciente: idPaciente };
    }
    
    /*shouldComponentUpdate()
    {
        this.getRemedios();
        return true;
    }*/

    /*componentWillMount() {
        this.getRemedios();
    }*/

    getRemedios() {
        const valor = request.getByPaciente('/remedios/paciente/', global.paciente._id);
        valor.then((response) => this.setState({ remedios: response }));
    }

    addRemedio = (data) => {
        const vetor = this.state.remedios;
        vetor.push(data);
        this.setState({ remedios: vetor });
    }

    deleteRemedio = (data) => {
        const vetor = this.state.remedios;
        const index = vetor.indexOf(data);
        vetor.splice(index, 1);
        this.setState({ remedios: vetor });
    }

    render() {
        this.getRemedios();
        return (
            <Container>
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
                        <Title>Remedios</Title>
                    </Body>    
                    <Right />    
                </Header> 
                <Content>  
                    <List
                        dataArray={this.state.remedios}
                        renderRow={(remedioAux) => 
                            <ListItem 
                                button
                                onPress={
                                    () => this.props.navigation.navigate('RemediosView', 
                                    { remedio: remedioAux, deleteRemedio: this.deleteRemedio })}
                            >
                                <Text>{remedioAux.nome}</Text>
                            </ListItem>    
                        }
                    />  
                </Content>   
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={
                        () => this.props.navigation.navigate('RemediosCreate', 
                        { addRemedio: this.addRemedio })
                    }
                >
                    <Icon name="ios-add" />
                </Fab>      
            </Container>    
        );
    }    
}
