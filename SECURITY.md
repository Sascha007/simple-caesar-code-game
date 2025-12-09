# Security Policy

## Supported Versions

This project is currently in active development. We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |
| 0.0.x   | :white_check_mark: |

As the project matures and formal releases are made, this table will be updated to reflect which versions receive security updates.

## Reporting a Vulnerability

We take the security of Caesar Quest seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **Do not** open a public issue for security vulnerabilities
2. Email the project maintainer directly through GitHub's private vulnerability reporting feature:
   - Go to the [Security tab](https://github.com/Sascha007/simple-caesar-code-game/security) of this repository
   - Click on "Report a vulnerability"
   - Fill in the details of the vulnerability

Alternatively, you can open a private security advisory.

### What to Include

Please provide the following information in your report:

- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Any suggested fixes or mitigations (if you have them)
- Your contact information for follow-up questions

### What to Expect

- **Acknowledgment**: You will receive an acknowledgment of your report within 48 hours
- **Updates**: We will provide updates on the status of your report at least once every 7 days
- **Resolution**: We aim to resolve critical vulnerabilities within 30 days
- **Disclosure**: Once a fix is deployed, we will coordinate with you on public disclosure timing

### Security Considerations for This Project

Caesar Quest is a client-side web application for educational purposes. While the Caesar cipher itself is not secure for real-world cryptography, we still take security seriously:

- **Input Validation**: All user inputs are sanitized to prevent XSS attacks
- **Dependencies**: We regularly update dependencies to patch known vulnerabilities
- **No Sensitive Data**: The application does not collect, store, or transmit any user data
- **Client-Side Only**: All processing happens in the browser; no backend services are involved

### Scope

The following are **in scope** for security reports:

- Cross-Site Scripting (XSS) vulnerabilities
- Dependency vulnerabilities in production code
- Security misconfigurations that could affect users
- Any vulnerability that could compromise the integrity of the application

The following are **out of scope**:

- Theoretical weaknesses of the Caesar cipher algorithm (this is educational content)
- Issues in development dependencies that do not affect production builds
- Social engineering attacks
- Denial of Service (DoS) attacks on the static hosting

## Acknowledgments

We appreciate the security research community's efforts to keep open source projects safe. Security researchers who responsibly disclose vulnerabilities will be acknowledged in our release notes (unless they prefer to remain anonymous).
