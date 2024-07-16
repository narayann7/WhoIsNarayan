import { useEffect, useState } from "react";

import "react-cmdk/dist/cmdk.css";
import { BiHomeSmile } from "react-icons/bi";

import { MdWorkOutline } from "react-icons/md";
import { TbUserHeart } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { useRootContext } from "../services/context_provider";

const Palette = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [search, setSearch] = useState("");
  const { palette } = useRootContext();
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();
        palette.toggle();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "home",
            icon: BiHomeSmile,
            onClick: () => {
              nav("/");
            },
          },
          {
            id: "about",
            children: "about",
            icon: TbUserHeart,
            onClick: () => {
              nav("/about");
            },
          },
          {
            id: "work",
            children: "work",
            icon: MdWorkOutline,
            onClick: () => {
              nav("/work");
            },
          },
          {
            id: "skills",
            children: "skills",
            icon: MdWorkOutline,
            onClick: () => {
              const path = location.pathname;
              if (path === "/about") {
                const element = document.getElementById("skills");
                element?.scrollIntoView({ behavior: "smooth" });
              } else {
                nav("/about#skills");
              }
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <div>
      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={palette.set}
        search={search}
        isOpen={palette.isOpen}
        page={page}
      >
        <CommandPalette.Page id="root">
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>

        {/* <CommandPalette.Page id="projects">
          <div></div>
        </CommandPalette.Page> */}
      </CommandPalette>
    </div>
  );
};

export default Palette;
