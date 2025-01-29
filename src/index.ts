/**
 * Smart Node Client Types and Interfaces
 * @module @hsuite/client-types
 * @description This module exports all client-related types, interfaces and models used throughout the Smart Node system.
 * It serves as the main entry point for accessing client type definitions and provides a comprehensive type system for the Smart Node client.
 * 
 * @remarks
 * The module includes:
 * - Client interfaces namespace containing configuration and operational interfaces
 * - Client models namespace containing concrete implementations and validation logic
 * - Type-safe configuration options for client setup
 * - Comprehensive API documentation for all exported types
 * 
 * @example
 * ```typescript
 * import { IClient, Client } from '@hsuite/client-types';
 * 
 * // Use interfaces for type safety
 * const options: IClient.IOptions = {
 *   enabled: true,
 *   environment: LedgerId.TESTNET,
 *   operator: {
 *     accountId: "0.0.123456",
 *     privateKey: "302e020100300506032b657004220420..."
 *   },
 *   baseUrl: "https://api.smartnode.example.com"
 * };
 * 
 * // Use models for runtime validation
 * const clientOptions = new Client.Options(
 *   options.environment,
 *   options.operator,
 *   options.baseUrl
 * );
 * ```
 */

export * from './interfaces/client.namespace';
export * from './models/client.namespace';