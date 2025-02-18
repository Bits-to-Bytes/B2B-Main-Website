import { StaticImageData } from 'next/image';
import diya from '../../public/members/diya.png';
import gunj from '../../public/members/gunj.png';
import mandip from '../../public/members/mandip.png';
import maulik from '../../public/members/maulik.png';
import monil from '../../public/members/monil.png';
import parmita from '../../public/members/parmita.png';
import priyansh from '../../public/members/priyansh.png';
import rudra from '../../public/members/rudra.png';
import shivani from '../../public/members/shivani.png';
import sujal from '../../public/members/sujal.png';
import tejasvi from '../../public/members/tejasvi.png';
import sahil from '../../public/members/sahil.png';
import karan from '../../public/members/karan.png';
import hinal from '../../public/members/hinal.png';
import dhruvi from '../../public/members/dhruvi.png';

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData | null;
  contact: string;
  email: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  github: string;
  portfolio: string;
}

// --- LEAD MEMBERS ---
const leadMembers: TeamMember[] = [
  {
    name: 'Monil Prajapati',
    role: 'President',
    image: monil,
    contact: '7990407581',
    email: 'monillprajapatii@gmail.com',
    linkedin: 'https://www.linkedin.com/in/monilprajapati/',
    twitter: '@MonilPrajapatii',
    instagram: 'monil_prajapati_01',
    github: '',
    portfolio: 'https://monilprajapati.tech/',
  },
  {
    name: 'Gunj Patel',
    role: 'Vice President',
    image: gunj,
    contact: '9429085111',
    email: 'gunj20patel05@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gunj-patel-2927b2297/',
    twitter: '@Gunj_2008',
    instagram: 'gunj_2008',
    github: '',
    portfolio: '',
  },
  {
    name: 'Diya Doshi',
    role: 'PR Lead',
    image: diya,
    contact: '8269411035',
    email: 'dddoshi03@gmail.com',
    linkedin: 'https://www.linkedin.com/in/diya-doshi-694b56220/',
    twitter: '@diya_doshi03',
    instagram: 'diya_doshi03',
    github: '',
    portfolio: '',
  },
  {
    name: 'Maulik Bambhaniya',
    role: 'PR Manager',
    image: maulik,
    contact: '9104552138',
    email: 'maulik304@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maulik-bambhaniya-90099b245/',
    twitter: '@maulik304',
    instagram: 'maulik_304',
    github: '',
    portfolio: '',
  },
];

// --- EXECUTIVE MEMBERS ---
const executiveMembers: TeamMember[] = [
  {
    name: 'Parmita Upadhyay',
    role: 'Executive Member',
    image: parmita,
    contact: '9428987969',
    email: 'parmitaupadhyay3@gmail.com',
    linkedin: 'https://www.linkedin.com/in/parmita-upadhyay-121967242',
    twitter: '@ParmitaUpadhyay',
    instagram: 'parmita_upadhyay',
    github: '',
    portfolio: '',
  },
  {
    name: 'Priyansh Patel',
    role: 'Executive Member',
    image: priyansh,
    contact: '6355483723',
    email: 'priyansh.180804@gmail.com',
    linkedin: 'https://www.linkedin.com/in/priyansh-patel-1570b0251',
    twitter: '@priyansh_ptl18',
    instagram: 'priyansh.ptl18',
    github: 'priyanshpatel18',
    portfolio: 'https://cv.priyanshpatel.site',
  },
  {
    name: 'Mandip Kamaliya',
    role: 'Executive Member',
    image: mandip,
    contact: '8200990088',
    email: 'mandipkamaliya7@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mandip-kamaliya-267929248/',
    twitter: '@mandip_twt_',
    instagram: 'mandip_kamaliya_',
    github: '',
    portfolio: '',
  },
  {
    name: 'Surajit Pal',
    role: 'Executive Member',
    image: null,
    contact: '9586422516',
    email: 'surajitpal.5335@gmail.com',
    linkedin: 'https://www.linkedin.com/in/surajit-pal-340343298/',
    twitter: '',
    instagram: 'surajitpal_',
    github: '',
    portfolio: '',
  },
  {
    name: 'Kenil Kanani',
    role: 'Executive Member',
    image: null,
    contact: '9726914606',
    email: 'kenilkanani16@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kenil-kanani-5ab300219',
    twitter: '@kenil_kanani_16',
    instagram: 'kenil_kanani_16',
    github: '',
    portfolio: '',
  },
  {
    name: 'Vivek Jadhav',
    role: 'Executive Member',
    image: null,
    contact: '7383997928',
    email: 'vivekjadav127@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vivek-jadav-python-developer/',
    twitter: '@_Vivvvek',
    instagram: '',
    github: '',
    portfolio: '',
  },
  {
    name: 'Sahil Katariya',
    role: 'Executive Member',
    image: sahil,
    contact: '8980657423',
    email: 'sahil.katari269@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sahil-katariya-3418b931b/',
    twitter: '',
    instagram: 'Sk.ahir.269',
    github: '',
    portfolio: '',
  },
  {
    name: 'Sujal Parmar',
    role: 'Executive Member',
    image: sujal,
    contact: '7863822869',
    email: 'mailsujal166@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sujal-parmar-08ab69278',
    twitter: '@daydreamringeek',
    instagram: '',
    github: '',
    portfolio: '',
  },
];

// --- ASSOCIATE MEMBERS ---
const associateMembers: TeamMember[] = [
  {
    name: 'Tejasvi Maniya',
    role: 'Associate Member',
    image: tejasvi,
    contact: '7863015262',
    email: 'tejasvimaniya8493@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tejasvi-maniya-591548297/',
    twitter: '@ManiyaTejasvi',
    instagram: 'tejasvi_89',
    github: '',
    portfolio: '',
  },
  {
    name: 'Shivani Sodha',
    role: 'Associate Member',
    image: shivani,
    contact: '9773102051',
    email: 'pratikshasodha1984@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shivani-sodha-bb6a02323/',
    twitter: '',
    instagram: 'sodhashivanijitendrasinh',
    github: '',
    portfolio: '',
  },
  {
    name: 'Rudra Parmar',
    role: 'Associate Member',
    image: rudra,
    contact: '9726584486',
    email: 'rudradparmar06@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rudra-parmar-20568a285/',
    twitter: '@RudraPa99270947',
    instagram: '',
    github: '',
    portfolio: '',
  },
  {
    name: 'Dhruvi Mevada',
    role: 'Associate Member',
    image: dhruvi,
    contact: '8780158457',
    email: 'dhruvimevada456@gmail.com',
    linkedin: '',
    twitter: '',
    instagram: 'dhruvi_mvd',
    github: '',
    portfolio: '',
  },
  {
    name: 'Karan Pathak',
    role: 'Associate Member',
    image: karan,
    contact: '7984410287',
    email: 'karanpathak308@gmail.com',
    linkedin: '',
    twitter: '',
    instagram: 'karan_pathak_007',
    github: '',
    portfolio: '',
  },
  {
    name: 'Hinal Tank',
    role: 'Associate Member',
    image: hinal,
    contact: '8238252104',
    email: 'tankhinal41@gmail.com',
    linkedin: '',
    twitter: '',
    instagram: 'tank_hinal_41',
    github: '',
    portfolio: '',
  },
];

export const teamMembers: TeamMember[] = [
  ...leadMembers,
  ...executiveMembers,
  ...associateMembers,
];

export const mentors = [
  {
    name: 'Prof. Chinmay Vyas',
    role: 'Faculty Coordinator',
    contact: '9426146392',
    email: 'chinmayvyas.27@gmail.com',
  },
  {
    name: 'Prof. Karshan Kandoriya',
    role: 'Faculty Advisor',
    contact: '9033711408',
    email: 'karshankandoriya@gmail.com',
  },
  {
    name: 'Shailee Shah',
    role: 'Alumni Advisor',
    contact: '9328256707',
    email: 'sshaileeshah@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shailee-shah-58a349210/',
  },
];
