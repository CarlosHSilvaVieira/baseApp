import React, { Component } from 'react';

import { Dimensions } from 'react-native';

import {
  Text,
  Icon,
  Container,
  Footer,
  FooterTab,
  Button,
  Content
} from 'native-base';

import MapView, { Marker } from 'react-native-maps';

import * as request from '../request';

export default class MyMap extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          dados: [],
          farmacias: [], 
          width: Dimensions.get('window').width, 
          height: (Dimensions.get('window').height - 100) 
        };
    }

    setLayout(layout) {
      this.setState({ width: layout.width, height: layout.height });
      console.log(this.state);
    }

    getAllPoints() {
        const valor = request.getAllPoints();
        valor.then((resposta) => { this.setState({ dados: resposta }); });
    }

    getAllFarmacias() {
      const valor = request.getAllFarmacias();
        valor.then((resposta) => { this.setState({ farmacias: resposta }); });
    }

    render() {
        return (
          <Container>
            <Content onLayout={(event) => { this.setLayout(event.nativeEvent.layout); }}>
              <MapView
                style={{ width: this.state.width, 
                height: this.state.height }}
                showsUserLocation
                zoomControlEnabled
                zoomEnabled
                customMapStyle={[]}    
                initialRegion={{
                latitude: -19.8157,
                longitude: -43.954219,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
              >
                {this.state.dados.map((marker, index) => (
                  <Marker
                  key={index}
                  coordinate={marker.latlong}
                  title={marker.nom_estab}
                  />
                ))}
                
                {this.state.farmacias.map((marker, index) => (
                  <Marker
                  key={index}
                  pinColor={'#0000FF'}
                  coordinate={marker.latlong}
                  title={marker.farmacia}
                  />
                ))}
              </MapView>
            </Content>
            <Footer>
              <FooterTab>
              <Button onPress={() => { this.setState({ dados: [], farmacias: [] }); }} >
                  <Icon />
                  <Text>Limpar filtros</Text>
                </Button>
                <Button 
                  onPress={() => { this.getAllPoints(); }}
                >
                  <Icon />
                  <Text>Centros de Saúde</Text>
                </Button>
                <Button onPress={() => { this.getAllFarmacias(); }}>
                  <Icon />
                  <Text>Farmácias</Text>
                </Button>
              </FooterTab>    
            </Footer> 
          </Container>
        );
    }
}
