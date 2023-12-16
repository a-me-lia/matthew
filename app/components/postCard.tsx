import Image from "next/image"
import Link from "next/link"
import Tag from "./tag"


export default function PostCard({postUrl, title, image, desc, url, tag}:{postUrl:string, title:string,image?:string,desc:string, url:string, tag:string}){


    return(
        <div className="w-full flex flex-row p-2 space-x-2 rounded-xl border-2">
            <div className="relative w-2/3 h-48">
                <div className="absolute flex flex-row items-center justify-center space-x-8 z-50 w-full h-full bg-black/40 rounded-xl opacity-0 z-0 hover:opacity-100 hover:z-50 transition-opacity duration-500">
                    <Link target="_blank" rel="noopener noreferrer" className="items-center flex flex-col" href={`/_next/image?url=${image}%0D&w=1920&&q=100`}>
                        <p className="text-white">view full image</p>
                    <svg width="64px" height="64px" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -3881.000000)" fill="#FFFFFF">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M376.083,3725.667 C376.083,3724.562 376.978,3723.667 378.083,3723.667 C379.188,3723.667 380.083,3724.562 380.083,3725.667 C380.083,3726.772 379.188,3727.667 378.083,3727.667 C376.978,3727.667 376.083,3726.772 376.083,3725.667 L376.083,3725.667 Z M382,3733.086 L377.987,3729.074 L377.971,3729.089 L377.955,3729.074 L376.525,3730.504 L371.896,3725.876 L371.881,3725.892 L371.865,3725.876 L366,3731.741 L366,3723 L382,3723 L382,3733.086 Z M364,3737 L384,3737 L384,3721 L364,3721 L364,3737 Z" id="image_picture-[#971]">

</path>
            </g>
        </g>
    </g>
</svg>
                    </Link>
                    <Link href={postUrl} className="items-center flex flex-col">
                        <p className="text-white">go to article</p>
                    <svg className="hover:translate-x-6 transition-translate duration-1000" width="64px" height="64px" viewBox="0 0 24 24" fill="none" >
<path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>
            </div>
            {typeof image != 'undefined' && (
            <Image src={image} alt={desc} fill className="object-cover z-40 rounded-xl"></Image>
            )}
            </div>
            <div className="w-1 h-full bg-grey-300"></div>
            <div className="w-1/3">
            <Link href={postUrl}>            <h2 className=" hover:underline text-[20px] font-medium">{title}</h2></Link>

            <Tag url={url} tags={tag}></Tag>
            <h3 className="mt-4">{desc}</h3>
            </div>



        </div>
    )
}