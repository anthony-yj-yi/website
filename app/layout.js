import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/navBar';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900">
      <body className='{inter.className} bg-cover bg-center'
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar></NavBar>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
