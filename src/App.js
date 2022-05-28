import { useAccount } from 'wagmi'

import { Test } from './components/Test';
import { Container } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import { Jumbo } from './components/Jumbotron';


function App() {
  return (
    <>
            <Navigation />
        <Container fluid style={styles.mainApp}>
            <Jumbo />
            <Test />
        </Container>
    </>
  )
}

export default App;

const styles = {
    mainApp: {
        backgroundColor: 'blue',
        height: '100%'
    }
}
