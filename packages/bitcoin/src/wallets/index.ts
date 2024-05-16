/**
 * wallets 是将 adapter 与钱包静态信息一起封装
 */
import { metadata_Unisat, metadata_Xverse } from '@ant-design/web3-assets';

import { UnisatBitcoinWallet, XverseBitcoinWallet } from '../adapter';
import { WalletFactory } from './factory';

export const UnisatWallet = () => WalletFactory(UnisatBitcoinWallet, metadata_Unisat);
export const XverseWallet = () => WalletFactory(XverseBitcoinWallet, metadata_Xverse);
