import {
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon,
} from '@heroicons/react/outline';
import {
    ChevronDownIcon,
    HomeIcon,
    MenuIcon,
    SearchIcon,
} from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function Header({ session }) {
    // const { data: session } = useSession();

    const handleSignInOut = () => {
        if (session) {
            signOut();
        } else {
            signIn();
        }
    };

    return (
        <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm  items-center">
            <div className="h-10 w-20 relative flex-shrink-0 cursor-pointer">
                <Link href="/">
                    <h1>Chat07</h1>
                </Link>
            </div>

            <div className="mx-7 flex items-center xl:min-w-[300px]">
                <HomeIcon className="h-5 w-5" />
                <p className="ml-2 hidden flex-1 lg:inline">Home</p>
                <ChevronDownIcon className="h-5 w-5" />
            </div>

            <form className="flex items-center flex-1 spaxe-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
                <SearchIcon className="h-6 w-6 text-gray-400" />
                <input
                    className="flex-1 bg-transparent outline-none"
                    type="text"
                    placeholder="Search Chat07"
                />
                <button hidden type="submit" />
            </form>

            <div className=" text-gray-500 space-x-2 mx-5 items-center hidden lg:inline-flex">
                <SparklesIcon className="icon" />
                <GlobeIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className="h-10 border border-gray-100" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <SpeakerphoneIcon className="icon" />
            </div>
            <div className="ml-5 flex items-center lg:hidden">
                <MenuIcon onClick={handleSignInOut} className="icon" />
            </div>

            {session ? (
                <div
                    onClick={() => signOut()}
                    className="hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer"
                >
                    <div className="relative h-5 w-5 flex-shrink-0"></div>
                    <div className="flex-1 text-xs">
                        <p className="truncate">{session?.user?.name}</p>
                        <p className="text-gray-400">Sign Out</p>
                    </div>

                    <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
                </div>
            ) : (
                <Link href="/login">
                    <div className="hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer">
                        <div className="relative h-5 w-5 flex-shrink-0"></div>
                        <p className="text-gray-400">Sign In</p>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default Header;
