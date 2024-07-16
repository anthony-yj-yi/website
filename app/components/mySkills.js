import Image from "next/image";
import Link from "next/link";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function MySkills() {
    return (
        <div>
            <h1 className="text-4xl font-bold">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/c_logo.png"
                alt="C Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">C</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/cpp_logo.svg"
                alt="C Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">C++</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/python_logo.png"
                alt="C++ Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">Python</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/java_logo.png"
                alt="Java Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">Java</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/javascript_logo.png"
                alt="JavaScript Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">JavaScript</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/css3_html5_logo.png"
                alt="HTML & CSS Logo"
                width={200}
                height={100}
                priority
                />
                <p className="text-center text-sm">HTML & CSS</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/bootstrap_logo.svg"
                alt="Bootstrap Logo"
                width={115}
                height={100}
                priority
                />
                <p className="text-center text-sm">Bootstrap</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/nodejs_logo.png"
                alt="Node.js Logo"
                width={200}
                height={100}
                priority
                />
                <p className="text-center text-sm">Node.js</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/react_logo.svg"
                alt="React Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">React</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/nextjs_logo.svg"
                alt="Next.js Logo"
                width={200}
                height={100}
                priority
                />
                <p className="text-center text-sm">Next.js</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/sql_logo.png"
                alt="SQL Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">SQL | MySQL | PL/SQL</p>
            </div>
            <div className="p-4 shadow-md flex flex-col items-center justify-between">
                <Image
                src="/mongodb_logo.webp"
                alt="MongoDB Logo"
                width={100}
                height={100}
                priority
                />
                <p className="text-center text-sm">MongoDB</p>
            </div>
            </div>
            <Link href="/resume.pdf" target="_blank">
                View Full Resume
                <OpenInNewIcon></OpenInNewIcon>
            </Link>
        </div>
    );
}