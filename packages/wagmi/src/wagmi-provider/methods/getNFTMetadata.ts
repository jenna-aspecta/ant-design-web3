import { fillAddressWith0x, requestWeb3Asset, type NFTMetadata } from '@ant-design/web3-common';
import { readContract } from '@wagmi/core';
import type { Config } from 'wagmi';

export async function getNFTMetadata(
  config: Config,
  address: string,
  tokenId: bigint,
  chainId?: number,
): Promise<NFTMetadata> {
  const tokenURI = await readContract(config as any, {
    address: fillAddressWith0x(address),
    args: [tokenId],
    chainId,
    abi: [
      {
        name: 'tokenURI',
        inputs: [
          {
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        outputs: [{ name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'tokenURI',
  });
  const metaInfo = await requestWeb3Asset(tokenURI as string);
  return metaInfo;
}
