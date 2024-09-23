\documentclass[a4paper,20pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[pdftex]{hyperref}
\usepackage{fancyhdr}
\usepackage{fontawesome} % Ensure fontawesome package is included

\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.530in}
\addtolength{\evensidemargin}{-0.375in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.45in}
\addtolength{\textheight}{1in}

\urlstyle{rm}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-10pt}\scshape\raggedright\large
}{}{0em}{}[\titlerule \vspace{-6pt}]

%-------------------------
% Custom commands
\newcommand{\resumeItem}[2]{
  \item\small{
    \textbf{#1}{: #2} \vspace{-2pt}
  }
}

\newcommand{\resumeItemWithoutTitle}[1]{
  \item\small{
    {#1}\vspace{-2pt}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{#3} & \textit{#4} \\
    \end{tabular*}\vspace{-5pt}
}

\newcommand{\resumeSubItem}[2]{\resumeItem{#1}{#2}\vspace{-3pt}}

\renewcommand{\labelitemii}{$\circ$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=*]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-----------------------------
%%%%%%  CV STARTS HERE  %%%%%%

\begin{document}

%----------HEADING-----------------
\begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
  \textbf{{\LARGE Raunak Mishra}} & \faLinkedinSquare~\href{https://www.linkedin.com/in/raunak-mishra-115b37215}{linkedin.com/in/raunakmishra} \\
  \faEnvelope~\href{mailto:raunakmishra9798@gmail.com}{raunakmishra9798@gmail.com} & \faGithub~\href{https://github.com/raunakjr}{github.com/raunakjr} \\
  \faPhone~+91 9798714308 & \faCode~\href{https://leetcode.com/u/raunakmishra1243/}{leetcode.com/raunakmishra1243} \\
\end{tabular*}

%-----------EDUCATION-----------------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {\textbf{National Institute of Technology Patna}}{Bihar, India}
      {\textit{Bachelor of Technology - Electronics \& Communication; CGPA: 8.2}}{\textit{Jul 2024}} % Made date italic
  \resumeSubHeadingListEnd

\vspace{2pt} % Adjust the spacing

%-----------SKILLS-----------------
\section{Skills}
  \resumeSubHeadingListStart
    \resumeSubItem{\textbf{Programming Languages}}{\textbf{C++}, JavaScript, Python, SQL}
    \resumeSubItem{\textbf{Web Development}}{HTML5, Django, CSS, RESTful APIs, \textbf{React}, \textbf{Node.js}, \textbf{Express.js}, Bootstrap, Tailwind}
    \resumeSubItem{\textbf{Tools \& Technologies}}{Git, GitHub, MySQL, VsCode}
    \resumeSubItem{\textbf{Subjects}}{Operating Systems, Database Management Systems, Computer Networks}
    \resumeSubItem{\textbf{Soft Skills}}{Leadership, Event Management, Public Speaking}
    \resumeSubItem{\textbf{Areas of Interest}}{\textbf{Data Structures}, \textbf{Algorithms}, \textbf{Competitive Programming}}
  \resumeSubHeadingListEnd

\vspace{2pt} % Adjust the spacing

%-----------EXPERIENCE-----------------
\section{\textbf{Experience}}
  \resumeSubHeadingListStart
    \resumeSubheading
      {o9 Solutions}{Bengaluru}
      {Application Developer}{\textit{Jan 2024 - Present}} % Made date italic
    \resumeItemListStart
      \item {Engineered and executed a series of intricate queries using IBPL, enabling seamless extraction and analysis of over 1 million data points; improved data retrieval speed by 10\% and accuracy by 27\%.}
      \item {Created and optimized 5+ Python plugins on the o9 platform, allowing real-time data analytics and reporting; these plugins are now utilized by over 10 team members, enhancing cross-functional collaboration and efficiency.}
      \item {Revamped demand forecasting model, achieving a 25\% increase in accuracy by replacing the outdated algorithm with a new data-driven approach, resulting in a 10\% boost in supply chain efficiency.}
      \item {Enhanced demand forecasting precision by 20\% through the development and implementation of a custom algorithm that supplanted the existing best-fit model, leading to a 15\% reduction in inventory costs.}
    \resumeItemListEnd
  \resumeSubHeadingListEnd

\vspace{2pt} % Adjust the spacing

%-----------PROJECTS-----------------
\section{\textbf{Personal Projects}}
  \resumeSubHeadingListStart
    \resumeSubItem{Crypto Currency Tracker}{Tracking Realtime prices of 100+ Cryptocurrencies }{\hfill \textit{Aug 2024}}{} % Made date italic
    \resumeItemListStart
      \item {Tools \& technologies used: \textbf{ReactJs}, \textbf{Material UI}, \textbf{Chart JS}, \textbf{Context API}, \textbf{Firebase}.}
      \item {Cryptocurrency price tracker monitors the current value of digital currencies, market capitalization, 24H change, price charts, and other types of data.}
      \item {Implemented user authentication using Firebase, enabling secure login via email and password credentials for over 1,000 users.}
    \resumeItemListEnd

    \resumeSubItem{React-MovieApp}{Provides user information and statistics about 20+ upcoming and released movies }{\hfill \textit{July 2024}}{} % Made date italic
    \resumeItemListStart
      \item {Tools \& technologies used: \textbf{JavaScript}, \textbf{TMDb API}.}
      \item {Developed a React-based movie website with a user base of over 5,000, allowing users to search movies by title, sort by genre, and view trending and upcoming releases.
      \item Redesigned interface for a 50\% boost in usability, reducing load time by 40\%, and increasing user engagement by 35\% and retention rates by 20\%.}
    \resumeItemListEnd
  \resumeSubHeadingListEnd

\vspace{2pt} % Adjust the spacing

%-----------ACHIEVEMENTS-----------------
\section{\textbf{Achievements}}
\vspace{-0.1mm}
\resumeSubHeadingListStart

\resumeSubItem{Leetcode}{}
\vspace{-1mm}
\resumeItemListStart
  \resumeSubItem{}{Solved \textbf{1200+} Questions}
  \vspace{1mm}
  \resumeSubItem{}{Knight Batch with Rating \textbf{2000+} | Top 2\% Globally}
  \vspace{1mm}
  
\resumeItemListEnd

\vspace{2mm}

\resumeSubItem{InterviewBit}{}
\vspace{-1mm}
\resumeItemListStart
  \resumeSubItem{}{Institute Rank \textbf{1} Mastered Level 8}
\resumeItemListEnd

\vspace{2mm}

\resumeSubItem{CodeChef}{}
\vspace{-1mm}
\resumeItemListStart
  \resumeSubItem{}{\textbf{3}-Star with Rating  \textbf{1632}}
   \vspace{1mm}
  \resumeSubItem{}{Secured Global Rank \textbf{243} out of 5,000 in Starters 140 Division 3 (Rated)}
   \vspace{1mm}
\resumeItemListEnd

\vspace{2mm}

\resumeSubItem{Codeforces}{}
\vspace{-1mm}
\resumeItemListStart
  \resumeSubItem{}{Pupil Batch with Rating \textbf{1202}}
\resumeItemListEnd

\vspace{2mm}

\resumeSubItem{GeeksforGeeks}{}
\vspace{-1mm}
\resumeItemListStart
  \resumeSubItem{}{Secured Global Rank \textbf{104} out of 2,497 in GFG Weekly-154}
  
   \vspace{1mm}
  \resumeSubItem{}{Solved \textbf{800+} Questions with Institute Rank 15}
\resumeItemListEnd

\vspace{2mm}



\resumeSubHeadingListEnd
\vspace{-5mm}

\end{document}
