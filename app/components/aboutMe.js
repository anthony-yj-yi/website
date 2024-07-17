export default function AboutMe() {
    return(
        <div className="w-full md:h-screen pl-[20%] pr-[20%] flex flex-col justify-center bg-cover"
        style={{
            backgroundImage: 'url(/bg1.jpg)'
        }}>
            <h1 className="text-6xl font-bold">Hi, I'm Anthony,</h1>
            <p className="text-4xl">
            a skilled programmer with a passion for web development.
            Experienced in C, C++, Java, Python, and JavaScript, I create responsive web
            applications using HTML, CSS, Bootstrap, Node.js, React, and Next.js.
            </p>
        </div>
    );
}