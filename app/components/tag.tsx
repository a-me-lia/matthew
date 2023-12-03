"use client";
import GetTagColor from "@/lib/tag";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


export default function Tag({ tags, url }: { tags: string, url:String }) {
  let arr = tags.trim().split(",");


  arr.sort((a, b) => {
    if (a == "other") {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });


  const router = useRouter();

  const searchParams = useSearchParams();

  //updates the search params with a tag. if the tag already exists, delete the tag.
  //tag list is comma separated
  function updateParams(tag: string) {
    let prevTags = searchParams.get("tags")?.split(",");
    if (!prevTags)
      router.replace(`/${url}?tags=${tag}`, {
        scroll: false,
      });
    //if no tags present
    else if (prevTags?.indexOf(tag) != -1) {
      //if tag is already contained
      if (prevTags.length == 1) {
        router.replace(`/${url}`, { scroll: false }); //if only one tag, remove the query string alltogether
      } else {
        prevTags?.splice(prevTags.indexOf(tag), 1);
        router.replace(`/${url}?tags=${prevTags}`, { scroll: false });
      }
    } else {
      prevTags.push(tag); //if there were already tags present
      router.replace(`/${url}?tags=${prevTags}`, { scroll: false });
    }
  }

  useEffect(() => {
    const refreshData = () => {
      router.refresh();
    };
    refreshData();
  }, [router, searchParams]);

  return (
    <ul
      className="mt-2 flex flex-row space-x-1"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {arr.map((entry, index) => (
        <li
          // style={{background: `hsl(${Δ[index]}, 60%, 70%)`}}
          className={`${
            GetTagColor(entry)
          } rounded-md px-2 text-[14px] h-min  text-black text-opacity-100  bg-opacity-30 hover:bg-opacity-80 transition-all duration-300 `}
          key={index}
          id={index.toString()}
          onClick={() => {
            updateParams(entry);
          }}
        >
          {entry}
        </li>
      ))}
    </ul>
  );
}