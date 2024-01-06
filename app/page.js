import Image from "next/image";

// flex min-h-screen flex-col items-center justify-between p-24


export default function Home() {
  return (
    <main className="mx-auto max-w-[80%] ">
    
    <div className="flex justify-between gap-1 pt-4 ">

      <ul>
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
        <a href="#blog">Blog</a>
      </ul>
     </div>

      
      
      <section id="home">
            <div class="container">
                <p>
                    Hello there! I'm Raymond Njagala, <br />a passionate
                    Software developer dedicated to creating meaningful and innovative
                    solutions. This is my digital playground where ideas come to life
                    and creativity knows no bounds. Whether you're here to explore my
                    past projects, discover my skills, or just to say hello, I'm
                    thrilled to have you. Take a stroll through my work, get to know the
                    person behind the screen, and feel free to reach out if you have
                    exciting opportunities or collaborations in mind. Let's build
                    something amazing together! 💡✨
                </p>
                <Image src="/ray4.JPEG" 
                width={300} 
                height={24} 
                alt="Raymond presenting" >
                  
                </Image>
            </div>
        </section>




<section id="about">
            <div class="about">

                <Image 
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800" 
                width={400} 
                height={400} />
                
                <div class="about-1">

                    <h1 >I'm a Developer</h1>
                    <h1 >I Can Design and Develop anything you want</h1>
                    
                    <div class="about-2">
                        
                        <p >Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 1 years of experience as a web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design and development process, from discussion and collaboration.
                        </p>
                    </div>
                </div>
                
            </div>


        </section>


      
      
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
          <Image
            src="/ray2.jpg"
            alt="Raymond"
            className="pb-3"
            width={100}
            height={24}
            priority
          />

          <Image
            src="/ray4.jpeg"
            alt="Raymond"
            className=""
            width={100}
            height={24}
            priority
          />
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className=""
          src="/ray3.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        
              </div>
    </main>
  );
}
