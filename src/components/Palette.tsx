import { useEffect, useState } from "react";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import "react-cmdk/dist/cmdk.css";
import { BiHomeSmile } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRootContext } from "../services/context_provider";

const Palette = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [search, setSearch] = useState("");
  const { palette } = useRootContext();
  const nav = useNavigate();

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
            children: "Home",
            icon: BiHomeSmile,
            onClick: () => {
              nav("/");
            },
          },
          {
            id: "about",
            children: "About",
            icon: "UserIcon",
            onClick: () => {
              nav("/about");
            },
          },
          {
            id: "work",
            children: "work",
            icon: "RectangleStackIcon",
            closeOnSelect: false,
            onClick: () => {
              nav("/work");
            },
          },
        ],
      },
      // {
      //   heading: "Other",
      //   id: "advanced",
      //   items: [
      //     {
      //       id: "developer-settings",
      //       children: "Developer settings",
      //       icon: "CodeBracketIcon",
      //       href: "#",
      //     },
      //     {
      //       id: "privacy-policy",
      //       children: "Privacy policy",
      //       icon: "LifebuoyIcon",
      //       href: "#",
      //     },
      //     {
      //       id: "log-out",
      //       children: "Log out",
      //       icon: "ArrowRightOnRectangleIcon",
      //       onClick: () => {
      //         alert("Logging out...");
      //       },
      //     },
      //   ],
      // },
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

        <CommandPalette.Page id="projects">
          <div></div>
        </CommandPalette.Page>
      </CommandPalette>
    </div>
  );
};

export default Palette;
