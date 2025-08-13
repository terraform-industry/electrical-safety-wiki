# Electrical Safety Wiki

[![Deploy MkDocs](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/deploy-docs.yml) [![Markdown Lint](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/markdown-lint.yml) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)](https://terraform-industry.github.io/electrical-safety-wiki/) [![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

A comprehensive electrical safety training and competency testing repository
for Terraform Industries. This wiki provides essential safety training
materials to keep you and your coworkers safe from burns, electric shock,
and death.

## Live Site

**🔗 [Visit the Electrical Safety Wiki](https://terraform-industry.github.io/electrical-safety-wiki/)**

Take the competency test at:
[/competency-test/](https://terraform-industry.github.io/electrical-safety-wiki/competency-test/)

## Features

- **MkDocs Material Theme Wiki** - Modern, responsive documentation site
  with dark/light mode support
- **Comprehensive Safety Training** - Structured electrical safety materials
  covering fundamentals, procedures, and emergency response
- **Interactive Competency Test** - Web-based certification system with
  immediate feedback and results
- **QR Code Generator** - Easy access tool for sharing test links
- **Rich Media Content** - Educational videos and diagrams for hazard
  identification and safety demonstrations
- **Mobile-Friendly** - Accessible on all devices for field reference

## Development

### Prerequisites

- <img src="docs/media/nix_logo.png" alt="Nix" height="16" style="vertical-align: middle;"> [NixOS, or Nix Package Manager](https://nixos.org/download.html) for reproducible
  development environment

### Quick Start

```sh
# Enter development environment with all dependencies
nix develop

# Start local development server at http://localhost:8000
make serve

# Check markdown formatting and style
make lint

# Auto-fix markdown issues
make lint-fix

# Build the complete site
make build
```

### Available Commands

```sh
make help       # Show all available commands
make dev        # Enter Nix development shell
make serve      # Start MkDocs development server
make build      # Build documentation site
make lint       # Check markdown files for issues
make lint-fix   # Auto-fix markdown formatting
make clean      # Clean build artifacts
make install    # Install Python dependencies manually
```

## Repository Structure

```sh
├── docs/                    # Wiki content and pages
│   ├── competency-test/     # Interactive test system
│   ├── fundamentals/        # Basic electrical safety concepts
│   ├── procedures/          # Safety procedures and protocols
│   ├── emergency/           # Emergency response and certification
│   └── media/               # Images, videos, and diagrams
├── media/                   # Source media files
├── site/                    # Generated static site (build output)
├── .github/workflows/       # CI/CD automation
├── mkdocs.yml              # Site configuration
├── Makefile                # Development commands
├── flake.nix               # Nix development environment
└── requirements.txt        # Python dependencies
```

## Contributing

### Content Guidelines

- **Safety First**: All electrical safety content must be technically
  accurate and follow industry standards
- **Clear Documentation**: Use simple, clear language accessible to all
  skill levels
- **Visual Learning**: Include diagrams and images to illustrate concepts

### Development Workflow

1. **Quality Assurance**: Run `make lint` before committing to ensure
   markdown formatting standards
2. **Testing**: Verify changes work correctly with `make serve` for local
   testing
3. **Git Hooks**: Pre-commit hooks automatically check formatting and
   style compliance

### Markdown Standards

This project enforces strict markdown formatting via markdownlint-cli2.
Common requirements:

- Line length limit of 80 characters
- Consistent heading styles
- Proper list formatting
- No trailing whitespace

## License and Author

This work is licensed under the
[Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

**Author**: Johanness A. Nilsson  
**Org**: [Terraform Industries](https://github.com/terraformindustries)  
**Contact**: <johanness.nilsson@terraformindustries.com>

---

**⚠️ DISCLAIMER**: This training material is for educational purposes only.
Always follow your organization's specific safety procedures and consult
with certified professionals for electrical work.
