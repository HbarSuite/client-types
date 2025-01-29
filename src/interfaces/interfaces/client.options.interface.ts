import { LedgerId } from "@hashgraph/sdk"
import { IHashgraph } from "@hsuite/hashgraph-types";

/**
 * Interface for Smart Node Client Configuration Options
 * @export
 * @interface _IOptions
 * @namespace IClient._IOptions
 * @description Defines the configuration options for initializing and operating a Smart Node client within the system.
 * This interface provides type-safe configuration options for client setup and operation.
 * 
 * @remarks
 * Key configuration aspects:
 * - Client operational state management
 * - Network environment selection
 * - Operator credentials and authentication
 * - API endpoint configuration
 * 
 * @see {@link Client.Options} for the concrete implementation with runtime validation
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const options: _IOptions = {
 *   enabled: true,
 *   environment: LedgerId.TESTNET,
 *   operator: {
 *     accountId: "0.0.123456",
 *     privateKey: "302e020100300506032b657004220420..."
 *   },
 *   baseUrl: "https://api.smartnode.example.com"
 * };
 * ```
 */
export interface _IOptions {
    /**
     * Flag indicating if the Smart Node client is enabled
     * 
     * Controls the operational state of the client. When disabled,
     * the client will not process any requests or perform operations.
     * 
     * @type {boolean}
     * @memberof _IOptions
     * @description Controls whether the Smart Node client is active and processing requests.
     * Use this to temporarily disable client operations without removing the configuration.
     * 
     * @remarks
     * - When true: Client is fully operational
     * - When false: Client is inactive and will not process requests
     * 
     * @since 2.0.0
     * @example
     * ```typescript
     * enabled: true // Client is active and processing requests
     * ```
     */
    enabled: boolean

    /**
     * The Hashgraph network environment for client operations
     * 
     * Specifies which Hedera Hashgraph network the client should connect to.
     * This setting determines the network context for all operations.
     * 
     * @type {LedgerId}
     * @memberof _IOptions
     * @description Specifies the Hashgraph network to connect to (e.g., mainnet, testnet, previewnet).
     * This setting is crucial for determining transaction costs and network behavior.
     * 
     * @remarks
     * Available environments:
     * - MAINNET: Production network with real HBAR
     * - TESTNET: Test network with test HBAR
     * - PREVIEWNET: Preview network for testing new features
     * 
     * @since 2.0.0
     * @example
     * ```typescript
     * environment: LedgerId.TESTNET // Connect to Hedera Testnet
     * ```
     */
    environment: LedgerId

    /**
     * The operator account credentials for Smart Node operations
     * 
     * Contains the account information and private key used to sign
     * transactions and pay for network fees.
     * 
     * @type {IHashgraph.IOperator}
     * @memberof _IOptions
     * @description Contains the necessary credentials and information for the account
     * that will be used to sign and pay for transactions on the Hedera network.
     * 
     * @remarks
     * Security considerations:
     * - Keep private keys secure and never expose them
     * - Use environment variables for sensitive data
     * - Regularly rotate operator credentials
     * 
     * @since 2.0.0
     * @example
     * ```typescript
     * operator: {
     *   accountId: "0.0.123456", // Hedera account ID
     *   privateKey: "302e020100300506032b657004220420..." // Private key for signing
     * }
     * ```
     */
    operator: IHashgraph.IOperator

    /**
     * The base URL for Smart Node API endpoints
     * 
     * Defines the root URL that will be used as the prefix for all API
     * calls made by the Smart Node client to backend services.
     * 
     * @type {string}
     * @memberof _IOptions
     * @description Specifies the root URL for all API calls made by the Smart Node client.
     * This ensures consistent endpoint access across all client operations.
     * 
     * @remarks
     * URL requirements:
     * - Must be a valid HTTP/HTTPS URL
     * - Should include protocol (http:// or https://)
     * - May include port number if needed
     * - Should not end with a trailing slash
     * 
     * @since 2.0.0
     * @example
     * ```typescript
     * baseUrl: "https://api.smartnode.example.com"
     * ```
     */
    baseUrl: string
}