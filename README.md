# @hsuite/client-types

A comprehensive type system and validation library for Smart Node client operations. This library provides type definitions, interfaces, and runtime validation for client configuration and operations within the Smart Node ecosystem.

## Installation

```bash
npm install @hsuite/client-types
```

## Features

- Type-safe client configuration interfaces
- Runtime validation for client options
- Swagger/OpenAPI documentation support
- Comprehensive API documentation
- Proper error handling for invalid configurations

## Dependencies

### Peer Dependencies
- @nestjs/common: ^10.4.2
- @nestjs/core: ^10.4.2

### Dependencies
- @hsuite/hashgraph-types: 2.0.0
- @hsuite/nestjs-swagger: 2.0.0

## Usage

### Basic Configuration

```typescript
import { IClient, Client } from '@hsuite/client-types';

// Using interfaces for type safety
const options: IClient.IOptions = {
  enabled: true,
  environment: LedgerId.TESTNET,
  operator: {
    accountId: "0.0.123456",
    privateKey: "302e020100300506032b657004220420..."
  },
  baseUrl: "https://api.smartnode.example.com"
};

// Using models for runtime validation
const clientOptions = new Client.Options(
  options.environment,
  options.operator,
  options.baseUrl
);
```

## API Documentation

### IClient Namespace

The `IClient` namespace provides interfaces and types for client operations:

- `IOptions`: Configuration interface for client setup
  - `enabled`: Client enablement flag
  - `environment`: Network environment selection
  - `operator`: Operator credentials
  - `baseUrl`: API endpoint configuration

### Client Namespace

The `Client` namespace provides concrete implementations with runtime validation:

- `Options`: Class extending `_Options` with runtime validation
  - Validates all configuration parameters
  - Provides type-safe instantiation
  - Includes Swagger/OpenAPI documentation

## Development

### Documentation Generation

Generate documentation using Compodoc:

```bash
npm run compodoc
```

Check documentation coverage:

```bash
npm run compodoc:coverage
```

## Version

Current version: 2.0.0

## License

This package is part of the HSuite Enterprise ecosystem.

---

<p align="center">
  Built with ❤️ by the HbarSuite Team<br>
  Copyright © 2024 HbarSuite. All rights reserved.
</p>