import { _IOptions } from './interfaces/client.options.interface';

/**
 * Client Interface Namespace for Smart Node Operations
 * @export
 * @namespace IClient
 * @description This namespace encapsulates interfaces and types related to client operations within the Smart Node system.
 * It provides a centralized location for client-related type definitions, ensuring type safety and consistency across the application.
 * 
 * @remarks
 * The namespace includes:
 * - Type definitions for client configuration ({@link IOptions})
 * - Interface declarations for client operations
 * - Type-safe operator and environment configurations
 * 
 * @see {@link Client} for concrete implementations
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Using the IClient namespace for type-safe configuration
 * const clientOptions: IClient.IOptions = {
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
export namespace IClient {
    /**
     * Options interface for client configuration
     * @type {_IOptions}
     * @description Represents the configuration options available for client setup and operation.
     * This type is imported from the options interface file, providing a comprehensive set of
     * type-safe configuration options for the Smart Node client.
     * 
     * @remarks
     * The options interface includes:
     * - Client enablement flag
     * - Network environment selection
     * - Operator credentials
     * - API endpoint configuration
     * 
     * @see {@link _IOptions} for detailed property documentation
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * const options: IOptions = {
     *   enabled: true,
     *   environment: LedgerId.MAINNET,
     *   operator: {
     *     accountId: "0.0.789012",
     *     privateKey: "302e020100300506032b657004220420..."
     *   },
     *   baseUrl: "https://production-api.smartnode.com"
     * };
     * ```
     */
    export type IOptions = _IOptions;
}