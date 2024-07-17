import Image from "next/image";

export default function MySkills() {
    return (
        <div className="w-full md:h-screen md:pl-[8%] pl-[4%] md:pr-[8%] pr-[4%]">
            <h1 className="text-4xl font-bold text-center mt-[2%] mb-[2%]">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/c_logo.png"
                alt="C Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">C</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/cpp_logo.svg"
                alt="C Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">C++</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/python_logo.png"
                alt="C++ Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">Python</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/java_logo.png"
                alt="Java Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">Java</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/javascript_logo.png"
                alt="JavaScript Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">JavaScript</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/css3_html5_logo.png"
                alt="HTML & CSS Logo"
                width={200}
                height={100}
                priority
                />
                <p className="text-center text-sm">HTML & CSS</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/bootstrap_logo.svg"
                alt="Bootstrap Logo"
                width={115}
                height={100}
                priority
                />
                <p className="text-center text-sm">Bootstrap</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/nodejs_logo.png"
                alt="Node.js Logo"
                width={200}
                height={100}
                priority
                />
                <p className="text-center text-sm">Node.js</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/react_logo.svg"
                alt="React Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">React</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/nextjs_logo.svg"
                alt="Next.js Logo"
                width={200}
                height={100}
                priority
                />
                <p className="text-center text-sm">Next.js</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/sql_logo.png"
                alt="SQL Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">SQL | MySQL | PL/SQL</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/logos/mongodb_logo.webp"
                alt="MongoDB Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">MongoDB</p>
            </div>
            </div>
        </div>
    );
}