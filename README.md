# Uday Kumar's Portfolio
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/udaykumar12352/my-portfolio)

This repository contains the source code for my personal portfolio website. It's a fully responsive single-page application built with modern web technologies to showcase my skills, projects, and professional experience as a Computer Science student.

## Features

-   **Dynamic Hero Section**: An engaging introduction with a typewriter effect for different roles.
-   **Five Distinct Sections**: Includes Home, About, Projects, Resume, and Contact sections with smooth-scrolling navigation.
-   **Featured Projects**: A dedicated section to display key projects with descriptions, technologies used, and direct links to their GitHub repositories.
-   **Interactive Resume**: Summarizes professional experience, education, and certifications, complete with a button to download the full resume PDF.
-   **Technical Skills Showcase**: Neatly organized skills display, categorized by Frontend, Backend, Database, and Programming Languages.
-   **Contact Form**: An integrated contact form for easy communication.
-   **Dark/Light Mode**: A theme toggler for user preference, with styles persisting across sessions.
-   **Responsive Design**: A fluid layout that adapts seamlessly to all screen sizes, from mobile to desktop.
-   **Modern UI**: Built with a comprehensive set of UI components from shadcn/ui and styled with Tailwind CSS.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [React](https://react.dev/) (with JSX), [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Forms**: [React Hook Form](https://react-hook-form.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) (via shadcn/ui) & Custom CSS

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v18 or later)
-   pnpm (or your preferred package manager)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/udaykumar12352/my-portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd my-portfolio
    ```

3.  **Install the dependencies:**
    ```bash
    pnpm install
    ```

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The application will be available at `http://localhost:3000`.

## Project Structure

The repository is organized with a clear structure, leveraging the Next.js App Router.

-   `app/`: Contains the core application logic, including the main `page.jsx`, global styles `globals.css`, and layout `layout.tsx`.
-   `components/`: Houses all reusable React components.
    -   `components/ui/`: Contains the `shadcn/ui` components used throughout the application.
-   `public/`: Stores static assets, such as the resume PDF file.
-   `lib/`: Includes utility functions, like the `cn` helper for merging Tailwind CSS classes.

## Contact

Feel free to connect or reach out!

-   **LinkedIn**: [uday-vakacharla](https://www.linkedin.com/in/uday-vakacharla-89b527312/)
-   **GitHub**: [@udaykumar12352](https://github.com/udaykumar12352)
-   **Email**: udaykumarvakacharla@gmail.com
