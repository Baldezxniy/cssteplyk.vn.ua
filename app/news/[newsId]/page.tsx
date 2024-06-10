import Link from "next/link";

import Image from "next/image";

import client from "@/app/contentful/intex";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES} from "@contentful/rich-text-types";
import {formatDate} from "@/app/utils/formatDate";


const fetchData = async (slug: string) => {
  const result = await client.getEntries({
    content_type: "news",
    limit: 1,
    "fields.slug": slug
  });

  return result.items[0];
}

const Heading4 = ({children}: any) => (
  <h4 className='text-[23px] font-bold mt-[20px] mb-[10px]'>{children}</h4>
)

const options = {
  renderNode: {
    [BLOCKS.HEADING_4]: (_: any, children: any) => <Heading4>{children}</Heading4>,
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => <><p>{children}</p></>,

    [INLINES.HYPERLINK]: ({data}: any, children: any) =>
      <a className='text-blue-800 font-semibold'
         href={data.uri.startsWith("https://") || data.uri.startsWith("http://") ? data.uri : ("https://" + data.uri)}
        // target={`${data.uri.startsWith("cssteplyk.vn.ua") ? '_self' : '_blank'}`}
         target='_blank'
      >{children}</a>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <div className='flex justify-center'>
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        </div>
      );
    }
  }
};


const Page = async ({params}: {
  params: {
    newsId: string
  }
}) => {

  const news: any = await fetchData(params.newsId);

  if (news == undefined) {
    console.log("ERROR")
  }

  return (
    <main
      className={' relative min-h-screen flex flex-col text-base overflow-x-hidden overflow-y-hidden'}>
      <div className='w-full block flex-grow flex-shrink-0'>
        <div className='w-full px-[5%] py-[30px] sm:py-[70px]'>
          <div className='max-w-[1300px] mx-auto flex flex-row'>
            <div className='w-full relative'>
              <div className='block text-[14px] text-[#5B5B5B] mb-[10px] '>
                <Link href="/" className='inline-block py-[2px] px-[3px] text-[#E63338] underline'>
                  <span className="flex-grow  max-w-full inline">Головна</span>
                </Link>
                <span className='inline-block py-[2px] px-[3px] text-[#5B5B5B]'>
                  /
                </span>
                <Link href="/news" className='inline-block py-[2px] px-[3px] text-[#E63338] underline'>
                  <span className="flex-grow  max-w-full inline">Новини</span>
                </Link>
                <span className='inline-block py-[2px] px-[3px] text-[#5B5B5B]'>
                  /
                </span>
                <span className='inline-block py-[2px] px-[3px] text-[#5B5B5B]'>
                  {news?.fields.title}
                </span>
              </div>
              <h1
                className="text-[25px] mb-[10px] sm:text-[30px] md:text-[35px] lg:text-[3vw] leading-[100%] sm:mb-[20px] font-bold font-sans">
                {news?.fields.title}
              </h1>

              {news?.fields.title && <div className='w-full text-[#676767]'>

                <div className='py-[40px] flex flex-col justify-center items-center'>
                  <div className='w-full md:w-[70%]'>
                    <div>
                      <Image width={0} height={0} sizes={'100%'}
                             src={"https:" + news?.fields.photos[0].fields.file.url} alt={"Тренер: "}
                             className={'w-full h-full '}/></div>
                    <div className='flex flex-col gap-2 py-[30px] px-[12px] lg:p-[40px] text-[16px]'>
                      {documentToReactComponents(news?.fields.description, options)}
                    </div>
                    <div>
                      {formatDate(news?.fields.date)}
                    </div>
                  </div>

                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export default Page;