import { Route, Switch} from 'react-router-dom'; 
import { Container } from '@mui/system';
import '@fontsource/roboto';

import Header from './Home/Header';
import Home from './Home/Home';
import Nav from './Dashboard/Nav';
import Dashboard from './Dashboard/Dashboard';
import Admin from './Admin/Admin';
import EditStudent from './Admin/EditStudent';
import Missing from './Home/Missing';
import { DataProvider } from './Context/DataContext';
import './App.css';


const App = () => 
{
    return (    
        <div className="cen">
            <Header/>
            <Container maxWidth='md'>
                <DataProvider>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/login" exact>
                            <Nav/>
                            <Dashboard />
                        </Route>      
                        <Route path="/admin" exact>
                            <Nav/>
                            <Admin/>
                        </Route>
                        <Route path="/edit/:id" exact>
                            <Nav/>
                            <EditStudent />
                        </Route> 
                        <Route path="*" component={Missing} />    
                    </Switch>   
                </DataProvider>
            </Container>   
        </div>
    );
};

export default App;
