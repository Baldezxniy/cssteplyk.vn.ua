import {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";

import client from "@/app/contentful/intex";
import {formatDate} from "@/app/utils/formatDate";
import {SelectDemo} from "@/app/news/Selector";


export const metadata: Metadata = {
  title: 'Новини - Теплицька спортивна школа в Теплику',
  description: 'Дізнайтеся про останні новини та події у Теплицькій спортивній школі в місті Теплику. Ми регулярно оновлюємо інформацію про наші досягнення, заходи та інші цікаві події.',
  keywords: [
    'новини теплик',
    'новини теплицької спортивної школи',
    'новини теплицького спорту',
    'спортивні новини теплик',
    'теплицька спорт новини',
    'спортивні події теплик',
    'теплицькі новини про нас',
    'теплик спортивна школа новини',
    'теплик стадіон новини',
    'стадіон теплик новини',
    'події теплик новини',
    'події теплицької школи новини',
  ],
}

const fetchData = async () => {
  const data = await client.getEntries({
    content_type: "news",
    limit: 50
  })
  return data.items;
}

const fetchDataWithFilter = async (filterParam: string) => {
  const data = await client.getEntries({
    content_type: "news",
    limit: 50,
    "fields.sportType": filterParam
  })
  return data.items;
}


const Page = async ({searchParams}: { searchParams: { filter: string } }) => {

  const news = searchParams.filter == undefined ? await fetchData() : await fetchDataWithFilter(searchParams.filter);

  if (news == undefined) {
    console.log("NOT FOUND")
  }

  return (
    <main
      className={'relative min-h-screen flex flex-col text-base overflow-x-hidden overflow-y-hidden'}>
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
                <span className='inline-block py-[2px] px-[3px] text-[#5B5B5B]'>
                  Новини
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <h1
                  className="text-[25px] mb-[10px] sm:text-[30px] md:text-[35px] lg:text-[3vw] leading-[100%] sm:mb-[20px] font-bold font-sans">
                  Новини
                </h1>
                <SelectDemo/>
                {/*  fetchDataWithFilter={fetchDataWithFilter}*/}
              </div>
              <div className='w-full text-[#676767]'>
                <div className='py-[40px] flex flex-wrap'>
                  {
                    news?.length > 0 &&
                    news?.map((newsItem: any, index: number) => (
                      <Link className='flex max-w-full w-full md:w-[50%] lg:w-[33%] h-auto'
                            href={"/news/" + newsItem.fields.slug} key={newsItem.fields.slug}>

                        <div
                          className='shadow-slate-500 border-2 flex-shrink flex-grow min-w-[auto] max-w-full m-[5px] my-[10px] sm:m-[10px] flex flex-col items-start justify-start rounded-[10px] bg-white p-[2px]'>
                          <div
                            className='relative overflow-hidden w-full h-[270px] bg-no-repeat bg-auto bg-scroll bg-black/0 rounded-t-[10px] rounded-b-[5px] '>
                            <Image width={0} height={0} sizes={'100%'}
                                   src={"https:" + newsItem.fields.photos[0].fields.file.url} alt={"Тренер: "}
                                   className={'w-full h-full '}/>
                          </div>
                          <div className='py-[16px] px-[10px] flex flex-col gap-4 flex-grow'>
                            <div className=' w-full flex flex-col '>
                              <div className='text-[20px] md:text-[22px] flex font-bold flex-shrink'>
                            <span
                              className="text-block-wrap-div">{newsItem.fields.title}</span>
                              </div>
                            </div>
                            <div className='flex gap-2 text-[15px] text-[#878787] flex-grow'>
                              <p className='leading-[120%]'>
                                {newsItem.fields.shortDescription} </p>
                            </div>
                            <div className='mt-auto'>
                              <p className='leading-[110%]'>
                                {formatDate(newsItem.fields.date)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Page
