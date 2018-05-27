import React, { Component } from 'react';

//import { ListView } from 'react-native';

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
    List,
    ListItem,
  } from 'native-base';

export default class ViewDoencasConsulta extends Component {

    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const aux = state.params.doencas ? state.params.doencas : [];
        this.state = { doencas: aux };
    }

    /*componentWillMount()
    {
        this.state.aux.forEach(element => {
            this.getDoencas(element);
        });
    }

    getDoencas(id)
    {
        let uri = global.uri + "/doenca/" + id;

        Axios.get(uri)
        .then((response) => {this.atualiza(response.data)})
        .catch((err) => alert(err))
    }

    atualiza(data)
    {
        let vetor = this.state.doencas;
        vetor.push(data);
        this.setState({doencas: vetor});
    }*/

    render() {
        console.log(this.state.doencas);
        return (
            <Container>
                 <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Lista de doenças</Title>
                    </Body>    
                    <Right />   
                </Header>
                <Content>
                    <List
                        dataArray={this.state.doencas}
                        renderRow={(data) =>
                            <ListItem>
                                <Text> {data.nome} </Text>
                            </ListItem>
                        }
                    />
                </Content>    
            </Container>    
        );
    }
}
