import { redirect } from 'next/navigation';

export default function Home() {
  // Server-side redirect - this will be handled on the server
  // For now, we'll keep it simple and let client handle auth
  // In a production app, you'd use server-side auth checking
  redirect('/home/auth');
}
