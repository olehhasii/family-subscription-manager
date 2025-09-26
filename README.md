# Group Subscriptions Manager

A personal web application for managing group subscription payments, built with React, TypeScript, and Supabase. This project helps track who has paid for shared subscriptions (like YouTube Premium) and provides a clean interface for both public viewing and administrative management.

## 🌟 Features

### Public Board
- **Real-time Status Display**: View all group members and their payment status.  Color-coded status showing who has paid, who hasn't, and who is due
- **Multi-language Support**: Available in Ukrainian and English
- **Dark/Light Theme**: Toggle between themes for better user experience

### Admin Panel
- **Member Management**: Add, edit, and delete group members
- **Payment Tracking**: Set and update payment due dates
- **Avatar Management**: Upload and manage member profile pictures
- **Real-time Updates**: Changes reflect immediately on the public board

### Technical Features
- **Modern React**: Built with React 19 and TypeScript
- **State Management**: React Query for server state management
- **Styling**: Styled Components for component-based styling
- **Animations**: Framer Motion for animations
- **Database**: Supabase for backend services and authentication
- **File Storage**: Supabase Storage for avatar images
- **Notifications**: Sonner for toast notifications

##  Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd group-subscriptions-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**
   Create the following table in your Supabase database:
   ```sql
   CREATE TABLE Members (
     id BIGSERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     paidUntill DATE NOT NULL,
     isBillable BOOLEAN DEFAULT true,
     avatarUrl TEXT DEFAULT ''
   );
   ```

5. **Set up Supabase Storage**
   Create a storage bucket named `Avatars` for member profile pictures.

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173`


## 🤝 Contributing
If you stumbled upon this project, I would be very grateful for your feedback/suggestions regarding the quality of the code.