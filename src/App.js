
import { Test } from './components/Test';
import { Container } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import { Jumbo } from './components/Jumbotron';
import { Profile } from './components/Profile'
import Deposit from './components/Deposit';
import { Badge } from 'react-bootstrap'
import { useAccount, useEnsName, useBalance } from 'wagmi'
import { trim } from './utils/helpers'
import { useBlockNumber } from 'wagmi'





function App(props) {
    const { data, isError, isLoading } = useAccount({
    })
    const blockNumber = useBlockNumber({
        watch: true,
      })
    const balance = useBalance({
        addressOrName: data?.address,
        watch: true,
    })
    console.log(data)
  return (
    <>
    <Navigation data={data} />
    <Test />
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
