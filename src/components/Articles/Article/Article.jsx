import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import article from '../../../images/Rectangle2661.png'
import article1 from '../../../images/article1.png'
import article2 from '../../../images/article2.png'
import article3 from '../../../images/article3.png'
import banner from '../../../images/Banner.png'


function Article() {
  return (
    <div className='text-white'>
      <Header/>

      <div className='bg-[#060919]'>
        <div className='flex flex-col gap-8 ml-8 mr-8'>
          <h1 className='font-bold text-6xl'>Tips on choosing a university</h1>
          <div className='flex justify-between w-1/4'>
              <h1 className='text-slate-300'>by <span className='text-white font-bold'>Gabriel Pires</span></h1>
              <h1 className='text-slate-300'>Date <span className='text-white font-bold'>7 Dec, 2021</span></h1>
          </div>
          <img src={article} alt="" className=' mb-16 items-center'/>
        </div>
      </div>

      <div className='flex flex-row mt-16 justify-between gap-8 m-18 text-black w-full'>
        <div className='flex flex-col gap-6 text-black w-3/4 ml-16'>
          <h1 className='font-bold text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo reprehenderit ad ea cupiditate nam error dicta illo, quam itaque numquam facere impedit placeat soluta hic, fuga natus. Hic, quis.</h1>
          <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia iste sequi impedit amet ducimus cupiditate at labore autem, excepturi tempore libero eveniet nisi ex perferendis! Eos quidem dolorum accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo dignissimos ipsa libero voluptatem enim neque exercitationem vitae delectus beatae ducimus quaerat consequatur, ipsum ullam vel itaque fuga cum porro.
          </p>
          <h1 className='font-bold text-xl'>Lorem ipsum dolor</h1>
          <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia iste sequi impedit amet ducimus cupiditate at labore autem, excepturi tempore libero eveniet nisi ex perferendis! Eos quidem dolorum accusamus.</p>
          <ul className='list-disc text-[#ed811c]'>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia iste sequi impedit amet ducimus cupiditate at labore autem, excepturi tempore libero eveniet nisi ex perferendis! Eos quidem dolorum accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo dignissimos ipsa libero voluptatem enim neque exercitationem vitae delectus beatae ducimus quaerat consequatur, ipsum ullam vel itaque fuga cum porro.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ab nisi quam nihil atque repellat repudiandae ad eligendi earum animi veritatis perspiciatis deleniti nobis pariatur laudantium, placeat quo quod sapiente.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consectetur accusantium iure sint impedit quae consequatur quis vitae obcaecati blanditiis ex nemo vero quas ea eligendi deserunt, est reprehenderit enim.
          </p>

          <h1 className='font-bold text-xl'>Lorem ipsum dolor</h1>
          <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia iste sequi impedit amet ducimus cupiditate at labore autem, excepturi tempore libero eveniet nisi ex perferendis! Eos quidem dolorum accusamus.</p>
          <ul className='list-decimal text-[#ed811c]'>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia iste sequi impedit amet ducimus cupiditate at labore autem, excepturi tempore libero eveniet nisi ex perferendis! Eos quidem dolorum accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo dignissimos ipsa libero voluptatem enim neque exercitationem vitae delectus beatae ducimus quaerat consequatur, ipsum ullam vel itaque fuga cum porro.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ab nisi quam nihil atque repellat repudiandae ad eligendi earum animi veritatis perspiciatis deleniti nobis pariatur laudantium, placeat quo quod sapiente.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consectetur accusantium iure sint impedit quae consequatur quis vitae obcaecati blanditiis ex nemo vero quas ea eligendi deserunt, est reprehenderit enim.
          </p>
          <div className='flex flex-col'>
            <h1><span className='text-[#ed811c] text-9xl'>"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque adipisci necessitatibus inventore maiores. <span className='text-[#ed811c] text-9xl'>"</span></h1>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt pariatur nobis eligendi accusantium eum suscipit impedit nam laborum ab alias in delectus commodi consequuntur ullam odio non, tempora accusamus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab ut perspiciatis. Quasi, esse laborum similique dolores molestiae ipsam sequi vero, nesciunt laboriosam quae dolorem non id sint accusamus eos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolor, ipsa cupiditate error adipisci natus aliquid quas quidem quisquam? Iste in fuga quaerat ducimus, beatae deserunt dolorem quisquam sapiente!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi iste quaerat nam, molestias est aperiam hic architecto ab, natus illo reprehenderit facere id, fuga saepe quidem nobis velit rerum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos hic culpa dolorem facilis ullam saepe voluptatem, aperiam harum velit, rerum ipsa doloribus maxime quos fugit commodi vel sapiente similique.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos error nam neque nostrum quasi aliquid odit? Obcaecati, mollitia unde, voluptates quas ratione fugit nostrum repellendus deserunt maiores, magnam sed.
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt pariatur nobis eligendi accusantium eum suscipit impedit nam laborum ab alias in delectus commodi consequuntur ullam odio non, tempora accusamus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab ut perspiciatis. Quasi, esse laborum similique dolores molestiae ipsam sequi vero, nesciunt laboriosam quae dolorem non id sint accusamus eos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum eius magnam autem labore at aperiam. Similique cum saepe accusantium nulla id eveniet totam magnam? Molestias distinctio delectus corporis facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos error nam neque nostrum quasi aliquid odit? Obcaecati, mollitia unde, voluptates quas ratione fugit nostrum repellendus deserunt maiores, magnam sed.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab ut perspiciatis. Quasi, esse laborum similique dolores molestiae ipsam sequi vero, nesciunt laboriosam quae dolorem non id sint accusamus eos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum eius magnam autem labore at aperiam. Similique cum saepe accusantium nulla id eveniet totam magnam? Molestias distinctio delectus corporis facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolor, ipsa cupiditate error adipisci natus aliquid quas quidem quisquam? Iste in fuga quaerat ducimus, beatae deserunt dolorem quisquam sapiente!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi iste quaerat nam, molestias est aperiam hic architecto ab, natus illo reprehenderit facere id, fuga saepe quidem nobis velit rerum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos hic culpa dolorem facilis ullam saepe voluptatem, aperiam harum velit, rerum ipsa doloribus maxime quos fugit commodi vel sapiente similique.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos error nam neque nostrum quasi aliquid odit? Obcaecati, mollitia unde, voluptates quas ratione fugit nostrum repellendus deserunt maiores, magnam sed.
          </p>
        </div>
        <div className='text-black w-1/4 mr-16'>
          <h1 className='text-black font-bold text-xl mb-4'>Popular Article</h1>
          <div>
            <div className='flex flex-col items-center mb-4'>
              <img src={article1} alt="" />
            </div>
            <div className='flex flex-col justify-evenly mb-8'>
              <h1 className='font-bold text-lg'>Tips on choosing a university</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis quas atque quos a accusamus libero vero nam, explicabo delectus eius sequi sit praesentium, voluptas, obcaecati voluptatibus nulla officia illum.</p>
              <h1 className='text-[#FF9B00]'>Read More</h1>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mb-4'>
              <img src={article2} alt="" />
            </div>
            <div className='flex flex-col justify-evenly mb-8'>
              <h1 className='font-bold text-lg'>Tips on choosing a university</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis quas atque quos a accusamus libero vero nam, explicabo delectus eius sequi sit praesentium, voluptas, obcaecati voluptatibus nulla officia illum.</p>
              <h1 className='text-[#FF9B00]'>Read More</h1>
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center mb-4'>
              <img src={article3} alt="" />
            </div>
            <div className='flex flex-col justify-evenly mb-8'>
              <h1 className='font-bold text-lg'>Tips on choosing a university</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis quas atque quos a accusamus libero vero nam, explicabo delectus eius sequi sit praesentium, voluptas, obcaecati voluptatibus nulla officia illum.</p>
              <h1 className='text-[#FF9B00]'>Read More</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Article