import { Icon } from "@iconify/react";
import Link from "next/link";
import { NavMenuContent } from "types/NavMenuContent.interface";


const NavMenu = () => {
    const navMenuContent: NavMenuContent = {
        menuItems: [
            {
                label: "Home",
                href: "#",
            },
        ],
    };
    const { menuItems } = navMenuContent;

    const navItems = menuItems.map(item => (
        <li
            key={item.label}
            role="menuitem"
        >
            <Link href={item.href as string}>{item.label}</Link>
        </li>
    ));

    return (
        <nav
            className="dropdown-hover dropdown"
            aria-label="Navigation Dropdown"
        >
            <label tabIndex={0}>
                <Icon
                    icon="ic:baseline-menu"
                    className="text-5xl text-white"
                />
            </label>
            <ul
                tabIndex={0}
                className="menu-primary dropdown-content menu"
                role="menu"
            >
                {navItems}
            </ul>
        </nav>
    );
};

export default NavMenu;
