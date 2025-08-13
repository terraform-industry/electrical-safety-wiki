# Terraform Industries - Electrical Safety Wiki

<!-- markdownlint-disable MD013 -->

[![Deploy MkDocs](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/deploy-docs.yml) [![Markdown Lint](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/terraform-industry/electrical-safety-wiki/actions/workflows/markdown-lint.yml) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)](https://terraform-industry.github.io/electrical-safety-wiki/) [![License: Dual](https://img.shields.io/badge/License-CC%20BY--SA%204.0%20%2F%20MIT-blue.svg)](#license-and-author)

<!-- markdownlint-enable MD013 -->

A comprehensive electrical safety training and competency testing repository
for Terraform Industries. This wiki provides essential safety training
materials to keep you and your coworkers safe from burns, electric shock,
and death.

## Live Site

<!-- markdownlint-disable MD013 -->

**🔗 [Visit the Electrical Safety Wiki](https://terraform-industry.github.io/electrical-safety-wiki/)**

Take the competency test at:
[/competency-test/](https://terraform-industry.github.io/electrical-safety-wiki/competency-test/)

<!-- markdownlint-enable MD013 -->

## Features

- **MkDocs Material Theme Wiki** - Modern, responsive documentation site
  with dark/light mode support
- **Comprehensive Safety Training** - Structured electrical safety materials
  covering fundamentals, procedures, and emergency response
- **Interactive Competency Test** - Web-based certification system with
  immediate feedback and results
- **QR Code Generator** - An easy access tool for off-line sharing of the
  competency test link, just print and post-up in a public area
- **Rich Media Content** - Educational videos and diagrams for hazard
  identification and safety demonstrations
- **Mobile-Friendly** - Accessible on all devices for field reference

## Development

### Prerequisites

 <!-- markdownlint-disable MD013 -->

- <img src="docs/media/nix_logo.png" alt="Nix Foundation Logo" height="24" style="vertical-align: middle;"> [NixOS, or Nix Package Manager](https://nixos.org/download.html) for a system agnostic reproducible
development environment
<!-- markdownlint-enable MD013 -->

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
  accurate and follow know industry standards & best practices
- **Clear Documentation**: Use simple, clear language accessible to all
  skill levels
- **Visual Learning**: Include diagrams and images to illustrate concepts

### Development Workflow

1. **Quality Assurance**: Run `make lint` before committing to ensure
   markdown formatting standards are met
2. **Testing**: Verify changes work correctly with `make serve` for local
   testing
3. **Git Hooks**: Pre-commit hooks automatically check formatting and
   style compliance

### Markdown Standards

<!-- markdownlint-disable MD013 -->

This project enforces strict markdown formatting via [`markdownlint-cli2`](https://github.com/DavidAnson/markdownlint-cli2).
Common requirements:

<!-- markdownlint-enable MD013 -->

- Line length limit of 80 characters
- Consistent heading styles, hierarchy & spacing
- Proper list formatting
- No trailing whitespace

## License and Author

<!-- markdownlint-disable MD013 -->

This project uses a **dual licensing** approach to accommodate different types
of content:

### Content License (CC BY-SA 4.0)

All **educational content** including text, graphics, audio, video, and
documentation is licensed under the
[Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

### Code License (MIT)

All **software and machine code** including HTML, CSS, JavaScript, Python,
configuration files, and build scripts are licensed under the
[MIT License](https://opensource.org/licenses/MIT).

**Authors**: Johanness A. Nilsson [@JoNilsson](https://github.com/JoNilsson) / Xavier D.  
**Org**: [Terraform Industries](https://github.com/terraformindustries)  
**Contact**: <johanness.nilsson@terraformindustries.com>

<!-- markdownlint-enable MD013 -->

---

**⚠️ DISCLAIMER**: This training material is for educational purposes only.
Always follow your organization's specific safety procedures and consult
with certified professionals for electrical work.
