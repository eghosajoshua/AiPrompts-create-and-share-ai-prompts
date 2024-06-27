"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<any>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="w-full flex justify-between items-center mb-8 p-3 px-4">
      <Link href="/" className="flex items-center gap-3">
        <Image
          className="rounded-full"
          alt="logo"
          src="/images/logo.png"
          width={40}
          height={40}
        />
        <p
          className="font-bold hidden text-black
         sm:flex"
        >
          AiPrompt
        </p>
      </Link>
      {/* navigation */}

      <div>
        {session?.user ? (
          <>
            {/* desktop */}
            <div className=" gap-3 hidden md:flex justify-center items-center">
              <Link
                className="text-white bg-black p-2 rounded-full px-4"
                href="/create-prompt"
              >
                Create Post
              </Link>
              <button
                onClick={() => signOut()}
                className="border-2 text-black rounded-full p-2 px-4"
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  className="rounded-full shadow-md"
                  alt="profile image"
                  src={session.user.image || ""}
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            {/* mobile */}
            <div className=" md:hidden relative">
              <button onClick={() => setOpenMobileMenu((prev) => !prev)}>
                <Image
                  className="rounded-full shadow-md"
                  alt="profile image"
                  src={session.user.image || ""}
                  width={30}
                  height={30}
                />
              </button>
              {openMobileMenu && (
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-xl p-2 flex flex-col">
                  <Link
                    className="text-black w-full mb-2 text-right p-1"
                    href="/profile"
                  >
                    My profile
                  </Link>
                  <Link
                    className="text-black w-full mb-2 text-right p-1"
                    href="/create-prompt"
                  >
                    Create Post
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setOpenMobileMenu((prev) => !prev);
                    }}
                    className="hover:bg-transparent hover:ring-1 hover:text-black w-full ring-black bg-black text-center text-gray-100 text-sm py-2 p-1 rounded-full"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="border-2 text-black rounded-full p-2 px-4"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
