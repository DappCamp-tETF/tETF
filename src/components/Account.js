import { Badge } from 'react-bootstrap'
import { useAccount, useEnsName, useBalance } from 'wagmi'
import { trim } from '../utils/helpers'

export function Account() {
  const { data: accountData } = useAccount()
  const { data: ensNameData } = useEnsName({ address: accountData?.address })
  const {data, balance} = useBalance({
    addressOrName: accountData?.address,
    watch: true,
    // token: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  })

  return (
    <div>
      <Badge pill bg="primary">{accountData ? ensNameData ?? trim(accountData?.address, -36) : ''}</Badge>
      {ensNameData ? ` (${accountData?.address})` : null}
      <Badge pill bg="secondary">{accountData ? trim(data?.formatted, -15) : ''} {data?.symbol}</Badge>
      {console.log(data)}
    </div>
  )
}