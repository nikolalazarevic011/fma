import Link from "next/link";

export const LoginJoinButtons = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="z-20 items-center justify-end md:flex md:flex-1 lg:w-0">
      {isLoggedIn ? (
        <a
          className="text-base font-medium cursor-pointer whitespace-nowrap text-secondary hover:text-menuHighlightBlue"
          onClick={handleLogout}
        >
          Logout
        </a>
      ) : (
        <>
          <Link legacyBehavior href="/login/" passHref>
            <a className="text-base font-medium whitespace-nowrap text-secondary hover:text-menuHighlightBlue">
              Login
            </a>
          </Link>
          <Link legacyBehavior href="/register/" passHref>
            <a className="inline-flex items-center justify-center px-4 py-2 ml-3 text-base font-medium border border-transparent rounded-md shadow-sm whitespace-nowrap text-secondary hover:text-menuHighlightBlue">
              Join Now
            </a>
          </Link>
        </>
      )}
    </div>
  );
};
