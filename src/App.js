import { WagmiConfig, createClient } from 'wagmi'
import { Test } from './components/Test';
import { Container } from 'react-bootstrap';
import { Navigation } from './components/Navigation';


const client = createClient()

function App() {
  return (
    <WagmiConfig client={client}>
            <Navigation />
        <Container fluid style={styles.mainApp}>
            <Test />
        </Container>
    </WagmiConfig>
  )
}

export default App;

const styles = {
    mainApp: {
        backgroundColor: 'blue',
        height: '100%'
    }
}
