import { LedgerId } from "@hashgraph/sdk"
import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IHashgraph } from "@hsuite/hashgraph-types";
import { IClient } from '../../interfaces/client.namespace'

/**
 * Smart Node Client Configuration Options Model
 * 
 * This class provides a concrete implementation of the client configuration options
 * with runtime validation and Swagger/OpenAPI documentation support. It ensures
 * type safety and data validation for all client configuration parameters.
 * 
 * @export
 * @class _Options
 * @implements {IClient.IOptions}
 * @namespace Client.Options
 * @description Defines the configuration options model for initializing and operating
 * a Smart Node client within the system. Includes runtime validation and API documentation.
 * 
 * @remarks
 * Key features:
 * - Runtime validation of all configuration parameters
 * - Swagger/OpenAPI documentation support
 * - Type-safe configuration options
 * - Proper error handling for invalid configurations
 * 
 * @see {@link IClient.IOptions} for the interface definition
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Creating a new client configuration with validation
 * const options = new _Options(
 *   LedgerId.TESTNET,
 *   {
 *     accountId: "0.0.123456",
 *     privateKey: "302e020100300506032b657004220420..."
 *   },
 *   "https://api.smartnode.example.com"
 * );
 * 
 * // The configuration is now validated and ready to use
 * console.log(options.environment); // LedgerId.TESTNET
 * ```
 */
export class _Options implements IClient.IOptions {
    /**
     * Flag indicating if the Smart Node client is enabled
     * 
     * Controls the operational state of the client. When disabled,
     * the client will not process any requests or perform operations.
     * 
     * @type {boolean}
     * @memberof _Options
     * @description Controls whether the Smart Node client is active and processing requests.
     * Use this to temporarily disable client operations without removing the configuration.
     * 
     * @remarks
     * - When true: Client is fully operational
     * - When false: Client is inactive and will not process requests
     * 
     * @default true
     * @since 2.0.0
     */
    @ApiProperty({
        description: 'Flag indicating if the Smart Node client is enabled',
        type: Boolean,
        example: true,
        required: true
    })
    enabled: boolean

    /**
     * The Hashgraph network environment for client operations
     * 
     * Specifies which Hedera Hashgraph network the client should connect to.
     * This setting determines the network context for all operations.
     * 
     * @type {LedgerId}
     * @memberof _Options
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
     */
    @ApiProperty({
        description: 'The Hashgraph network environment',
        type: () => LedgerId,
        example: LedgerId.TESTNET,
        required: true
    })
    environment: LedgerId

    /**
     * The operator account credentials for Smart Node operations
     * 
     * Contains the account information and private key used to sign
     * transactions and pay for network fees.
     * 
     * @type {IHashgraph.IOperator}
     * @memberof _Options
     * @description Contains the necessary credentials and information for the account
     * that will be used to sign and pay for transactions on the Hedera network.
     * 
     * @remarks
     * Security considerations:
     * - Keep private keys secure and never expose them
     * - Use environment variables for sensitive data
     * - Regularly rotate operator credentials
     * - Validate account ID format
     * - Ensure private key is properly encoded
     * 
     * @since 2.0.0
     */
    @ApiProperty({
        description: 'The operator account information for the Smart Node',
        type: () => 'object',
        example: {
            accountId: '0.0.123456',
            privateKey: '302e020100300506032b657004220420...'
        },
        required: true
    })
    operator: IHashgraph.IOperator

    /**
     * The base URL for Smart Node API endpoints
     * 
     * Defines the root URL that will be used as the prefix for all API
     * calls made by the Smart Node client to backend services.
     * 
     * @type {string}
     * @memberof _Options
     * @description Specifies the root URL for all API calls made by the Smart Node client.
     * This ensures consistent endpoint access across all client operations.
     * 
     * @remarks
     * URL requirements:
     * - Must be a valid HTTP/HTTPS URL
     * - Should include protocol (http:// or https://)
     * - May include port number if needed
     * - Should not end with a trailing slash
     * - Must be accessible from the client's network
     * 
     * @since 2.0.0
     */
    @ApiProperty({
        description: 'The base URL for API endpoints used by the Smart Node client',
        type: () => String,
        example: 'https://api.smartnode.example.com',
        required: true
    })
    baseUrl: string

    /**
     * Creates an instance of _Options with runtime validation
     * 
     * Initializes a new Smart Node client configuration with the provided parameters.
     * Performs comprehensive validation on all inputs to ensure data integrity and
     * proper configuration.
     * 
     * @param {LedgerId} environment - The Hashgraph network environment to connect to
     * @param {IHashgraph.IOperator} operator - The operator account credentials
     * @param {string} baseUrl - The base URL for API endpoints
     * 
     * @throws {Error} If operator is not a valid object with required properties
     * @throws {Error} If baseUrl is not a valid HTTP(S) URL
     * 
     * @remarks
     * Validation rules:
     * - Environment must be a valid LedgerId value
     * - Operator must be a valid object with accountId and privateKey
     * - BaseUrl must be a valid HTTP(S) URL
     * 
     * @example
     * ```typescript
     * // Create a new configuration with validation
     * const options = new _Options(
     *   LedgerId.TESTNET,
     *   {
     *     accountId: "0.0.123456",
     *     privateKey: "302e020100300506032b657004220420..."
     *   },
     *   "https://api.smartnode.example.com"
     * );
     * ```
     */
    constructor(environment: LedgerId, operator: IHashgraph.IOperator, baseUrl: string) {
        this.environment = environment

        if (!operator || typeof operator !== 'object') {
            throw new Error('Invalid operator information')
        }        
        this.operator = operator

        if (!baseUrl || typeof baseUrl !== 'string' || !baseUrl.startsWith('http')) {
            throw new Error('Invalid base URL')
        }
        this.baseUrl = baseUrl
    }
}