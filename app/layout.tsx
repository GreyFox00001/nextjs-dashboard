import '@/app/ui/global.css';
import { inter } from './ui/font';
import { ThemeProvider } from './components/theme-provider';
import { ThemeToggle } from './ui/ToggleButton';

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle/>
        </ThemeProvider>
      </body>
    </html>
  );
}
