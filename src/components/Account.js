// import { Badge } from 'react-bootstrap'
// import { useAccount, useEnsName, useBalance } from 'wagmi'
// import { trim } from '../utils/helpers'
// import { useBlockNumber } from 'wagmi'


// export function Account() {
//     const { data, isError, isLoading } = useAccount({
//         suspense: true,
//     })
//     const blockNumber = useBlockNumber({
//         watch: true,
//       })
//     const balance = useBalance({
//         addressOrName: data?.address,
//         watch: true,
//     })
//     //   console.log(balance.data.formatted)
//   if (isLoading) return <div>Loading account…</div>
//   if (isError) return <div>Error loading account</div>
//   return(
//       <div>
//     {data?.address && <Badge pill bg='primary'> {trim(data?.address, -36)}</Badge>}
//     {/* {balance.data.formatted && <Badge pill bg='primary'> {trim(balance.data.formatted, -15)} {balance.data.symbol}</Badge>} */}

//     {blockNumber.data}
//     </div>
//   ) 

// }

//{balance.data.formatted} {balance.data.symbol}