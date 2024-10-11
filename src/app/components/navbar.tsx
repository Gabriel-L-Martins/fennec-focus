import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-primary-content text-primary-content font-poppins z-50">
      <ul className="flex justify-between items-center p-4">
        <li className="font-semibold tracking-wider">
          <Link href="/" className="text-primary-content">Fennec Focus</Link>
        </li>
        <ul className="flex space-x-2">
          <li>
            <Link href="/login" className="btn btn-sm btn-ghost btn-primary-content">Login</Link>
          </li>
          <li>
            <Link href="/register" className="btn btn-sm btn-outline btn-primary-content">Register</Link>
          </li>
          <li>
            <ThemeToggle/>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
