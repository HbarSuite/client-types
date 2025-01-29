import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Options } from './models/client.models.options.model';

/**
 * Client Models Namespace for Smart Node Operations
 * 
 * This namespace provides concrete implementations of client-related interfaces and types
 * for the Smart Node system. It includes runtime validation and type-safe instantiation
 * of client configuration objects.
 * 
 * @export
 * @namespace Client
 * @description This namespace encapsulates concrete implementations of interfaces and types
 * related to client operations within the Smart Node system. It provides runtime validation
 * and type-safe instantiation of client configuration objects.
 * 
 * @remarks
 * The namespace includes:
 * - Options class with runtime validation ({@link Options})
 * - Type-safe model implementations
 * - Swagger/OpenAPI decorators for API documentation
 * 
 * @see {@link IClient} for interface definitions
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Creating a type-safe client configuration with runtime validation
 * const clientOptions = new Client.Options(
 *   LedgerId.TESTNET,
 *   {
 *     accountId: "0.0.123456",
 *     privateKey: "302e020100300506032b657004220420..."
 *   },
 *   "https://api.smartnode.example.com"
 * );
 * ```
 */
export namespace Client {
    /**
     * Options class for client configuration with runtime validation
     * 
     * This class provides a type-safe way to configure and validate Smart Node client options
     * at runtime. It includes comprehensive validation of all configuration parameters
     * and proper Swagger/OpenAPI documentation.
     * 
     * @class
     * @extends {_Options}
     * @description Represents the configuration options for client setup and operation with runtime validation.
     * This class extends the _Options class, providing type safety and runtime validation of all configuration parameters.
     * 
     * @remarks
     * Key features:
     * - Runtime validation of all configuration parameters
     * - Type-safe instantiation
     * - Swagger/OpenAPI documentation
     * - Proper error handling for invalid configurations
     * 
     * @example
     * ```typescript
     * // Creating a new Options instance with runtime validation
     * const clientOptions = new Client.Options(
     *   LedgerId.TESTNET,
     *   {
     *     accountId: "0.0.123456",
     *     privateKey: "302e020100300506032b657004220420..."
     *   },
     *   "https://api.smartnode.example.com"
     * );
     * 
     * // The instance will have proper type information and runtime validation
     * console.log(clientOptions.environment); // LedgerId.TESTNET
     * console.log(clientOptions.operator.accountId); // "0.0.123456"
     * ```
     * 
     * @see {@link IClient.IOptions} for the interface definition
     * @see {@link _Options} for the base implementation
     */
    @ApiSchema({ name: 'Client.Options' })
    export class Options extends _Options {}
}