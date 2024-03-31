"use strict";(self.webpackChunklaravel_in_action=self.webpackChunklaravel_in_action||[]).push([[9057],{3619:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=a(4848),s=a(8453);const l={sidebar_position:10},t="Deploying a Laravel Application on AWS EC2 using Laravel Sail with Docker",o={id:"Deploying-Laravel",title:"Deploying a Laravel Application on AWS EC2 using Laravel Sail with Docker",description:"Here is a step by step guide to deploy a Laravel application on AWS EC2 using Laravel Sail with Docker. Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker development environment. It is designed to provide a minimal configuration for Laravel apps that are using Docker.",source:"@site/docs/Deploying-Laravel.md",sourceDirName:".",slug:"/Deploying-Laravel",permalink:"/laravel-in-action/docs/Deploying-Laravel",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/laravel-in-action/blob/main/docs/Deploying-Laravel.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Test-Driven Development (TDD) Workflow",permalink:"/laravel-in-action/docs/Testing-and-Test-Driven-Development/Test-Driven-Development-Workflow"}},r={},c=[{value:"Step 1: Create an AWS EC2 instance",id:"step-1-create-an-aws-ec2-instance",level:2},{value:"Step 2: Connect to the EC2 instance",id:"step-2-connect-to-the-ec2-instance",level:2},{value:"Step 3: Install Docker and Docker Compose",id:"step-3-install-docker-and-docker-compose",level:2},{value:"Step 4: Clone the Laravel Application",id:"step-4-clone-the-laravel-application",level:2},{value:"Step 5: Install Composer and Dependencies",id:"step-5-install-composer-and-dependencies",level:2},{value:"Step 6: Run the Laravel Application with Sail",id:"step-6-run-the-laravel-application-with-sail",level:2},{value:"Step 7: Access Your Application",id:"step-7-access-your-application",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploying-a-laravel-application-on-aws-ec2-using-laravel-sail-with-docker",children:"Deploying a Laravel Application on AWS EC2 using Laravel Sail with Docker"}),"\n",(0,i.jsx)(n.p,{children:"Here is a step by step guide to deploy a Laravel application on AWS EC2 using Laravel Sail with Docker. Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker development environment. It is designed to provide a minimal configuration for Laravel apps that are using Docker."}),"\n",(0,i.jsx)(n.h2,{id:"step-1-create-an-aws-ec2-instance",children:"Step 1: Create an AWS EC2 instance"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create an EC2 Instance"}),": Log in to your AWS Management Console, navigate to the EC2 Dashboard, and launch a new instance. Choose an Ubuntu Server as the Amazon Machine Image (AMI) because Laravel Sail runs in a Docker container, which is compatible with Linux environments."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configure Instance Details"}),": Select the instance type and configure instance details according to your needs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configure Security Group"}),": Add rules to allow HTTP (port 80), HTTPS (port 443), and SSH (port 22) traffic."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Launch Instance"}),": Review and launch your instance. Make sure to select a key pair for SSH access."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-connect-to-the-ec2-instance",children:"Step 2: Connect to the EC2 instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connect to the EC2 Instance"}),": Use the SSH key pair to connect to the EC2 instance using the terminal or an SSH client."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh -i /path/to/your-key-pair.pem ubuntu@your-ec2-instance-ip\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-install-docker-and-docker-compose",children:"Step 3: Install Docker and Docker Compose"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update and Upgrade Packages"}),": Run the following commands to update and upgrade the package list on the EC2 instance."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Install Docker"}),": Run the following commands to install Docker on the EC2 instance."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo apt-get install -y docker.io\nsudo apt-get install docker-ce docker-ce-cli containerd.io\nsudo systemctl start docker\nsudo systemctl enable docker\nsudo usermod -aG docker ${USER}\nsudo curl -L "<https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$>(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-clone-the-laravel-application",children:"Step 4: Clone the Laravel Application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clone the Laravel Application"}),": Clone your Laravel application from the repository to the EC2 instance using Git."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone <https://github.com/HMZElidrissi/Deploy-Laravel-on-EC2.git>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"if you need to clone a certain branch, you can use the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone --branch <your-branch-name> <https://github.com/HMZElidrissi/Deploy-Laravel-on-EC2.git>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-5-install-composer-and-dependencies",children:"Step 5: Install Composer and Dependencies"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Install Composer"}),": Run the following commands to install Composer on the EC2 instance."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install composer\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Install Dependencies"}),": Navigate to the root directory of your Laravel application and run the following command to install the dependencies."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd path/to/your/laravel-app\ncomposer install\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"if you need to install php8.3, you can use the following commands:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt -y install software-properties-common\nsudo add-apt-repository ppa:ondrej/php\nsudo apt-get update\nsudo apt-get install php8.3\nsudo apt-get install php8.3-cli php8.3-fpm php8.3-mysql php8.3-xml php8.3-mbstring php8.3-curl php8.3-zip php8.3-intl php8.3-gd\nsudo update-alternatives --set php /usr/bin/php8.3\n"})})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install Sail: Run the following command to install Laravel Sail."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"composer require laravel/sail --dev\nphp artisan sail:install\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If you need to use an alias for the ",(0,i.jsx)(n.code,{children:"sail"})," command, you can add the following line to your ",(0,i.jsx)(n.code,{children:".bashrc"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"alias sail='bash vendor/bin/sail'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-6-run-the-laravel-application-with-sail",children:"Step 6: Run the Laravel Application with Sail"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Run the Laravel Application"}),": Run the following command to start the Laravel application using Laravel Sail."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./vendor/bin/sail up -d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-7-access-your-application",children:"Step 7: Access Your Application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Access Your Application"}),": Open a web browser and enter the public IP address of your EC2 instance to access your Laravel application."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You may run into this error:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Laravel Error",src:a(653).A+"",width:"1536",height:"864"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To fix this error, you need just to grant write permissions to the storage directory:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo chmod -R 777 storage\nsudo chmod o+w ./storage/ -R\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Don't forget to change the ",(0,i.jsx)(n.code,{children:"APP_DEBUG"})," to false in the .env file \ud83d\ude09"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"This guide assumes a basic setup. Depending on your specific requirements (like using a database, queues, etc.), you might need to perform additional configuration steps."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},653:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/Laravel-EC2-fc7c087af4c27b9f06340190e7518e5a.png"},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>o});var i=a(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);