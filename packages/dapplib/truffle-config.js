require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name return machine exchange grace slender forget general'; 
let testAccounts = [
"0x7c047b87a991f6c9b640ccfe1afe120e885189948e09b4af360b588d014909b4",
"0xa0f7ed4ae1e5859665652d5ac5189305b5e594d39e1ce5493ba6332b9320d108",
"0x5c981143aa125efc626a302a60b41c50efaa808995df282e4cfb0046baf7eb3b",
"0x98a61e0d1d28d06881640fb80372a6b7c2224739c6764c15b2ff69df827cc41c",
"0x18f463657713a78cf8d50fe1294af3a719c04c773c2f7843e227cd13e8b5a28f",
"0x11dea8b75c2b045d85a0ea1f8766bf0d4ad7e17f3875063d395bebef1f7fd71b",
"0x5a44202dd50a30eeb78a12ad2a317fd9ecaef14133b3532b2a57778edeb14126",
"0xaa9c45fab93ec1e77a01e558138413d7afa23f05db245a932c44ca54fd6daa3d",
"0x01ccfea6ee090cfd46c3ec48ef38927d0ee83a0011f689b89e894b60b9d26611",
"0x5d2fa93c3993345bdf5fe184e18034130fbb1ca96ea1320f6d793fe406368e1c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

