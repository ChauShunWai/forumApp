import React from 'react';
import Header from './Header';
import { Router, Route, Switch } from 'react-router-dom'
import { 
    Forum, 
    CreateThread, 
    //Materials, 
    //MainPage, 
    Thread,
    EditThread,
    EditComment
} from './index'
import { Container, Image} from 'react-bootstrap'
import history from '../history'

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Header />
                    <Container>
                        <Image src="https://www.mba.ust.hk/img/imagecache/_files_1_hkust_sundial_2014_leading_global_business_school__1966x640_1c85ffffff1.jpg" fluid />
                        <Switch>
                            {/* <Route path="/" exact component={MainPage} /> */}
                            {/* <Route path="/materials" exact component={Materials} /> */}
                            <Route path="/forum" exact component={Forum} />
                            {/* <Route path="/" exact component={Forum} /> */}
                            <Route path="/thread/:id" exact component={Thread} />
                            <Route path="/createPost" exact component={CreateThread} />
                            <Route path="/editThread/:id" exact component={EditThread} />
                            <Route path="/editComment/:id" exact component={EditComment} />
                        </Switch>
                    </Container>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;