export const DEFAULT_MAIN_CHAINS = [
	"chia:mainnet",
];

export const DEFAULT_TEST_CHAINS = [
	"chia:testnet"
];

export const DEFAULT_LOGGER = "debug";

export enum CHIA_METHODS {
	CHIA_LOG_IN = "chia_logIn",
	CHIA_GET_WALLETS = "chia_getWallets",
	CHIA_GET_WALLET_BALANCE = "chia_getWalletBalance",
	CHIA_GET_CURRENT_ADDRESS = "chia_getCurrentAddress",
	CHIA_SEND_TRANSACTION = "chia_sendTransaction",
	CHIA_SIGN_MESSAGE_BY_ID = "chia_signMessageById",
	CHIA_SIGN_MESSAGE_BY_ADDRESS = "chia_signMessageByAddress",
	CHIA_GET_NEXT_ADDRESS = "chia_getNextAddress",
	CHIA_GET_SYNC_STATUS = "chia_getSyncStatus",
	CHIA_GET_ALL_OFFERS = "chia_getAllOffers",
	CHIA_GET_OFFERS_COUNT = "chia_getOffersCount",
	CHIA_CREATE_OFFER_FOR_IDS = "chia_createOfferForIds",
	CHIA_CANCEL_OFFER = "chia_cancelOffer",
	CHIA_CHECK_OFFER_VALIDITY = "chia_checkOfferValidity",
	CHIA_TAKE_OFFER = "chia_takeOffer",
	CHIA_GET_OFFER_SUMMARY = "chia_getOfferSummary",
	CHIA_GET_OFFER_DATA = "chia_getOfferData",
	CHIA_GET_OFFER_RECORD = "chia_getOfferRecord",
	CHIA_CREATE_NEW_CAT_WALLET = "chia_createNewCATWallet",
	CHIA_GET_CAT_ASSET_ID = "chia_getCATAssetId",
	CHIA_SPEND_CAT = "chia_spendCAT",
	CHIA_ADD_CAT_TOKEN = "chia_addCATToken",
	CHIA_GET_NFTS = "chia_getNFTs",
	CHIA_GET_NFT_INFO = "chia_getNFTInfo",
	CHIA_TRANSFER_NFT = "chia_transferNFT"
}

export enum CHIA_EVENTS {}


type RelayerType = {
	value: string | undefined;
	label: string;
};

export const DEFAULT_RELAY_URL = 'wss://relay.walletconnect.com';

export const REGIONALIZED_RELAYER_ENDPOINTS: RelayerType[] = [
	{
		value: DEFAULT_RELAY_URL,
		label: "Default",
	},
	{
		value: "wss://us-east-1.relay.walletconnect.com/",
		label: "US",
	},
	{
		value: "wss://eu-central-1.relay.walletconnect.com/",
		label: "EU",
	},
	{
		value: "wss://ap-southeast-1.relay.walletconnect.com/",
		label: "Asia Pacific",
	},
];
