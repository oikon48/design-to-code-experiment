# Design to Code Experiment

An experimental project to convert Figma designs into code. This project compares and validates implementations using multiple tools and approaches.

## Overview

This project retrieves Figma design nodes and implements them using three different tools:

- **Claude Code + MCP** - Implementation leveraging Claude and Model Context Protocol
- **Codex + MCP** - Implementation combining Codex with MCP
- **Kombai** - Implementation using Kombai (in preparation)

## Project Structure

```
design-to-code-experiment/
├── claude+mcp/          # Claude Code + MCP implementation
│   └── picto-portfolio/ # Next.js + React + Tailwind CSS
├── codex+mcp/           # Codex + MCP implementation
│   └── app/             # Next.js + React
├── kombai/              # Kombai implementation (in preparation)
└── codex+mcp-bk/        # Backup
```

## Implementation Details

### Claude Code + MCP (`claude+mcp/picto-portfolio`)

- **Framework**: Next.js 15.1.4
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Main Features**:
  - Hero section
  - Portfolio section
  - Blog section
  - Stats & Testimonials
  - Contact form
  - Multiple other components

#### Getting Started

```bash
cd claude+mcp/picto-portfolio
npm install
npm run dev
```

### Codex + MCP (`codex+mcp`)

- **Framework**: Next.js 14.1.4
- **UI**: React 18
- **Language**: TypeScript
- **Main Features**:
  - Header
  - Hero section
  - About section
  - Services section
  - Process section

#### Getting Started

```bash
cd codex+mcp
npm install
npm run dev
```

### Kombai (`kombai`)

In preparation

## Experiment Objectives

1. **Accuracy Comparison**: How accurately each tool can convert Figma designs into code
2. **Efficiency Evaluation**: Differences in implementation time and process
3. **Code Quality**: Readability, maintainability, and adherence to best practices of generated code
4. **Workflow Validation**: Usability of each tool's development workflow

## Tech Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS, CSS Modules
- **Language**: TypeScript
- **Package Manager**: npm

## License

This is an experimental project intended for private use only.
