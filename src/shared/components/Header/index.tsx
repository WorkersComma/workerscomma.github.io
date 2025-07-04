import type { FC } from "react";
import {
  Link,
  useCanGoBack,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import logo from "./logo.png";
import logo2x from "./logo@2x.png";

export const Header: FC = () => {
  const router = useRouter();
  const canGoBack = useCanGoBack();
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul className="h-[var(--header-height)] flex justify-between items-center border-b-[1px] px-[10px] py-[6px] border-b-[#E5E5E5]">
          <li>
            <Link to="/" aria-label="홈으로 이동">
              <img
                className="w-[90px] h-[35px]"
                src={logo}
                srcSet={`${logo2x} 2x`}
                alt="워커스콤마 로고"
              />
            </Link>
          </li>

          {canGoBack && location.pathname !== "/" && (
            <li>
              <button
                className="cursor-pointer"
                onClick={() => canGoBack && router.history.back()}
                aria-label="뒤로가기"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13.5002C21.0013 14.0915 20.8858 14.6773 20.6601 15.2238C20.4345 15.7704 20.103 16.267 19.6849 16.6851C19.2668 17.1032 18.7702 17.4347 18.2236 17.6603C17.6771 17.886 17.0913 18.0015 16.5 18.0002H14C13.7348 18.0002 13.4804 17.8948 13.2929 17.7073C13.1054 17.5198 13 17.2654 13 17.0002C13 16.735 13.1054 16.4806 13.2929 16.2931C13.4804 16.1055 13.7348 16.0002 14 16.0002H16.5C17.163 16.0002 17.7989 15.7368 18.2678 15.268C18.7366 14.7991 19 14.1632 19 13.5002C19 12.8372 18.7366 12.2013 18.2678 11.7324C17.7989 11.2636 17.163 11.0002 16.5 11.0002H6.2L8.6 13.4002C8.744 13.5622 8.82066 13.7732 8.81428 13.9898C8.8079 14.2065 8.71897 14.4126 8.56569 14.5659C8.4124 14.7192 8.20634 14.8081 7.98966 14.8145C7.77297 14.8208 7.56204 14.7442 7.4 14.6002L3.4 10.6002C3.24123 10.4409 3.15208 10.2251 3.15208 10.0002C3.15208 9.77527 3.24123 9.55951 3.4 9.40019L7.4 5.40019C7.56204 5.25619 7.77297 5.17954 7.98966 5.18592C8.20634 5.19229 8.4124 5.28122 8.56569 5.43451C8.71897 5.58779 8.8079 5.79385 8.81428 6.01054C8.82066 6.22722 8.744 6.43815 8.6 6.60019L6.2 9.00019H16.5C17.0913 8.99887 17.6771 9.11437 18.2236 9.34005C18.7702 9.56573 19.2668 9.89715 19.6849 10.3153C20.103 10.7334 20.4345 11.23 20.6601 11.7766C20.8858 12.3231 21.0013 12.9089 21 13.5002Z"
                    fill="#222221"
                  />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
