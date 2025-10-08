# Design to Code Experiment

An experimental project to convert Figma designs into code. This project compares and validates implementations using multiple tools and approaches.

## Overview

This project retrieves Figma design nodes and implements them using three different tools:

- **Claude Code + MCP** - Implementation leveraging Claude and Model Context Protocol
- **Codex + MCP** - Implementation combining Codex with MCP
- **Kombai** - Implementation using Kombai

## Project Structure

```
design-to-code-experiment/
├── claude+mcp/          # Claude Code + MCP implementation
│   └── picto-portfolio/ # Next.js + React + Tailwind CSS
├── codex+mcp/           # Codex + MCP implementation
│   └── app/             # Next.js + React
├── kombai/              # Kombai implementation
│                        # Vite + React + MUI
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

- **Build Tool**: Vite 6.2.0
- **UI**: React 19
- **Styling**: Material-UI (MUI) 7.3.4
- **State Management**: Redux Toolkit
- **Routing**: React Router 7.9.3
- **Language**: TypeScript
- **Main Features**:
  - Navigation component
  - Portfolio page
  - Blog cards
  - Project cards
  - Service cards
  - Stats cards
  - Work process cards
  - Contact info components

#### Getting Started

```bash
cd kombai
npm install
npm run dev
```

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
