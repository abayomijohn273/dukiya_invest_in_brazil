# Dukiya Invest Brazil 2025

A modern Next.js application showcasing investment opportunities and events in Brazil for 2025. This platform features comprehensive information about investment prospects, speaker profiles, event details, and registration capabilities.

## 🚀 Features

- Modern, responsive design using Next.js 14
- Interactive venue mapping
- Speaker showcase
- Event registration system
- Brazil investment gallery
- Event highlights section
- Comprehensive UI component library
- Dark mode support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.0.0 or higher)
- pnpm (preferred package manager)

## 🛠 Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd dukiya-invest-brazil-2025
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗 Project Structure

```
dukiya-invest-brazil-2025/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...              # Feature-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/              # Static assets
└── styles/              # Global styles
```

## 🎨 Key Components

- `brazil-gallery.tsx`: Showcases visual content about Brazil
- `event-highlights.tsx`: Displays key event information
- `registration-form.tsx`: Handles user registration
- `speakers.tsx`: Presents speaker profiles
- `venue-map.tsx`: Interactive venue information
- `why-brazil.tsx`: Highlights investment opportunities

## 🔧 Configuration

The project uses several configuration files:

- `next.config.mjs`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `postcss.config.mjs`: PostCSS configuration
- `components.json`: UI components configuration

## 📱 Responsive Design

The application is fully responsive and includes:

- Mobile-first design approach
- Custom hooks for device detection (`use-mobile.ts`)
- Adaptive UI components

## 🎯 UI Components

A comprehensive set of UI components is available in the `components/ui/` directory, including:

- Buttons, inputs, and form elements
- Navigation components
- Modal dialogs and alerts
- Data display components
- Layout utilities

## 🚀 Deployment

Build the application for production:

```bash
pnpm build
```

The build artifacts will be generated in the `.next` directory.

## 📄 License

[Your License Here]

## 👥 Contributors

[List of Contributors]

## 📞 Contact

For questions and support, please contact [Your Contact Information]
