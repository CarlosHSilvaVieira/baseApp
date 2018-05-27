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
    Text,
    List,
    ListItem,
  } from 'native-base';

export default class ViewRemediosConsulta extends Component {

    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const aux = state.params.remedios ? state.params.remedios : [];
        this.state = { remedios: aux };
    }

    render() {
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
                        <Title>Lista de remedios</Title>
                    </Body>    
                    <Right />   
                </Header>
                <Content>
                    <List
                        dataArray={this.state.remedios}
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
