import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactMe() {
    return (
        <div className="flex flex-col justify-start pt-[2%] pb-[2%] md:pl-[10%] pl-[5%] md:pr-[10%]">
            <div><h1 className="text-4xl font-bold">Contact Me</h1></div>
            <div className="flex flex-row justify-between gap-x-24">
                <div>
                    <div className="flex flex-row items-center">
                    <Link href="mailto:anthony.yj.yi@gmail.com">
                        <EmailIcon style={{ height: '50px', width: '50px' }}></EmailIcon>
                    </Link>
                    <Link href="https://www.linkedin.com/in/anthony-yi-88200514a/" target="_blank">
                        <LinkedInIcon style={{ height: '45px', width: '45px' }}></LinkedInIcon>
                    </Link>
                    <Link href="https://github.com/anthony-yj-yi/" target="_blank">
                        <GitHubIcon style={{ height: '39px', width: '39px' }}></GitHubIcon>
                    </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="md:text-sm text-xs">This website was built in JavaScript using Next.js and deployed with Vercel.</p>
                </div>
            </div>
        </div>
        
        
    );
}