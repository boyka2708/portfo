'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Drawer,
  List,
  ListItemButton,
} from '@mui/material';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="fixed top-2 z-10 w-full">

      <div
        className={`
          hidden sm:flex
          mx-auto
          w-fit
          items-center
          justify-center
          rounded-full
          text-white
          bg-opacity-70 backdrop-blur-md
        `}
      >
        <Button className="mb-2 mr-0 hover:animate-pulse">
          <Link href="/">
            <span className="text-xl">Home</span>
          </Link>
        </Button>

        <Button className="mb-2 mr-0 hover:animate-pulse">
          <Link href="#skills">
            <span className="text-xl">Skills</span>
          </Link>
        </Button>

        <Button className="mb-2 mr-0 hover:animate-pulse">
          <Link href="#Projects">
            <span className="text-xl">Projects</span>
          </Link>
        </Button>

        <Button className="mb-2 mr-0 hover:animate-pulse">
          <Link href="#Contact">
            <span className="text-xl">Contact Me</span>
          </Link>
        </Button>

        <Button>
          <Link
            href="https://github.com/boyka2708"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="mr-3 h-9 w-10" />
          </Link>
        </Button>
      </div>

      <Button
        onClick={toggleDrawer}
        className="absolute left-0 sm:hidden text-amber-50"
      >
        <span className="text-xl text-amber-50 shadow-2xl">
          ☰
        </span>
      </Button>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <div className="min-h-screen w-64 bg-zinc-900 p-4 text-white">
          <List>

            <ListItemButton onClick={closeDrawer}>
              <Link href="/" className="text-xl">
                Home
              </Link>
            </ListItemButton>

            <ListItemButton onClick={closeDrawer}>
              <Link href="#Projects" className="text-xl">
                Projects
              </Link>
            </ListItemButton>

            <ListItemButton onClick={closeDrawer}>
              <Link href="#skills" className="text-xl">
                Skills
              </Link>
            </ListItemButton>

            <ListItemButton onClick={closeDrawer}>
              <Link href="#Contact" className="text-xl">
                Contact Me
              </Link>
            </ListItemButton>

            <ListItemButton onClick={closeDrawer}>
              <Link
                href="https://github.com/boyka2708"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-9 w-10" />
              </Link>
            </ListItemButton>

          </List>
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;

