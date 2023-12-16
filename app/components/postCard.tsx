import Image from "next/image"
import Link from "next/link"
import Tag from "./tag"


export default function PostCard({postUrl, title, image, desc, url, tag}:{postUrl:string, title:string,image?:string,desc:string, url:string, tag:string}){


    return(
        <Link href={postUrl} className="w-full flex flex-row p-2 space-x-2 rounded-xl border-2">
            <div className="relative w-2/3 h-48">
            {typeof image != 'undefined' && (
            <Image src={image} alt={desc} fill className="object-cover rounded-xl"></Image>
            )}
            </div>
            <div className="w-1 h-full bg-grey-300"></div>
            <div className="w-1/3">
            <h2>{title}</h2>
            <Tag url={url} tags={tag}></Tag>
            <h3 className="mt-4">{desc}</h3>
            </div>



        </Link>
    )
}