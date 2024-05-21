

import { links } from "@/lib/data";
import { Dispatch, SetStateAction } from "react";

const Menu = ({
  setmenuVisible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
          <ul
            className="list-none py-4 px-0 m-0 block max-h-screen"
            role="menu"
          >
            {links.map((el) => (
              <li
                className="p-0 m-6 text-2xl block"
                key={el.name}
                role="menuitem"
              >
                <a
                  className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                  href={el.hash}
                  onClick={setmenuVisible.bind(null, false)}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;