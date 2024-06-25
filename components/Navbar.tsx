'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { List } from '@mui/material';
import { Drawer } from '@mui/material';
import { ListItem } from '@mui/material';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav
      className='fixed flex mt-2 z-10 w-full'
    >
      {isSmScreen ? (
        <Button onClick={toggleDrawer} className="absolute left-0">
          <span className="text-xl">☰</span>
        </Button>
      ) : (
        <div className={`flex justify-center mx-auto rounded-full items-center text-zinc-500 ${
          isScrolled ? 'bg-opacity-70 backdrop-blur-md' : ''
        }`}>
          <Button className=" hover:animate-pulse mb-2 mr-0">
            <Link href="./">
              <span className="text-xl">Home</span>
            </Link>
          </Button>
          <Button className=" hover:animate-pulse mb-2 mr-0 ">
            <Link href="#skills">
              <span className="text-xl">Skills</span>
            </Link>
          </Button>
          <Button className=" hover:animate-pulse mb-2 mr-0">
            <Link href="#Projects">
              <span className="text-xl">Projects</span>
            </Link>
          </Button>

          <Button className=" hover:animate-pulse mb-2 mr-0">
            <Link href="#Contact">
              <span className="text-xl">Contact Me</span>
            </Link>
          </Button>
          <Button>
            <Link href="https://github.com/boyka2708">
              <span className="text-xl">
                <GitHubLogoIcon className="h-9 w-10 mr-3" />
              </span>
            </Link>
          </Button>
        </div>
      )}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="w-64 p-4 bg-zinc-900 min-h-screen text-white">
          <List>
            <ListItem button>
              <Link href="./">
                <span className="text-xl">Home</span>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href='#Projects'>
                <span className="text-xl">Projects</span>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href='#skills'>
                <span className="text-xl">Skills</span>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="#Contact">
                <span className="text-xl">Contact Me</span>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/boyka2708">
                <GitHubLogoIcon className="h-9 w-10 mr-3" />
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;
