require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan renew mad erosion inflict end army gather'; 
let testAccounts = [
"0xdc683203e9bbab0ae07a05fbf9846d6dce2627de0f056fba1207438d1638474e",
"0xa95c197892dc691d498491567c334f572c7af2a3076ce93dea4bc1f89ce6024b",
"0xfec46a12638c570cfc5a65bf40bcbf59db3e9bb54d43ec93a97b718ef46aec96",
"0x2d59851608625d8f092a92e2f0ec66d8ce503a6ca6ef25a6482a7499571a4ed0",
"0xef85a10fb9d6cdc6b948dbc8ad546bbe782892ac938ad3e7293a0b2a18b045aa",
"0xcf48fece1a923a68e27819abcd00fd867aa06495bb1b038bc4f56bfdf5c15c53",
"0x14beeb0b22424dd6f3e72578d08fa60cacaf372d5d21f005865611e991a59823",
"0xbed68e7f31cd9913f6703d1034d1e2d81075a44a9af0864ddf1f42a34196607e",
"0x1ace46e4143b3d3fd406b3e0f2ee00779b3f853adc5e107500ecec437b5c4ad5",
"0xee67ca2e8299e9dc0fc3907526b06cc0cd156ddabf2a922fa7e373219897e395"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
