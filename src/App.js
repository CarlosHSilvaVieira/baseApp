import React from 'react';
import { Root } from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import SideBar from './sidebar';
import Home from './home/home';

import Login from './login';

//Medicos Routes
import MedicosCreate from './medicos/create';
import MedicosSearch from './medicos/search';

//Doenças Routes
import DoencasIndex from './doencas';
import DoencasCreate from './doencas/create';
import DoencaView from './doencas/view';
import DoencaEdit from './doencas/edit';
import DoencasSearch from './doencas/search';
import ViewDoencasConsulta from './doencas/viewDoenças';

//Vacinas Routes
import VacinasIndex from './vacinas';
import ViewVacinas from './vacinas/view';
import VacinasCreate from './vacinas/create';
import VacinasEdit from './vacinas/edit';

//Remedios Routes 
import RemediosIndex from './remedios';
import RemediosCreate from './remedios/create';
import RemediosView from './remedios/view';
import RemediosEdit from './remedios/edit';
import RemediosSearch from './remedios/search';
import ViewRemediosConsulta from './remedios/viewRemedios';

//Consultas Routes
import ConsultasIndex from './consultas';
import ConsultasView from './consultas/view';
import ConsultasCreate from './consultas/create';
import ConsultasEdit from './consultas/edit';


//Week
import Week from './remedios/week';

//Hours
import Hours from './remedios/hours';
import addHour from './remedios/addHour';

//MapSideBar
import DrawerMap from './components/mapSideBar/drawerMap';

// rotas gerais
const Drawer = DrawerNavigator(
{
    Home: { screen: Home },
    DoencasIndex: { screen: DoencasIndex },
    VacinasIndex: { screen: VacinasIndex },
    RemediosIndex: { screen: RemediosIndex },
    ConsultasIndex: { screen: ConsultasIndex },
    
    Login: { screen: Login }
},
{
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />
});

//rotas especiificas
const AppNavigator = StackNavigator(
{
    Drawer: { screen: Drawer }, 
    MapSideBar: { screen: DrawerMap },

    DoencasCreate: { screen: DoencasCreate },
    DoencaView: { screen: DoencaView },
    DoencaEdit: { screen: DoencaEdit },
    DoencasSearch: { screen: DoencasSearch },
    ViewDoencasConsulta: { screen: ViewDoencasConsulta },

    VacinasView: { screen: ViewVacinas },
    VacinasCreate: { screen: VacinasCreate },
    VacinasEdit: { screen: VacinasEdit },

    Week: { screen: Week },

    RemediosCreate: { screen: RemediosCreate },
    RemediosView: { screen: RemediosView },
    RemediosEdit: { screen: RemediosEdit },
    RemediosSearch: { screen: RemediosSearch },
    ViewRemediosConsulta: { screen: ViewRemediosConsulta },

    ConsultasView: { screen: ConsultasView },
    ConsultasCreate: { screen: ConsultasCreate },
    ConsultasEdit: { screen: ConsultasEdit },
    
    MedicosCreate: { screen: MedicosCreate },
    MedicosSearch: { screen: MedicosSearch },

    Hours: { screen: Hours },
    addHour: { screen: addHour }

},
{
    initialRouteName: 'Drawer',
    headerMode: 'none'
});

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
