'use client'

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from '@supabase/supabase-js';

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
      const checkUserSession = async () => {
          const { data: { session } } = await supabase.auth.getSession();
          if (session) {
              setUser(session.user);
          }
      };

      checkUserSession();

      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_OUT' || !session) {
              setUser(null);
          } else if (event === 'SIGNED_IN') {
              setUser(session.user);
          }
      });

      return () => {
          authListener.subscription.unsubscribe();
      };
  }, []);

  const handleLogout = async () => {
      await supabase.auth.signOut();
      setUser(null);
  };
  return (
    <nav className="border-b border-primary-content text-primary-content font-poppins z-50">
      <ul className="flex justify-between items-center p-4">
        <li className="font-semibold tracking-wider">
          <Link href="/" className="text-primary-content">Fennec Focus</Link>
        </li>
        {user ? (
          <ul>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <span>Logged in as {user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex space-x-2">
            <li>
              <Link href="/login" className="btn btn-sm btn-ghost btn-primary-content">Login</Link>
            </li>
            <li>
              <Link href="/register" className="btn btn-sm btn-outline btn-primary-content">Register</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
