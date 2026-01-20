# Changelog

## [1.3.1] - 2026-01-20

### Added

- Git initialization support and a confirmation prompt for initializing a git repository.
- PACKAGE_MANAGER_CHOICES option for selecting package manager during project creation.

### Changed

- Refactored project generation flow to enhance template extraction and dynamic config handling.
- extractTemplate now uses a temporary directory for extraction and has improved error handling.
- collectAnswers updated to include package manager choices and better dynamic prompts.

### Fixed

- Resolved extraction-related crashes and improved robustness of async validation/error paths.

### Removed

- Removed unused inquirer dependency.

## [1.3.0] - 2026-01-17

### Added

- Input validators for name, version, and other prompt fields to ensure proper formatting and prevent invalid values.
- A directory‑existence validator to avoid overwriting an existing project folder.
- Error‑handling logic using try + catch blocks to gracefully capture and report failures during project generation.

### Changed

- Refactored the Inquirer prompt flow to use a new logic structure for collecting user responses.
- Improved the internal prompt sequence to make the question flow more consistent and modular.

### Removed

- Previous prompt-handling logic that relied on the old response‑collection approach.

## [1.2.0] - 2026-01-15

### Added

- Support for Angular, Vue.

### Changed

- SuccessMSG updated for support new Templates.

## [1.1.0] - 2025-1-08

- Initial version with support for React and NextJS.
