import { ReactElement, useEffect } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sidebarStatus, toggleSidebar } from "../../app/setting/settingSlice";
import coffeemenugif from "../../assets/menu/coffeemenugif.gif";
import coffeemenuimg from "../../assets/menu/coffeemenuimg.png";

const Header = (): ReactElement => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const SidebarStatus: boolean = useSelector(sidebarStatus);

  useEffect(() => {
    scrollTo();
  }, [pathname]);

  const scrollTo = (): void => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };
  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/90 text-slate-50">
      <section className="container py-2">
        <article className="flex justify-between items-center gap-4">
          <div data-aos="fade-down" data-aos-once="true">
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="size-14" /> MB Coffee
            </Link>
          </div>
          <button
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            onClick={() => dispatch(toggleSidebar())}
            className="block cursor-pointer relative size-14 sm:size-16"
          >
            {SidebarStatus ? (
              <img
                src={coffeemenugif}
                alt="coffeemenugif"
                className="w-full h-full"
              />
            ) : (
              <img
                src={coffeemenuimg}
                alt="coffeemenuimg"
                className="w-full h-full"
              />
            )}
          </button>
        </article>
      </section>
    </header>
  );
};

export default Header;
