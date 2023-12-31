import React from 'react';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import classNames from 'classnames';

interface UserMenuProps {
  username: string;
}

const UserMenu = ({ username }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

const LogOut =() => {
    window.localStorage.clear();
    window.location.href = '/dashboard';
}

  let items: MenuItem[] = [
    { label: 'Profile', icon: 'pi pi-fw pi-user' },
    { label: 'Log out', icon: 'pi pi-fw pi-sign-out', command: LogOut },
    { separator: true },
    {
      template: (item, options) => {
        return (
          <button
            onClick={(e) => options.onClick(e)}
            className={classNames(
              options.className,
              'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround'
            )}
          >
            <Avatar
              image="https://firebasestorage.googleapis.com/v0/b/magicpost-480e1.appspot.com/o/ava1.png?alt=media&token=f97025a6-5cf0-437e-a664-1f563d7860e6"
              className="mr-2 avatar"
              shape="circle"
            />
            <div className="flex flex-column align">
              <span className="font-bold">{username}</span>
            </div>
          </button>
        );
      },
    },
  ];

  return (
    <div className='flex absolute right-0'>
      <div onClick={toggleOpen}>
        {username ? (
          <div className="nav-user">
            <span className="nav-username">{username}</span>
            <Avatar
              image="https://firebasestorage.googleapis.com/v0/b/magicpost-480e1.appspot.com/o/ava1.png?alt=media&token=f97025a6-5cf0-437e-a664-1f563d7860e6"
              className="mr-4 ml-2 avatar"
              size="large"
              shape="circle"
            />
          </div>
        ) : (
          <div className="nav-user" onClick={()=>{ window.location.href = '/login';}}>
            <span className="nav-login">Login</span>
            <Avatar
              image="https://firebasestorage.googleapis.com/v0/b/magicpost-480e1.appspot.com/o/ava0.png?alt=media&token=463cf159-9230-457f-aa5e-703f55f644ac"
              className="mr-4 ml-2 avatar"
              size="large"
              shape="circle"
            />
          </div>
        )}
      </div>
      {isOpen && username && (
        <div className="menu-container">
          <Menu model={items} />
        </div>
      )}
      <style jsx>{`
        .menu-container {
          position: fixed;
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default UserMenu;