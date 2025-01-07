# Static Website with Vite, Playwright, and Cucumber

This repository demonstrates a simple and efficient solution for building, testing, and deploying a **static website** built with **Vite**. The pipeline integrates **Playwright with Cucumber** for E2E testing, automates linting, unit testing, and builds with **GitHub Actions**, and deploys the site directly to **GitHub Pages**.

---

## Key Features of the GitHub Actions Pipeline

### 🚀 **Build, Test, and Deploy Workflow**

The pipeline automates all critical stages of static website development, including:

1. **Linting**:

   - Ensures code quality and enforces coding standards using `eslint`.
   - Simple execution via `npm run lint`.

2. **Unit Testing**:

   - Executes lightweight, fast tests for core functionality using `npm run unit-test`.
   - Uploads detailed **unit test reports** as artifacts for review.

3. **E2E Testing with Playwright and Cucumber**:

   - Runs comprehensive **end-to-end tests** using **Playwright** with the **Cucumber** framework.
   - Simulates real user interactions to validate the website's behavior.
   - Saves **E2E test reports** as artifacts for troubleshooting and transparency.

4. **Static Website Build**:

   - Builds an optimized production-ready static website using **Vite** with `npm run build`.
   - Ensures a fast and modern web experience.

5. **Deployment to GitHub Pages**:
   - Automatically deploys the built static site to GitHub Pages.
   - Live website available at: **[https://tstefann.github.io/Vite-Playwright/](https://tstefann.github.io/Vite-Playwright/)**.

---

### 🛠️ **Key Technologies**

- **Vite**: Lightning-fast bundler and development server optimized for modern JavaScript frameworks.
- **Playwright + Cucumber**: Powerful combination for writing behavior-driven end-to-end tests.
- **GitHub Actions**: Orchestrates the entire workflow for linting, testing, building, and deploying.
- **GitHub Pages**: Seamlessly hosts the static website.

---

## Pipeline Overview

### **Trigger Events**

- **Push to `main` branch**: Automatically executes the workflow.
- **Pull Requests**: Runs the pipeline for PR events (e.g., synchronize and closed).

### **Workflow Steps**

#### **1. Linting**

- Ensures clean and consistent code.
- Command: `npm run lint`.

#### **2. Unit Tests**

- Validates core functionality with unit tests.
- Command: `npm run unit-test`.
- Test reports are uploaded as artifacts for easy access.

#### **3. E2E Testing**

- Simulates real-world user interactions using Playwright and Cucumber.
- Command: `npm run e2e-test`.
- Test reports are saved as artifacts for troubleshooting.

#### **4. Build**

- Builds a production-ready static site using Vite.
- Command: `npm run build`.

#### **5. Deploy**

- Deploys the site to GitHub Pages, making it publicly accessible.

---

## Artifacts

The pipeline uploads test reports as artifacts for transparency and debugging:

1. **Unit Test Report**:

   - File: `unit-test-report.json`.
   - Contains detailed results of the unit tests.

2. **E2E Test Report**:
   - Directory: `e2e-tests/Reports`.

---

## Benefits of This Pipeline

- **Simplicity**: A minimal yet complete solution for linting, testing, building, and deploying a static website.
- **Transparency**: Stores unit test and E2E test reports as artifacts, ensuring visibility into testing results.
- **Modern Tooling**: Combines the speed of Vite with the power of Playwright and Cucumber for a high-quality developer experience.
- **Automation**: GitHub Actions handles everything from code validation to deployment, reducing manual intervention.
- **Seamless Deployment**: Deploys directly to GitHub Pages with no additional configuration.

---

## Live Website

👉 https://tstefann.github.io/Vite-Playwright/
