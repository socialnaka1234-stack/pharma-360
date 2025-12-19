# Pharma 360

A direct connection platform for pharmaceutical careers and professional networking.

## 🎯 Project Overview

Pharma 360 is a modern web application designed to connect pharmaceutical professionals with job opportunities and enable direct professional networking. The platform combines job marketplace features with social networking capabilities.

### Key Features

- **Job Marketplace**: Browse and post pharmaceutical job opportunities
- **Professional Profiles**: Create and manage detailed professional profiles
- **Direct Networking**: Connect with other professionals in the pharmaceutical industry
- **Real-time Messaging**: Direct communication with potential employers and colleagues
- **OTP Authentication**: Secure phone-based authentication
- **Responsive Design**: Mobile-first approach for better accessibility

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **Database**: Firestore
- **Authentication**: Firebase Auth (Phone & Email)
- **Hosting**: Firebase Hosting (planned)

## 📋 Project Structure

```
pharma-360/
├── app/
│   ├── components/          # Reusable React components
│   ├── lib/                 # Firebase config and utilities
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Helper functions
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Firebase account with a project created

### Installation

1. Clone the repository:
```bash
git clone https://github.com/socialnaka1234-stack/pharma-360.git
cd pharma-360
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Then update `.env.local` with your Firebase credentials:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Code Style

This project uses TypeScript for type safety and follows React/Next.js best practices.

## 🔐 Firebase Setup

### Create Firestore Collections

1. **users** - User profiles and account information
2. **jobs** - Job listings and opportunities
3. **connections** - Professional network connections
4. **messages** - Direct messaging data
5. **applications** - Job applications

### Security Rules

See `firestore.rules` for detailed security configuration (to be created).

## 📱 Mobile Optimization

The application is built with mobile-first design principles using Tailwind CSS responsive utilities.

## 🔄 Roadmap

### Phase 1 (Current)
- [x] Project setup and configuration
- [x] Home page and navigation
- [ ] Authentication system (signup/login)
- [ ] User profiles
- [ ] Firebase integration

### Phase 2 (Planned)
- [ ] Job listing and job detail pages
- [ ] Job application system
- [ ] Professional connections
- [ ] User search and filtering
- [ ] Real-time messaging

### Phase 3 (Future)
- [ ] Advanced search filters
- [ ] Recommendations engine
- [ ] Analytics dashboard
- [ ] Payment integration
- [ ] Mobile app (React Native/Flutter)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

socialnaka1234-stack

## 📧 Contact

For questions or suggestions, please reach out through GitHub issues.

## 🙏 Acknowledgments

- Next.js documentation
- Firebase documentation
- Tailwind CSS documentation
- React best practices and patterns
