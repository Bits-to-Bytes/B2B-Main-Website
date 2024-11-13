import Link from 'next/link';
import { navLinks } from './Appbar';
import { Separator } from './ui/separator';
import { Sidebar, SidebarGroup, SidebarMenuItem } from './ui/sidebar';

export default function SidebarComponent() {
  return (
    <Sidebar>
      <SidebarGroup>
        {navLinks.map((link) => (
          <SidebarMenuItem key={link.name}>
            <Link href={link.path}>{link.name}</Link>
            <Separator />
          </SidebarMenuItem>
        ))}
      </SidebarGroup>
    </Sidebar>
  );
}
